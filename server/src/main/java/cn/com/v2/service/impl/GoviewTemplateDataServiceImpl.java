package cn.com.v2.service.impl;

import cn.com.v2.mapper.GoviewProjectDataMapper;
import cn.com.v2.mapper.GoviewTemplateDataMapper;
import cn.com.v2.model.GoviewProjectData;
import cn.com.v2.model.GoviewTemplateData;
import cn.com.v2.service.IGoviewProjectDataService;
import cn.com.v2.service.IGoviewTemplateDataService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author fc
 * @since 2023-04-30
 */
@Service
public class GoviewTemplateDataServiceImpl extends ServiceImpl<GoviewTemplateDataMapper, GoviewTemplateData> implements IGoviewTemplateDataService {

}