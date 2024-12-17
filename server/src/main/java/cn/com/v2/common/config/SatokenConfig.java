package cn.com.v2.common.config;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.InterceptorRegistry;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
//@EnableWebMvc
//@EnableSwagger2
public class SatokenConfig implements WebMvcConfigurer {

    @Autowired
    private CustomSaTokenInterceptor customSaTokenInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(customSaTokenInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/api/goview/sys/**");
    }

}
