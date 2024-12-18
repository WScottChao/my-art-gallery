package cn.com.v2.common.config;

import cn.com.v2.common.domain.AjaxResult;
import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.interceptor.SaInterceptor;
import cn.dev33.satoken.stp.StpUtil;
import cn.dev33.satoken.router.SaRouter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static cn.com.v2.common.domain.AjaxResult.error;

@Component
public class CustomSaTokenInterceptor extends SaInterceptor implements HandlerInterceptor {

    private final ObjectMapper jacksonObjectMapper;

    public CustomSaTokenInterceptor(ObjectMapper jacksonObjectMapper) {
        this.jacksonObjectMapper = jacksonObjectMapper;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 在这里写具体的拦截逻辑
        System.out.println("Intercepting request: " + request.getRequestURI());
//        try{
        SaRouter.match("/**").check(r -> StpUtil.checkLogin());
//    }
//        catch (Exception e){
////            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
////            response.setContentType("text/html;charset=utf-8");
////            response.getWriter().write("{\"msg\": \"Token无效\", \"code\": 401}");
//                error(401, "Token无效");
//               AjaxResult errorResult =  AjaxResult.error(401, "Token无效");
//               String jsonResponse = jacksonObjectMapper.writeValueAsString(errorResult);
//               response.setContentType("application/json;charset=utf-8");
//               response.getWriter().write(jsonResponse);
//            return false;
//        }

        return true;
    }
}
