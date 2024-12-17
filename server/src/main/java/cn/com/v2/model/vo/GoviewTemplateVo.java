package cn.com.v2.model.vo;

import cn.hutool.core.date.DateUtil;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.util.Date;

public class GoviewTemplateVo implements Serializable {
    private static final long serialVersionUID = 1L;

	
	@ApiModelProperty(value = "主键")
	private String id;
	
	@ApiModelProperty(value = "项目名称")
	private String templateName;

	@ApiModelProperty(value = "模板类型")
	private String templateType;

	@ApiModelProperty(value = "模板类型ID")
	private String typeId;

	@ApiModelProperty(value = "项目状态[-1未发布,1发布]")
	private Integer state;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	@ApiModelProperty(value = "创建时间")
	private Date createTime;
	
	@ApiModelProperty(value = "创建人id")
	private String createUserId;
	
	@ApiModelProperty(value = "删除状态[1删除,-1未删除]")
	private Integer isDelete;
	
	@ApiModelProperty(value = "首页图片")
	private String indexImage;

	@ApiModelProperty(value = "作者名称")
	private String userName;
	
	private String content;
	
	
	@JsonProperty("id")
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id =  id;
	}
	@JsonProperty("templateName")
	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	@JsonProperty("typeId")
	public String getTypeId() {
		return typeId;
	}

	public void setTypeId(String typeId) {
		this.typeId = typeId;
	}
	@JsonProperty("templateType")
	public String getTemplateType() {
		return templateType;
	}

	public void setTemplateType(String templateType) { this.templateType = templateType; }
	@JsonProperty("state")
	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
		this.state =  state;
	}
	@JsonProperty("createTime")
	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime =  createTime;
	}
	@JsonProperty("createUserId")
	public String getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(String createUserId) {
		this.createUserId =  createUserId;
	}
	@JsonProperty("isDelete")
	public Integer getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(Integer isDelete) {
		this.isDelete =  isDelete;
	}
	@JsonProperty("indexImage")
	public String getIndexImage() {
		return indexImage;
	}

	public void setIndexImage(String indexImage) {
		this.indexImage =  indexImage;
	}

	@JsonProperty("content")
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String dateToStringConvert(Date date) {
		if(date!=null) {
			return DateUtil.format(date, "yyyy-MM-dd HH:mm:ss");
		}
		return "";
	}
	public void setUserName(String userName) {this.userName = userName;}
	@JsonProperty("userName")
	public String getUserName() {return userName;}
}