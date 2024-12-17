package cn.com.v2.controller;

import cn.com.v2.common.base.BaseController;
import cn.com.v2.common.config.V2Config;
import cn.com.v2.common.domain.AjaxResult;
import cn.com.v2.common.domain.ResultTable;
import cn.com.v2.common.domain.Tablepar;
import cn.com.v2.model.GoviewProduct;
import cn.com.v2.model.GoviewProduct;
import cn.com.v2.model.GoviewTask;
import cn.com.v2.model.GoviewTemplate;
import cn.com.v2.service.IGoviewProductService;
import cn.com.v2.service.IGoviewTemplateService;
import cn.com.v2.service.ISysFileService;
import cn.com.v2.util.ConvertUtil;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
@RequestMapping("/api/lowCode/product")                 //控制任务相关的api
public class GoviewProductController extends BaseController {
    @Autowired
    private ISysFileService iSysFileService;
    @Autowired
    private V2Config v2Config;
    @Autowired
    private IGoviewProductService iGoviewProductService;
    @Autowired
    private IGoviewTemplateService iGoviewTemplateService;


//    @ApiOperation(value = "分页跳转", notes = "分页跳转")
//    @GetMapping("/template/list")
//    @ResponseBody
//    public ResultTable list(Tablepar tablepar, @RequestHeader(value = "satoken", required = false) String token, @RequestParam(value = "typeId", required = false) List<String> typeId) {
//        LambdaQueryWrapper<GoviewProduct> queryWrapper = new LambdaQueryWrapper<>();
//        LambdaUpdateWrapper<GoviewTemplate> templateWrapper = new LambdaUpdateWrapper<>();
//        Page<GoviewTemplate> page = new Page<>(tablepar.getPage(), tablepar.getLimit());
//        queryWrapper.eq(GoviewProduct::getIsDelete, 0);
//        if(tablepar.getState() != null){
//            queryWrapper.eq(GoviewProduct::getState, tablepar.getState());
//        }else{
//            queryWrapper.eq(GoviewProduct::getCreateUserId, StpUtil.getLoginIdAsLong());
//        }
//        queryWrapper.select(GoviewProduct::getTemplateId).groupBy(GoviewProduct::getTemplateId);
//        List<GoviewProduct> list = iGoviewProductService.list(queryWrapper);
//        List<String> templateIds = list.stream().map(GoviewProduct::getTemplateId).distinct().collect(Collectors.toList());
//        templateWrapper.in(GoviewTemplate::getId, templateIds);
//        if (tablepar.getTemplateType() != null && !tablepar.getTemplateType().isEmpty()) {
//            templateWrapper.eq(GoviewTemplate::getTemplateType, tablepar.getTemplateType());
//        }
//        if (typeId != null && !typeId.isEmpty()) {
//            templateWrapper.in(GoviewTemplate::getTypeId, typeId);
//        }
//        if (tablepar.getName() != null && !tablepar.getName().isEmpty()) {
//            templateWrapper.eq(GoviewTemplate::getTemplateName, tablepar.getName());  //这里先使用id，以后再改成名称检索
//        }
//
//        IPage<GoviewTemplate> iPages = iGoviewTemplateService.page(page, templateWrapper);
//        ResultTable resultTable = new ResultTable();
//        resultTable.setData(iPages.getRecords());
//        resultTable.setCode(200);
//        resultTable.setCount(iPages.getTotal());
//        resultTable.setMsg("获取成功");
//        return resultTable;
//    }
//
//    @ApiOperation(value = "分页跳转", notes = "分页跳转")
//    @GetMapping("/list")
//    @ResponseBody
//    public ResultTable productList(Tablepar tablepar, @RequestHeader(value = "satoken", required = false) String token) {
//        LambdaQueryWrapper<GoviewProduct> queryWrapper = new LambdaQueryWrapper<>();
//        Page<GoviewProduct> page = new Page<>(tablepar.getPage(), tablepar.getLimit());
//        queryWrapper.eq(GoviewProduct::getIsDelete, 0);
//        queryWrapper.eq(GoviewProduct::getTemplateId, tablepar.getTemplateId());
//        if (tablepar.getPeriod() != null && !tablepar.getPeriod().isEmpty()) {
//            queryWrapper.eq(GoviewProduct::getPeriod, tablepar.getPeriod());
//        }
//        if(tablepar.getPeriodRange()!= null && !tablepar.getPeriodRange().isEmpty()) {
//            queryWrapper.eq(GoviewProduct::getPeriodRange, tablepar.getPeriodRange());
//        }
//        if (tablepar.getStartTime() != null && !tablepar.getStartTime().isEmpty()) {
//            queryWrapper.ge(GoviewProduct::getCreateTime, tablepar.getStartTime());
//        }
//        if (tablepar.getEndTime() != null && !tablepar.getEndTime().isEmpty()) {
//            queryWrapper.le(GoviewProduct::getCreateTime, tablepar.getEndTime());
//        }
//        if(tablepar.getState() != null){
//            queryWrapper.eq(GoviewProduct::getState, tablepar.getState());
//        }else{
//                queryWrapper.eq(GoviewProduct::getCreateUserId, StpUtil.getLoginIdAsString());
//            }
//        IPage<GoviewProduct> iPages = iGoviewProductService.page(page, queryWrapper);
//        ResultTable resultTable = new ResultTable();
//        resultTable.setData(iPages.getRecords());
//        resultTable.setCode(200);
//        resultTable.setCount(iPages.getTotal());
//        resultTable.setMsg("获取成功");
//        return resultTable;
//    }
////      可以运行，但是没有需求
////    /**
////     * 新增保存
////     *
////     * @param
////     * @return
////     */
////    //@Log(title = "项目表新增", action = "111")
////    @ApiOperation(value = "任务新增", notes = "任务新增")
////    @PostMapping("/create")
////    @ResponseBody
////    public AjaxResult add(@RequestBody GoviewProduct goviewProduct) {
////        goviewProduct.setCreateTime(DateUtil.now());
////        goviewProduct.setState(-1);
////        goviewProduct.setDescription("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
////        goviewProduct.setCreateUserId(StpUtil.getLoginIdAsString());
////        goviewProduct.setIsDelete(0);
////        boolean b = iGoviewProductService.save(goviewProduct);
////        if (b) {
////            return successData(200, goviewProduct).put("msg", "创建成功");
////        } else {
////            return error();
////        }
////    }
//
//    /**
//     * 新增保存
//     *
//     * @param
//     * @return
//     */
//    //@Log(title = "项目表新增", action = "111")
//    @ApiOperation(value = "任务新增", notes = "任务新增")
//    @GetMapping("/update")
//    public AjaxResult update(String templateId) {
//        LambdaUpdateWrapper<GoviewProduct> updateWrapper = new LambdaUpdateWrapper<>();
//        updateWrapper.eq(GoviewProduct::getTemplateId, templateId)
//                     .orderByAsc(GoviewProduct::getCreateTime).last("LIMIT 1");
//        GoviewProduct product = iGoviewProductService.getOne(updateWrapper);
//        product.setCreateTime(DateUtil.now());
//        product.setId(null);
//        product.setPeriod(null);
//        product.setPeriodRange(null);
//        boolean b = iGoviewProductService.save(product);
//        if (b) {
//            return successData(200, product).put("msg", "创建成功");
//        } else {
//            return error();
//        }
//    }
//
//
////    /**
////     * 项目表删除
////     *
////     * @param ids
////     * @return
////     */
////    //@Log(title = "项目表删除", action = "111")
////    @Transactional(rollbackFor = Exception.class)
////    @ApiOperation(value = "删除任务", notes = "删除任务")
////    @DeleteMapping("/delete")
////    @ResponseBody
////    public AjaxResult remove(String ids) {
////        List<String> lista = ConvertUtil.toListStrArray(ids);
////        LambdaUpdateWrapper<GoviewProduct> updateWrapper = new LambdaUpdateWrapper<>();
////        updateWrapper.in(GoviewProduct::getId, lista);
////        updateWrapper.set(GoviewProduct::getIsDelete, 1);
////        Boolean b = iGoviewProductService.update(updateWrapper);
////        if (b) {
////            return success();
////        } else {
////            return error();
////        }
////    }
////
////    @ApiOperation(value = "修改保存", notes = "修改保存")
////    @PostMapping("/edit")
////    @ResponseBody
////    public AjaxResult editSave(@RequestBody GoviewProduct goviewProduct) {
////        Boolean b = iGoviewProductService.updateById(goviewProduct);
////        if (b) {
////            return success();
////        }
////        return error();
////    }
//
//
//    @Transactional
//    //发布/取消项目状态
//    @PutMapping("/publish")
//    @ResponseBody
//    public AjaxResult updateVisible(@RequestBody GoviewProduct goviewProduct) {
//        GoviewProduct targetProduct = iGoviewProductService.getById(goviewProduct.getId());
//        String userId = iGoviewProductService.getById(goviewProduct.getId()).getCreateUserId();
//        if(!StpUtil.getLoginIdAsString().equals(userId)){
//            return error("token错误，非创建用户操作");
//        }
//        if ((targetProduct.getState() == -1 || targetProduct.getState() == 1) && targetProduct.getCreateUserId() != null) {
//            //必须有发布id的模板才可以被发布或者取消发布
//            LambdaUpdateWrapper<GoviewProduct> updateWrapper = new LambdaUpdateWrapper<>();
//            updateWrapper.eq(GoviewProduct::getId, goviewProduct.getId());
//            updateWrapper.set(GoviewProduct::getState, goviewProduct.getState());
//            Boolean b = iGoviewProductService.update(updateWrapper);
//            if (b) {
//                return success();
//            }
//            return error();
//        }
//        return error("警告非法字段");
//    }

}

