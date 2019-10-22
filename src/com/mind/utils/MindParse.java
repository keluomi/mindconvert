package com.mind.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.mind.component.Node;
import org.xmind.core.*;
import org.xmind.core.style.IStyleSheet;
import org.xmind.core.util.Point;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

public class MindParse {


    private  static  AtomicInteger baseId = new AtomicInteger(0);
    private  static  IStyleSheet styleSheet;

    private static  Map<String, String> imageMap ;


    public static void main(String[] args) {

        String mindPath = "/Users/lwz/git_work/mindfx/src/com/mind/ftl/spring.xmind";
        String jsonString = MindParse.parse(mindPath);
        System.out.println(jsonString);




    }

    public static String parse(String mindPath){


        imageMap = XMindUtils.readAttachments(mindPath);
        IWorkbookBuilder builder = Core.getWorkbookBuilder();//初始化builder
        IWorkbook workbook = null;
        try {
            workbook = builder.loadFromPath(mindPath);//打开XMind文件
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CoreException e) {
            e.printStackTrace();
        }
        ISheet defSheet = workbook.getPrimarySheet();//获取主Sheet
        String themeId = defSheet.getThemeId();


        IManifest manifest = workbook.getManifest();
        manifest.getFileEntries();




        styleSheet = workbook.getStyleSheet();
/*
        IStyle style = styleSheet.findStyle(defSheet.getStyleId());
        style.getDefaultStyleById(themeId).defaultStyles();

        String fillColor = null;
        String color = null;
        if (style != null){
            fillColor = style.getProperty("svg:fill");
            color = style.getProperty("fo:color");
        }

*/



        ITopic rootTopic = defSheet.getRootTopic(); //获取根Topic
/*

        Iterator<IRelationship> relationShips = defSheet.getRelationships().iterator();
        while (relationShips.hasNext()){
            IRelationship relationship = relationShips.next();
            IRelationshipEnd end1 = relationship.getEnd1();
            IRelationshipEnd end2 = relationship.getEnd2();


            IControlPoint startPoint = relationship.getControlPoint(0);
            IControlPoint endPoint = relationship.getControlPoint(1);



        }
*/


        IImage rootImage = rootTopic.getImage();



        AtomicInteger id = new AtomicInteger(0);
        Node node = new Node();
        node.setId(String.valueOf(id.get()));
        String key = rootImage.getSource();
        if (key != null){

            key = key.replace("xap:","");
            String imageStr = imageMap.get(key);
            node.setIcon(imageStr);
        }
        node.setTopic(rootTopic.getTitleText());
        node.setIsroot(true);
        node.setExpanded(false);
//        node.setFillColor(fillColor);
//        node.setColor(color);
        JSONArray array = new JSONArray();
        array.add(node);

        String jsonString = "";
        if (rootTopic.getAllChildren().size()>0){
            jsonString = getTopicJSON(rootTopic, id.get(), array);
        }
        return jsonString;
    }



    private static  String getTopicJSON(ITopic topic, int parentId, JSONArray array){

        if (topic != null && topic.getAllChildren().size()>0){
            List<ITopic> childList = topic.getAllChildren();
            for (int i=0; i< childList.size(); i++){
                
                
                ITopic child = childList.get(i);
                String titleText = child.getTitleText();


                IImage icon = child.getImage();

                Node node = new Node();
                node.setParentid(String.valueOf(parentId));
                int id = baseId.incrementAndGet();
                node.setId(String.valueOf(id));
                String key = icon.getSource();
                if (key != null){

                    key = key.replace("xap:","");
                    String imageStr = imageMap.get(key);
                    node.setIcon(imageStr);
                }

                node.setTopic(titleText);
                node.setExpanded(false);

 /*               IStyle style = styleSheet.findStyle(child.getStyleId());
                if (style != null){
                    String fillColor = style.getProperty("svg:fill");
                    String color = style.getProperty("fo:color");

                    node.setFillColor(fillColor == null ? "#1E242F" : fillColor);
                    node.setColor(color == null ? "#fff" : color);
                }
*/
                if (parentId == 0 && i>childList.size()/2){
                    node.setDirection("left");
                }
                array.add(node);

                baseId = new AtomicInteger(id);
                if (child.getAllChildren().size()>0){
                    getTopicJSON(child, id, array);
                }


            }
        }

        return array.toJSONString();
    }
}
