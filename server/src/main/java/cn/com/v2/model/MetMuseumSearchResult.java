package cn.com.v2.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class MetMuseumSearchResult implements Serializable {
    private Boolean total;
    private Long[] objectIDs;
}

