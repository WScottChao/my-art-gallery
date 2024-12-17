package cn.com.v2.controller;

import cn.com.v2.common.base.BaseController;
import cn.com.v2.common.config.V2Config;
import cn.com.v2.common.domain.AjaxResult;
import cn.com.v2.common.domain.ResultTable;
import cn.com.v2.common.domain.Tablepar;
import cn.com.v2.model.GoviewProduct;
import cn.com.v2.model.GoviewTask;
import cn.com.v2.model.GoviewTemplate;
import cn.com.v2.model.SysFile;
import cn.com.v2.model.vo.SysFileVo;
import cn.com.v2.service.*;
import cn.com.v2.util.ConvertUtil;
import cn.com.v2.util.SnowflakeIdWorker;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
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
@RequestMapping("/api/lowCode/task")                 //控制任务相关的api
public class GoviewTaskController extends BaseController {
    @Autowired
    private ISysFileService iSysFileService;
    @Autowired
    private V2Config v2Config;
    @Autowired
    private IGoviewTaskService iGoviewTaskService;
    @Autowired
    private IGoviewTemplateService iGoviewTemplateService;
    @Autowired
    private IGoviewProductService iGoviewProductService;


//    @ApiOperation(value = "分页跳转", notes = "分页跳转")
//    @GetMapping("/list")
//    @ResponseBody
//    public ResultTable list(Tablepar tablepar, @RequestHeader(value = "satoken", required = true) String token) {
//        LambdaQueryWrapper<GoviewTask> queryWrapper = new LambdaQueryWrapper<>();
//        Page<GoviewTask> page = new Page<>(tablepar.getPage(), tablepar.getLimit());
//        queryWrapper.eq(GoviewTask::getIsDelete, 0);
//        if (tablepar.getPeriod() != null&& !tablepar.getPeriod().isEmpty()) {
//            queryWrapper.eq(GoviewTask::getPeriod, tablepar.getPeriod());
//        }
//        if(tablepar.getPeriodRange()!= null&& !tablepar.getPeriodRange().isEmpty()) {
//            queryWrapper.eq(GoviewTask::getPeriodRange, tablepar.getPeriodRange());
//        }
//        if (tablepar.getStartTime() != null && !tablepar.getStartTime().isEmpty()) {
//            queryWrapper.ge(GoviewTask::getCreateTime, tablepar.getStartTime());
//        }
//        if (tablepar.getEndTime() != null && !tablepar.getEndTime().isEmpty()) {
//            queryWrapper.le(GoviewTask::getCreateTime, tablepar.getEndTime());
//        }
//        if (tablepar.getName() != null && !tablepar.getName().isEmpty()) {
//            queryWrapper.like(GoviewTask::getTaskName, tablepar.getName());
//        }
//        queryWrapper.eq(GoviewTask::getCreateUserId, StpUtil.getLoginIdAsString());
//        IPage<GoviewTask> iPages = iGoviewTaskService.page(page, queryWrapper);
//        List<GoviewTask> taskList = iPages.getRecords();
//        List<String> taskTemplateList = taskList.stream().map(GoviewTask::getTemplateId).collect(Collectors.toList());
//        List<GoviewTemplate> templateList = iGoviewTemplateService.list(new
//                LambdaQueryWrapper<GoviewTemplate>().in(GoviewTemplate::getId, taskTemplateList));
//        Map<String, String> templateMap = templateList.stream().collect(Collectors.toMap(GoviewTemplate::getId,
//                GoviewTemplate::getTemplateName));
//        taskList.forEach(task -> task.setTemplateName(templateMap.get(task.getTemplateId())));
//        ResultTable resultTable = new ResultTable();
//        resultTable.setData(taskList);
//        resultTable.setCode(200);
//        resultTable.setCount(iPages.getTotal());
//        resultTable.setMsg("获取成功");
//        return resultTable;
//    }


    /**
     * 新增保存
     *
     * @param
     * @return
     */
    //@Log(title = "项目表新增", action = "111")
    @ApiOperation(value = "任务新增", notes = "任务新增")
    @PostMapping("/create")
    @ResponseBody
    public AjaxResult add(@RequestBody GoviewTask goviewTask) {
        if(goviewTask.getTemplateId()==null || goviewTask.getTemplateId().isEmpty()) {
             return error();
        }
        goviewTask.setCreateTime(DateUtil.now());
        goviewTask.setState(-1);
        goviewTask.setCreateUserId(StpUtil.getLoginIdAsString());
        goviewTask.setIsDelete(0);
        boolean b = iGoviewTaskService.save(goviewTask);
        if (b) {
            return successData(200, goviewTask).put("msg", "创建成功");
        } else {
            return error();
        }
    }


    /**
     * 项目表删除
     *
     * @param ids
     * @return
     */
    //@Log(title = "项目表删除", action = "111")
    @Transactional(rollbackFor = Exception.class)
    @ApiOperation(value = "删除任务", notes = "删除任务")
    @DeleteMapping("/delete")
    @ResponseBody
    public AjaxResult remove(String ids) {
        List<String> lista = ConvertUtil.toListStrArray(ids);
        for (String id : lista) {
            String userId = iGoviewTaskService.getById(id).getCreateUserId();
            if(!StpUtil.getLoginIdAsString().equals(userId)){
                return error("token错误，非创建用户操作");
            }
        }
        LambdaUpdateWrapper<GoviewTask> updateWrapper = new LambdaUpdateWrapper<>();
        updateWrapper.in(GoviewTask::getId, lista);
        updateWrapper.set(GoviewTask::getIsDelete, 1);
        Boolean b = iGoviewTaskService.update(updateWrapper);
        if (b) {
            return success();
        } else {
            return error();
        }
    }

    @ApiOperation(value = "修改保存", notes = "修改保存")
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(@RequestBody GoviewTask goviewTask) {
        String userId = iGoviewTaskService.getById(goviewTask.getId()).getCreateUserId();
        if(!StpUtil.getLoginIdAsString().equals(userId)) {
            return error("token错误，非创建用户操作");
        }
        Boolean b = iGoviewTaskService.updateById(goviewTask);
        if (b) {
            return success();
        }
        return error();
    }


    @ApiOperation(value = "任务重命名", notes = "任务重命名")
    @PostMapping("/rename")
    @ResponseBody
    public AjaxResult rename(@RequestBody GoviewTask goviewTask) {
        String userId = iGoviewTaskService.getById(goviewTask.getId()).getCreateUserId();
        if(!StpUtil.getLoginIdAsString().equals(userId)) {
            return error("token错误，非创建用户操作");
        }
        LambdaUpdateWrapper<GoviewTask> updateWrapper = new LambdaUpdateWrapper<>();
        updateWrapper.eq(GoviewTask::getId, goviewTask.getId());
        updateWrapper.set(GoviewTask::getTaskName, goviewTask.getTaskName());
        Boolean b = iGoviewTaskService.update(updateWrapper);
        if (b) {
            return success();
        }
        return error();
    }

    @Transactional
    //运行/停止任务
    @PutMapping("/run")
    @ResponseBody
    public AjaxResult updateVisible(@RequestBody GoviewTask goviewTask) {
        GoviewTask targetTask = iGoviewTaskService.getById(goviewTask.getId());
        String userId = iGoviewTaskService.getById(targetTask.getId()).getCreateUserId();
        if(!StpUtil.getLoginIdAsString().equals(userId)) {
            return error("token错误，非创建用户操作");
        }
        if ((targetTask.getState() == -1 || targetTask.getState() == 1) && targetTask.getCreateUserId() != null) {
            LambdaUpdateWrapper<GoviewTask> updateWrapper = new LambdaUpdateWrapper<>();
            updateWrapper.eq(GoviewTask::getId, goviewTask.getId());
            updateWrapper.set(GoviewTask::getState, goviewTask.getState());
            Boolean b = iGoviewTaskService.update(updateWrapper);
            if(goviewTask.getState() == 1){
                LambdaQueryWrapper<GoviewTask> queryWrapper = new LambdaQueryWrapper<>();
                queryWrapper.eq(GoviewTask::getId, goviewTask.getId());
                GoviewProduct goviewProduct = new GoviewProduct();
                goviewProduct.setTaskName(iGoviewTaskService.getOne(queryWrapper).getTaskName());
                goviewProduct.setTemplateId(iGoviewTaskService.getOne(queryWrapper).getTemplateId());
                goviewProduct.setPeriod(iGoviewTaskService.getOne(queryWrapper).getPeriod());
                goviewProduct.setPeriodRange(iGoviewTaskService.getOne(queryWrapper).getPeriodRange());
                goviewProduct.setCreateTime(DateUtil.now());
                goviewProduct.setState(-1);
                goviewProduct.setDescription("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                goviewProduct.setCreateUserId(StpUtil.getLoginIdAsString());
                goviewProduct.setIsDelete(0);
                b = iGoviewProductService.save(goviewProduct);
            }
            if (b) {
                return success();
            }
            return error();
        }
        return error("警告非法字段");
    }

}

