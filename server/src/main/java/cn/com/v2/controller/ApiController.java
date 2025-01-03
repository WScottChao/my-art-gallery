package cn.com.v2.controller;

import java.util.*;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;

import cn.com.v2.model.MetMuseumSearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;

import cn.com.v2.common.base.BaseController;
import cn.com.v2.common.domain.AjaxResult;
import cn.com.v2.model.SysUser;
import cn.com.v2.service.ISysUserService;
import cn.com.v2.util.SaTokenUtil;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.SecureUtil;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/lowCode/sys")
public class ApiController  extends BaseController {
	@Autowired
	private ISysUserService iSysUserService;

	@ApiOperation(value = "登录", notes = "多用户登录")
@PostMapping("/login")
@ResponseBody
public AjaxResult APIlogin(@RequestBody SysUser user) {
    // 参数校验
    if (StrUtil.isBlank(user.getEmail()) || StrUtil.isBlank(user.getPassword())) {
        return error(400, "用户名和密码不能为空");
    }

    // 验证用户名和密码
    SysUser sysUser = iSysUserService.getOne(
        new LambdaQueryWrapper<SysUser>()
            .eq(SysUser::getEmail, user.getEmail())
            .eq(SysUser::getPassword, SecureUtil.md5(user.getPassword()))
            .last("LIMIT 1")
    );
    System.out.println(user.getUsername());
    System.out.println(sysUser);


     if (sysUser != null) {
        // 登录用户
        StpUtil.login(sysUser.getId());
        SaTokenUtil.setUser(sysUser);

        // 返回精简的用户信息和 tokenValue
        Map<String, Object> result = new HashMap<>();
        result.put("id", sysUser.getId());
        result.put("username", sysUser.getEmail());
        result.put("token", StpUtil.getTokenInfo());

        return success().put("data", result);
    } else {
         System.out.println(sysUser);
        return error(401, "账户或者密码错误");
    }
}

	
	
	@ApiOperation(value = "登陆", notes = "登陆")
	@GetMapping("/logout")
	@ResponseBody
	public AjaxResult logout() {

		// 判断是否登陆
		System.out.println(StpUtil.isLogin());
		StpUtil.logout();

		return success();

	}

	@ApiOperation(value = "注册", notes = "注册新用户")
@PostMapping("/reg")
@ResponseBody
public AjaxResult register(@RequestBody SysUser user) {
    // 参数校验
    if (StrUtil.isBlank(user.getUsername()) || StrUtil.isBlank(user.getPassword()) || StrUtil.isBlank(user.getEmail())) {
        return error(400, "用户名、密码和邮箱不能为空");
    }

    // 检查用户名是否已存在
    SysUser existingUser = iSysUserService.getOne(
        new LambdaQueryWrapper<SysUser>().eq(SysUser::getUsername, user.getUsername()).last("LIMIT 1")
    );
    if (existingUser != null) {
        return error(400, "用户名已存在");
    }

    // 创建新用户
    SysUser newUser = new SysUser();
    newUser.setUsername(user.getUsername());
    newUser.setPassword(SecureUtil.md5(user.getPassword())); // 密码加密
    newUser.setEmail(user.getEmail());
    newUser.setQuestion(user.getQuestion()); // 安全问题（可选）
    newUser.setAnswer(user.getAnswer());     // 安全答案（可选）

    // 保存用户
    boolean saveResult = iSysUserService.save(newUser);
    if (saveResult) {
        return success().put("msg", "注册成功");
    } else {
        return error(500, "注册失败，请稍后再试");
    }
}

@ApiOperation(value = "重置密码", notes = "通过邮箱和安全问题重置密码")
@PostMapping("/reset")
@ResponseBody
public AjaxResult resetPassword(@RequestBody SysUser user) {
    // 参数校验
    if (StrUtil.isBlank(user.getEmail()) || StrUtil.isBlank(user.getQuestion())
            || StrUtil.isBlank(user.getAnswer()) || StrUtil.isBlank(user.getPassword())) {
        return error(400, "邮箱、安全问题、答案和新密码不能为空");
    }

    // 根据邮箱查找用户
    SysUser existingUser = iSysUserService.getOne(
        new LambdaQueryWrapper<SysUser>()
            .eq(SysUser::getEmail, user.getEmail())
            .eq(SysUser::getQuestion, user.getQuestion())
            .eq(SysUser::getAnswer, user.getAnswer())
            .last("LIMIT 1")
    );

    // 检查用户是否存在
    if (existingUser == null) {
        return error(400, "用户信息验证失败，请检查输入是否正确");
    }

    // 更新用户密码（MD5加密）
    existingUser.setPassword(SecureUtil.md5(user.getPassword()));
    boolean updateResult = iSysUserService.updateById(existingUser);

    if (updateResult) {
        return success().put("msg", "密码重置成功");
    } else {
        return error(500, "密码重置失败，请稍后重试");
    }
}

     private static final String SEARCH_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search";
    private static final String OBJECT_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
    private final RestTemplate restTemplate = new RestTemplate();

@GetMapping("/search")
    public Map<String, Object> searchItems(@RequestParam("name") String name) {
        List<Map<String, Object>> resultList = new ArrayList<>();

        try {
            // 调用搜索 API 获取 objectIDs
            String queryUrl = SEARCH_URL + "?q=" + name;
            MetMuseumSearchResult searchResult = restTemplate.getForObject(queryUrl, MetMuseumSearchResult.class);

            if (searchResult != null && searchResult.getObjectIDs() != null) {
                // 获取前 20 个 objectID 的详细信息
                List<String> objectIds = Arrays.stream(searchResult.getObjectIDs())
                                               .limit(20) // 限制数量，避免过多请求
                                               .map(String::valueOf)
                                               .collect(Collectors.toList());

                // 调用 Object API 获取详细信息
                for (String objectId : objectIds) {
                    try {
                        String objectUrl = OBJECT_URL + objectId;
                        Map<String, Object> objectDetails = restTemplate.getForObject(objectUrl, Map.class);
                        if (objectDetails != null) {
                            resultList.add(objectDetails);
                        }
                    } catch (Exception e) {
                        System.out.println("Failed to fetch details for objectID: " + objectId);
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Error during search: " + e.getMessage());
        }

        // 返回结果
        Map<String, Object> response = new HashMap<>();
        response.put("code", 200);
        response.put("msg", "操作成功");
        response.put("data", resultList);
        return response;
    }

}
