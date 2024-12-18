package cn.com.v2.model;


import lombok.Data;

import java.io.Serializable;
@Data
public class MetMuseumItem implements Serializable {
    private String objectID;
    private String title;
    private String artistDisplayName;
    private String department;
    private String medium;
    private String primaryImage;
    private String objectDate;
}