package cn.com.v2.model;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author fc
 * @since 2023-04-30
 */
@TableName("t_goview_project_task")
@Data
public class GoviewTask implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @TableId(type = IdType.ASSIGN_ID)
    private String id;

    private String taskName;

    private String templateId;

    private String period;

    private String periodRange;

    private Integer state;

    @TableField(fill = FieldFill.INSERT)
    private String createTime;

    private String createUserId;

    private Integer isDelete;
    @TableField(exist = false)
    private String templateName;

}
