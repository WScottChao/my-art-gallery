package cn.com.v2.common.domain;

import java.time.LocalDateTime;

/**
 * boostrap table post 参数
 *
 * @author fc
 */
public class Tablepar {
    private int page;//页码
    private int limit;//数量
    private String orderByColumn;//排序字段
    private String isAsc;//排序字符 asc desc
    private String searchText;//列表table里面的搜索
    private String name;
    private String startTime;
    private String endTime;
    private String templateType;
    private String typeId;
    private Integer state;
    private String period;
    private String periodRange;
    private String templateId;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public String getOrderByColumn() {
        return orderByColumn;
    }

    public void setOrderByColumn(String orderByColumn) {
        this.orderByColumn = orderByColumn;
    }

    public String getIsAsc() {
        return isAsc;
    }

    public void setIsAsc(String isAsc) {
        this.isAsc = isAsc;
    }

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getTemplateType() {
        return templateType;
    }

    public void setTemplateType(String templateType) {
        this.templateType = templateType;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPeriod() {return period;}
    public void setPeriod(String period) {this.period = period;}

    public String getPeriodRange() {return periodRange;}
    public void setPeriodRange(String periodRange) {this.periodRange = periodRange;}

    public Integer getState() {return state;}
    public void setState(Integer state) {this.state = state;}

    public String getTemplateId(){return templateId;}
    public void setTemplateId(String templateId){this.templateId = templateId;}
}
