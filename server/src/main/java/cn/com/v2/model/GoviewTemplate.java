package cn.com.v2.model;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * <p>
 * 
 * </p>
 *
 * @author fc
 * @since 2023-04-30
 */
@TableName("t_goview_template")
@Data
public class GoviewTemplate implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @TableId(type = IdType.ASSIGN_ID)
    private String id;

    private String templateId;

    private String userId;

    @TableField(fill = FieldFill.INSERT)
    private String createTime;

    private Integer isDelete;



}
