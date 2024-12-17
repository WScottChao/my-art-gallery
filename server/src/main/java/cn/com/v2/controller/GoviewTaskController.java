package cn.com.v2.controller;

import cn.com.v2.common.base.BaseController;
import cn.com.v2.common.config.V2Config;
import cn.com.v2.common.domain.AjaxResult;
import cn.com.v2.common.domain.ResultTable;
import cn.com.v2.common.domain.Tablepar;
import cn.com.v2.model.*;
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
import org.springframework.web.client.RestTemplate;
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
@RequestMapping("api/goview")                 //控制任务相关的api
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


}

