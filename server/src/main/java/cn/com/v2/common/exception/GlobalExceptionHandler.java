package cn.com.v2.common.exception;

import cn.com.v2.common.domain.AjaxResult;
import cn.dev33.satoken.exception.NotLoginException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.View;

import static cn.com.v2.common.domain.AjaxResult.error;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private final View error;

    public GlobalExceptionHandler(View error) {
        this.error = error;
    }

    @ExceptionHandler(NotLoginException.class) // 捕获登录异常
    @ResponseBody
    public ResponseEntity<AjaxResult> handleNotLoginException(NotLoginException e) {
        AjaxResult ajaxResult = error(401, "Token错误");
        return ResponseEntity.status(401).body(ajaxResult);
    }
}
