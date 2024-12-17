package cn.com.v2.controller;

import cn.com.v2.common.base.BaseController;
import cn.com.v2.common.config.V2Config;
import cn.com.v2.common.domain.AjaxResult;
import cn.com.v2.common.domain.ResultTable;
import cn.com.v2.common.domain.Tablepar;
import cn.com.v2.model.*;
import cn.com.v2.model.vo.GoviewProjectVo;
import cn.com.v2.model.vo.GoviewTemplateVo;
import cn.com.v2.model.vo.SysFileVo;
import cn.com.v2.service.*;
import cn.com.v2.util.ConvertUtil;
import cn.com.v2.util.SaTokenUtil;
import cn.com.v2.util.SnowflakeIdWorker;
import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.util.IdGenerator;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.client.RestTemplate;
import org.springframework.data.redis.core.RedisTemplate;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author fc
 * @since 2023-04-30
 */
@RestController
@RequestMapping("api/goview/object")
public class GoviewTamplateController extends BaseController {

    @Autowired
    private IGoviewTemplateService iGoviewTemplateService;
    @Autowired
    private IGoviewTemplateDataService iGoviewTemplateDataService;
    @Autowired
    private ISysUserService iSysUserService;
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    private static final String SEARCH_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search";
    private static final String OBJECT_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";


    private final RestTemplate restTemplate = new RestTemplate();
    @Transactional(rollbackFor = Exception.class)
    @PostMapping("/like")
    public AjaxResult addFavorite(@RequestBody Map<String, String> requestBody) {
        // 获取 Sa-Token 中的用户 ID
        String userId = StpUtil.getLoginIdAsString();

        // 获取 objectID
        String objectID = requestBody.get("objectID");
        if (objectID == null || objectID.trim().isEmpty()) {
            return AjaxResult.error(400, "objectID cannot be empty");
        }

        // Step 1: 调用大都会博物馆 API，获取藏品内容
        String apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objectID;

        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null || response.getBody().contains("\"message\"")) {
            return AjaxResult.error(404, "Fail by not found object");
        }

         GoviewTemplate existingFavorite = iGoviewTemplateService.getOne(
                new LambdaQueryWrapper<GoviewTemplate>()
                        .eq(GoviewTemplate::getUserId, userId)
                        .eq(GoviewTemplate::getTemplateId, objectID)
                        .eq(GoviewTemplate::getIsDelete, 0)
        );

        if (existingFavorite != null) {
            // 如果已经收藏，则删除收藏记录
            iGoviewTemplateService.removeById(existingFavorite.getId());
            return AjaxResult.success("取消收藏成功");
        }

        // Step 2: 检查 t_goview_template_data 表是否存在该 objectID
        GoviewTemplateData existingData = iGoviewTemplateDataService.getOne(
                new LambdaQueryWrapper<GoviewTemplateData>().eq(GoviewTemplateData::getId, objectID)
        );

        // Step 3: 如果不存在，插入到 t_goview_template_data 表
        if (existingData == null) {
            GoviewTemplateData newData = new GoviewTemplateData();
            newData.setId(objectID);
            newData.setCreateTime(DateUtil.now());
            newData.setContent(response.getBody()); // 保存 API 返回的 JSON 内容
            iGoviewTemplateDataService.save(newData);
        }

        // Step 4: 插入用户收藏记录到 t_goview_template 表
        GoviewTemplate favorite = new GoviewTemplate();
        favorite.setTemplateId(objectID);
        favorite.setUserId(userId);
        favorite.setIsDelete(0);
        favorite.setCreateTime(DateUtil.now());


        iGoviewTemplateService.save(favorite);

        return AjaxResult.success("收藏成功");
    }
@GetMapping("/getlike")
    public ResultTable getFavorites() {
        // Step 1: 获取当前用户ID
        String userId = StpUtil.getLoginIdAsString();

        // Step 2: 查询用户收藏的 objectID 列表
        List<GoviewTemplate> favorites = iGoviewTemplateService.list(
                new LambdaQueryWrapper<GoviewTemplate>()
                        .eq(GoviewTemplate::getUserId, userId)
                        .eq(GoviewTemplate::getIsDelete, 0)
        );

        if (favorites.isEmpty()) {
            ResultTable resultTable = new ResultTable();
            resultTable.setCode(200);
            resultTable.setData(null);
            resultTable.setMsg("获取成功");
            return resultTable;
        }

        // Step 3: 拉取大都会博物馆 API 数据
        List<String> objectIDs = favorites.stream()
                .map(GoviewTemplate::getTemplateId)
                .distinct() // 去重
                .collect(Collectors.toList());

        List<Map<String, Object>> resultList = new ArrayList<>();
        for (String objectID : objectIDs) {
            String apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objectID;

            try {
                ResponseEntity<Map> response = restTemplate.getForEntity(apiUrl, Map.class);
                if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                    resultList.add(response.getBody());
                }
            } catch (Exception e) {
                System.out.println("Failed to fetch objectID: " + objectID);
            }
        }
          ResultTable resultTable = new ResultTable();
        resultTable.setCode(200);
        resultTable.setData(resultList);
        resultTable.setMsg("获取成功");
        return resultTable;
    }

@GetMapping("/recommend")
public AjaxResult recommendItems(@RequestHeader(value = "satoken", required = false) String token,
                                 @RequestParam(value = "page", defaultValue = "1") int page,
                                 @RequestParam(value = "limit", defaultValue = "10") int limit) {
    List<String> objectIds;

    // 检查用户是否已登录
    if (token == null || token.isEmpty()) {
        objectIds = getRandomObjectIds();
    } else {
        Long userId = StpUtil.getLoginIdAsLong(); // 获取当前用户 ID
        String cacheKey = "recommend:" + userId;

        // 从 Redis 缓存获取推荐的 objectID 列表
        objectIds = (List<String>) redisTemplate.opsForValue().get(cacheKey);

        if (objectIds == null) {
            // 1. 查询用户收藏的藏品 ID
            List<String> userFavorites = iGoviewTemplateService.list(
                    new LambdaQueryWrapper<GoviewTemplate>()
                            .eq(GoviewTemplate::getUserId, userId)
                            .eq(GoviewTemplate::getIsDelete, 0)
            ).stream()
             .map(GoviewTemplate::getTemplateId)
             .distinct()
             .collect(Collectors.toList());

            if (userFavorites.isEmpty()) {
                return error(404, "没有收藏记录，无法推荐");
            }

            // 2. 提取用户收藏的特征
            List<MetMuseumItem> favoriteItems = getMetMuseumItems(userFavorites);
            Map<String, Integer> featureCount = extractFeaturesWithWeights(favoriteItems);

            // 3. 获取推荐的 objectIDs
            objectIds = recommendObjectIds(featureCount);

            // 4. 缓存前 150 个 objectID，设置过期时间
            redisTemplate.opsForValue().set(cacheKey, objectIds, 10, TimeUnit.MINUTES);
        }
    }

    // 5. 分页逻辑
    int total = objectIds.size();
    int start = (page - 1) * limit;
    int end = Math.min(start + limit, total);

    List<String> pagedObjectIds = new ArrayList<>();
    if (start < total) {
        pagedObjectIds = objectIds.subList(start, end);
    }

    // 6. 获取详细信息
    List<Map<String, Object>> detailedItems = getMetMuseumDetails(pagedObjectIds);

    return success()
            .put("data", detailedItems)
            .put("total", total)
            .put("page", page)
            .put("limit", limit);
}

    private List<MetMuseumItem> getMetMuseumItems(List<String> objectIds) {
        List<MetMuseumItem> items = new ArrayList<>();
        for (String objectId : objectIds) {
            try {
                MetMuseumItem item = restTemplate.getForObject(OBJECT_URL + objectId, MetMuseumItem.class);
                if (item != null) {
                    items.add(item);
                }
            } catch (Exception e) {
                System.out.println("Failed to fetch object ID: " + objectId);
            }
        }
        return items;
    }

    // 提取藏品特征，并引入权重
    private Map<String, Integer> extractFeaturesWithWeights(List<MetMuseumItem> items) {
        Map<String, Integer> featureCount = new HashMap<>();
        for (MetMuseumItem item : items) {
            incrementFeatureWithWeight(featureCount, item.getDepartment(), 2);
            incrementFeatureWithWeight(featureCount, item.getArtistDisplayName(), 3);
            incrementFeatureWithWeight(featureCount, item.getMedium(), 1);
        }
        return featureCount;
    }

        private void incrementFeatureWithWeight(Map<String, Integer> featureCount, String feature, int weight) {
        if (feature != null && !feature.isEmpty()) {
            featureCount.put(feature, featureCount.getOrDefault(feature, 0) + weight);
        }
    }
// 返回最多 150 个推荐的 objectIDs (String 类型)
private List<String> recommendObjectIds(Map<String, Integer> featureCount) {
    Map<String, Integer> objectScoreMap = new HashMap<>();

    for (Map.Entry<String, Integer> entry : featureCount.entrySet()) {
        String feature = entry.getKey();
        int weight = entry.getValue();

        try {
            String queryUrl = SEARCH_URL + "?q=" + feature;
            MetMuseumSearchResult result = restTemplate.getForObject(queryUrl, MetMuseumSearchResult.class);

            if (result != null && result.getObjectIDs() != null) {
                Arrays.stream(result.getObjectIDs())
                        .limit(50)
                        .map(String::valueOf)// 每个特征最多取 50 个 objectID
                        .forEach(objectID -> objectScoreMap.put(
                                objectID, objectScoreMap.getOrDefault(objectID, 0) + weight));
            }
        } catch (Exception e) {
            System.out.println("Failed to fetch for feature: " + feature);
        }
    }

    // 按分数排序，返回最多 150 个 objectIDs
    return objectScoreMap.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .map(Map.Entry::getKey) // 获取 String 类型的 objectID
            .limit(150)
            .collect(Collectors.toList());
}

// 获取随机的 objectIDs (String 类型)
private List<String> getRandomObjectIds() {
    List<String> randomObjectIds = new ArrayList<>();
    try {
        String queryUrl = SEARCH_URL + "?q=art";
        MetMuseumSearchResult result = restTemplate.getForObject(queryUrl, MetMuseumSearchResult.class);

        if (result != null && result.getObjectIDs() != null) {
            randomObjectIds = Arrays.stream(result.getObjectIDs())
                    .limit(150) // 随机获取 150 个 objectID
                    .map(String::valueOf)
                    .collect(Collectors.toList());
        }
    } catch (Exception e) {
        System.out.println("Failed to fetch random object IDs.");
    }
    return randomObjectIds;
}

// 获取详细信息
private List<Map<String, Object>> getMetMuseumDetails(List<String> objectIds) {
    List<Map<String, Object>> detailsList = new ArrayList<>();
    for (String objectId : objectIds) {
        try {
            String detailedUrl = OBJECT_URL + objectId;
            Map<String, Object> details = restTemplate.getForObject(detailedUrl, Map.class);
            if (details != null) {
                detailsList.add(details);
            }
        } catch (Exception e) {
            System.out.println("Failed to fetch details for Object ID: " + objectId);
        }
    }
    return detailsList;
}






//
//
//    @ApiOperation(value = "分页跳转", notes = "分页跳转")
//    @GetMapping("/list")
//    @ResponseBody
//    public ResultTable list(Tablepar tablepar, @RequestHeader(value = "satoken", required = false) String token) {
//        LambdaQueryWrapper<GoviewTemplate> queryWrapper = new LambdaQueryWrapper<>();
//        Page<GoviewTemplate> page = new Page<>(tablepar.getPage(), tablepar.getLimit());
//        queryWrapper.eq(GoviewTemplate::getIsDelete, 0);
//        if (tablepar.getTemplateType() != null&& !tablepar.getTemplateType().isEmpty()) {
//            queryWrapper.eq(GoviewTemplate::getTemplateType, tablepar.getTemplateType());
//        }
//        if (tablepar.getTypeId() != null&& !tablepar.getTypeId().isEmpty()) {
//            queryWrapper.eq(GoviewTemplate::getTypeId, tablepar.getTypeId());
//        }
//        if (tablepar.getStartTime() != null && !tablepar.getStartTime().isEmpty()) {
//            queryWrapper.ge(GoviewTemplate::getCreateTime, tablepar.getStartTime());
//        }
//        if (tablepar.getEndTime() != null && !tablepar.getEndTime().isEmpty()) {
//            queryWrapper.le(GoviewTemplate::getCreateTime, tablepar.getEndTime());
//        }
//        if (tablepar.getName() != null && !tablepar.getName().isEmpty()) {
//            queryWrapper.like(GoviewTemplate::getTemplateName, tablepar.getName());
//        }
//        if(tablepar.getState() != null){
//            queryWrapper.eq(GoviewTemplate::getState, tablepar.getState());
//        }else{
//            queryWrapper.eq(GoviewTemplate::getCreateUserId, StpUtil.getLoginIdAsString());
//        }
//
//        IPage<GoviewTemplate> iPages = iGoviewTemplateService.page(page, queryWrapper);
//        List<String> ids = iPages.getRecords().stream().map(GoviewTemplate::getCreateUserId).collect(Collectors.toList());
//        LambdaQueryWrapper<SysUser> sysUserLambdaQueryWrapper = new LambdaQueryWrapper<>();
//        sysUserLambdaQueryWrapper.in(SysUser::getId, ids);
//        Map<String, String>  namesMap = iSysUserService.list(sysUserLambdaQueryWrapper).stream().collect(Collectors.toMap(SysUser::getId, SysUser::getUsername));
//        System.out.println(namesMap);
//        List<GoviewTemplateVo> goviewTemplateVo = iPages.getRecords().stream().map(template->{
//            GoviewTemplateVo vo = new GoviewTemplateVo();
//            BeanUtils.copyProperties(template, vo);
//            return vo;
//        }).collect(Collectors.toList());
//        System.out.println(goviewTemplateVo);
//        for(GoviewTemplateVo item: goviewTemplateVo){
//            item.setUserName(namesMap.get(item.getCreateUserId()));
//        }
//        ResultTable resultTable = new ResultTable();
//        resultTable.setData(goviewTemplateVo);
//        resultTable.setCode(200);
//        resultTable.setCount(iPages.getTotal());
//        resultTable.setMsg("获取成功");
//        return resultTable;
//    }
//
//
//    /**
//     * 新增保存
//     *
//     * @param
//     * @return
//     */
//    //@Log(title = "项目表新增", action = "111")
//    @ApiOperation(value = "新增", notes = "新增")
//    @PostMapping("/create")
//    @ResponseBody
//    public AjaxResult add(@RequestBody GoviewTemplate goviewTemplate) {
//        goviewTemplate.setCreateTime(DateUtil.now());
//        goviewTemplate.setState(-1);
//        goviewTemplate.setCreateUserId(StpUtil.getLoginIdAsString());
//        goviewTemplate.setIsDelete(0);
//        boolean b = iGoviewTemplateService.save(goviewTemplate);
//        if (b) {
//            return successData(200, goviewTemplate).put("msg", "创建成功");
//        } else {
//            return error();
//        }
//    }
//
//
//    /**
//     * 项目表删除
//     *
//     * @param ids
//     * @return
//     */
//    //@Log(title = "项目表删除", action = "111")
//    @Transactional(rollbackFor = Exception.class)
//    @ApiOperation(value = "删除", notes = "删除")
//    @DeleteMapping("/delete")
//    @ResponseBody
//    public AjaxResult remove(String ids) {
//        List<String> lista = ConvertUtil.toListStrArray(ids);
//        for (String id : lista) {
//            String userId = iGoviewTemplateService.getById(id).getCreateUserId();
//            if(!StpUtil.getLoginIdAsString().equals(userId)){
//                return error("token错误，非创建用户操作");
//            }
//        }
//        LambdaUpdateWrapper<GoviewTemplate> updateWrapper = new LambdaUpdateWrapper<>();
//        updateWrapper.in(GoviewTemplate::getId, lista);
//        updateWrapper.set(GoviewTemplate::getIsDelete, 1);
//        Boolean b = iGoviewTemplateService.update(updateWrapper);
//        if (b) {
//            return success();
//        } else {
//            return error();
//        }
//    }
//
//    @ApiOperation(value = "修改保存", notes = "修改保存")
//    @PostMapping("/edit")
//    @ResponseBody
//    public AjaxResult editSave(@RequestBody GoviewTemplate goviewTemplate) {
//        String userId = iGoviewTemplateService.getById(goviewTemplate.getId()).getCreateUserId();
//        if(!StpUtil.getLoginIdAsString().equals(userId)) {
//            return error("token错误，非创建用户操作");
//        }
//        Boolean b = iGoviewTemplateService.updateById(goviewTemplate);
//        if (b) {
//            return success();
//        }
//        return error();
//    }
//
//
//    @ApiOperation(value = "项目重命名", notes = "项目重命名")
//    @PostMapping("/rename")
//    @ResponseBody
//    public AjaxResult rename(@RequestBody GoviewTemplate goviewTemplate) {
//        String userId = iGoviewTemplateService.getById(goviewTemplate.getId()).getCreateUserId();
//        if(!StpUtil.getLoginIdAsString().equals(userId)) {
//            return error("token错误，非创建用户操作");
//        }
//        LambdaUpdateWrapper<GoviewTemplate> updateWrapper = new LambdaUpdateWrapper<>();
//        updateWrapper.eq(GoviewTemplate::getId, goviewTemplate.getId());
//        updateWrapper.set(GoviewTemplate::getTemplateName, goviewTemplate.getTemplateName());
//        updateWrapper.eq(GoviewTemplate::getIsDelete, 0);
//        Boolean b = iGoviewTemplateService.update(updateWrapper);
//        if (b) {
//            return success();
//        }
//        return error();
//    }
//
//    @Transactional
//    //发布/取消项目状态
//    @PutMapping("/publish")
//    @ResponseBody
//    public AjaxResult updateVisible(@RequestBody GoviewTemplate goviewTemplate) {
//        GoviewTemplate targetTemplate = iGoviewTemplateService.getById(goviewTemplate.getId());
//        String userId = iGoviewTemplateService.getById(goviewTemplate.getId()).getCreateUserId();
//        if(!StpUtil.getLoginIdAsString().equals(userId)) {
//            return error("token错误，非创建用户操作");
//        }
//        if ((targetTemplate.getState() == -1 || targetTemplate.getState() == 1) && targetTemplate.getCreateUserId() != null) {
//            //必须有发布id的模板才可以被发布或者取消发布
//            LambdaUpdateWrapper<GoviewTemplate> updateWrapper = new LambdaUpdateWrapper<>();
//            updateWrapper.eq(GoviewTemplate::getId, goviewTemplate.getId());
//            updateWrapper.set(GoviewTemplate::getState, goviewTemplate.getState());
//            updateWrapper.eq(GoviewTemplate::getIsDelete, 0);
//            Boolean b = iGoviewTemplateService.update(updateWrapper);
//            if (b) {
//                return success();
//            }
//            return error();
//        }
//        return error("警告非法字段");
//    }
//
//
//    @ApiOperation(value = "获取项目存储数据", notes = "获取项目存储数据")
//    @GetMapping("/getData")
//    @ResponseBody
//    public AjaxResult getData(String templateId, ModelMap map) {
//        GoviewTemplate goviewTemplate = iGoviewTemplateService.getById(templateId);
//
//        GoviewTemplateData blogText = iGoviewTemplateDataService.getTemplateid(templateId);
//        if (blogText != null) {
//            GoviewTemplateVo goviewTemplateVo = new GoviewTemplateVo();
//            BeanUtils.copyProperties(goviewTemplate, goviewTemplateVo);
//            goviewTemplateVo.setContent(blogText.getContent());
//            return AjaxResult.successData(200, goviewTemplateVo).put("msg", "获取成功");
//        }
//        else {
//            GoviewTemplateVo goviewTemplateVo = new GoviewTemplateVo();
//            BeanUtils.copyProperties(goviewTemplate, goviewTemplateVo);
//            goviewTemplateVo.setContent("{}");
//            return AjaxResult.successData(200, goviewTemplateVo).put("msg", "无数据");
//        }
//
//    }
//
//
//    @ApiOperation(value = "保存项目数据", notes = "保存项目数据")
//    @PostMapping("/save/data")
//    @ResponseBody
//    public AjaxResult saveData(@RequestParam(value = "templateId") String templateId, @RequestParam(value = "content") String content) {
//
//        GoviewTemplate goviewTemplate = iGoviewTemplateService.getById(templateId);
//        if (goviewTemplate == null) {
//            return error("没有该项目ID");
//        }
//        GoviewTemplateData goviewTemplateData = iGoviewTemplateDataService.getOne(new
//                LambdaQueryWrapper<GoviewTemplateData>().eq(GoviewTemplateData::getTemplateId, goviewTemplate.getId()));
//        GoviewTemplateData goviewTemplateDataNew = new GoviewTemplateData();
//        goviewTemplateDataNew.setContent(content);
//        goviewTemplateDataNew.setTemplateId(templateId);
//        if (goviewTemplateData != null) {
//            goviewTemplateDataNew.setId(goviewTemplateData.getId());
//            iGoviewTemplateDataService.updateById(goviewTemplateDataNew);
//        } else {
//            iGoviewTemplateDataService.save(goviewTemplateDataNew);
//        }
//        return success("数据保存成功");
//    }
//
//    /**
//     * 上传文件
//     *
//     * @param object     文件流对象
//     * @param bucketName 桶名
//     * @return
//     * @throws Exception
//     */
//    @PostMapping("/upload")
//    @ResponseBody
//    public AjaxResult upload(@RequestParam("file") MultipartFile object) throws IOException {
//        String fileName = object.getOriginalFilename();
//        //默认文件格式
//        String suffixName = v2Config.getDefaultFormat();
//        String mediaKey = "";
//        Long filesize = object.getSize();
//        //文件名字
//        String fileSuffixName = "";
//        if (fileName.lastIndexOf(".") != -1) {//有后缀
//            suffixName = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
//            //mediaKey=MD5.create().digestHex(fileName);
//            mediaKey = SnowflakeIdWorker.getUUID();
//            fileSuffixName = mediaKey + suffixName;
//        } else {//无后缀
//            //取得唯一id
//            //mediaKey = MD5.create().digestHex(fileName+suffixName);
//            mediaKey = SnowflakeIdWorker.getUUID();
//            //fileSuffixName=mediaKey+suffixName;
//        }
//        String virtualKey = FileController.getFirstNotNull(v2Config.getXnljmap());
//        String absolutePath = v2Config.getXnljmap().get(FileController.getFirstNotNull(v2Config.getXnljmap()));
//        SysFile sysFile = new SysFile();
//        sysFile.setId(SnowflakeIdWorker.getUUID());
//        sysFile.setFileName(fileSuffixName);
//        sysFile.setFileSize(Integer.parseInt(filesize + ""));
//        sysFile.setFileSuffix(suffixName);
//        sysFile.setCreateTime(DateUtil.formatLocalDateTime(LocalDateTime.now()));
//        String filepath = DateUtil.formatDate(new Date());
//        sysFile.setRelativePath(filepath);
//        sysFile.setVirtualKey(virtualKey);
//        sysFile.setAbsolutePath(absolutePath.replace("file:", ""));
//        iSysFileService.saveOrUpdate(sysFile);
//        File desc = FileController.getAbsoluteFile(v2Config.getFileurl() + File.separator + filepath, fileSuffixName);
//        object.transferTo(desc);
//        SysFileVo sysFileVo = BeanUtil.copyProperties(sysFile, SysFileVo.class);
//        sysFileVo.setFileurl(sysFile.getVirtualKey() + "/" + sysFile.getRelativePath() + "/" + sysFile.getFileName());
//        return successData(200, sysFileVo);
//    }
}

