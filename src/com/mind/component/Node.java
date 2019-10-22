package com.mind.component;

public class Node {

    private String id;
    //是否根结点
    private Boolean isroot = false;
    //是否展开
    private Boolean expanded;

    //父结点
    private String parentid;
    //名称
    private String topic;
    //方向
    private String direction;


    //图标
    private String icon;

    //字体颜色
    private String color;

    //填充色
    private String fillColor;


    public String getParentid() {
        return parentid;
    }

    public void setParentid(String parentid) {
        this.parentid = parentid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getIsroot() {
        return isroot;
    }

    public void setIsroot(Boolean isroot) {
        this.isroot = isroot;
    }

    public Boolean getExpanded() {
        return expanded;
    }

    public void setExpanded(Boolean expanded) {
        this.expanded = expanded;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getFillColor() {
        return fillColor;
    }

    public void setFillColor(String fillColor) {
        this.fillColor = fillColor;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
