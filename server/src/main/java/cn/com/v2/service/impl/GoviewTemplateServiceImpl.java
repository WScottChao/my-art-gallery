package cn.com.v2.service.impl;

import cn.com.v2.mapper.GoviewProjectMapper;
import cn.com.v2.mapper.GoviewTemplateMapper;
import cn.com.v2.mapper.SysUserMapper;
import cn.com.v2.model.GoviewProject;
import cn.com.v2.model.GoviewTemplate;
import cn.com.v2.model.SysUser;
import cn.com.v2.service.IGoviewProjectService;
import cn.com.v2.service.IGoviewTemplateService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author fc
 * @since 2023-04-30
 */
@Service
public class GoviewTemplateServiceImpl extends ServiceImpl<GoviewTemplateMapper, GoviewTemplate> implements IGoviewTemplateService {

}
