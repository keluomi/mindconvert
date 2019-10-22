package com.mind.component;

import com.Main;
import com.mind.utils.FreeMarkers;
import com.mind.utils.MindParse;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.*;
import javafx.scene.image.ImageView;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.DirectoryChooser;
import javafx.stage.FileChooser;
import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;

public class MindMenuBar extends MenuBar {

    private Menu fileMenu;

    private MenuItem  importMenuItem;

    private MenuItem  exportMenuItem;

    private MenuItem  exitMenuItem;

    private WebView htmlPreview;

    private WebEngine webEngine;

    private String filePath;

    private  String h5AbsoluteUrl;


    public MindMenuBar(WebView htmlPreview) {
        this.htmlPreview = htmlPreview;
        create();
    }

    private void create(){

        webEngine = htmlPreview.getEngine();



        try {
            java.net.URL url = Main.class.getProtectionDomain().getCodeSource().getLocation();
            filePath = java.net.URLDecoder.decode(url.getPath(), "utf-8");
        } catch (Exception e) {
            e.printStackTrace();
        }

        String welcome = "jar:file:"+filePath+"!/com/mind/html/welcome.html";
        webEngine.load(welcome);

        fileMenu = new Menu("文件",new ImageView("/com/mind/image/file.png"));
        importMenuItem = new MenuItem("导入", new ImageView("/com/mind/image/import.png"));
        exportMenuItem = new MenuItem("导出",new ImageView("/com/mind/image/export.png"));
        exitMenuItem = new MenuItem("退出",new ImageView("/com/mind/image/quit.png"));



        importMenuItem.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent t) {

                importFile();
            }

        });

        exportMenuItem.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent t) {

                exportFile();

            }

        });

        exitMenuItem.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent t) {
                System.exit(0);
            }

        });


        fileMenu.getItems().addAll(importMenuItem, exportMenuItem, new SeparatorMenuItem(), exitMenuItem);
        this.getMenus().add(fileMenu);
    }


    private void exportFile(){


        DirectoryChooser directoryChooser = new DirectoryChooser();
        directoryChooser.setTitle("选择导出目录");
        File result = directoryChooser.showDialog(this.getScene().getWindow());


        if (h5AbsoluteUrl == null){

            Alert alert = new Alert(Alert.AlertType.WARNING);
            alert.setTitle("提示");
            alert.setContentText("请先导入文件进行转换，然后导出！");

            alert.showAndWait();
            return;
        }else {

            File sourceFle  =  new File(h5AbsoluteUrl);
            File distFile  =  new File(result.getAbsolutePath() + File.separator + "xmind.html");
            if (distFile.exists()) distFile.delete();
            try {
                Files.copy(sourceFle.toPath(), distFile.toPath());

                Alert alert = new Alert(Alert.AlertType.WARNING);
                alert.setTitle("提示");
                alert.setContentText("导出成功，请到桌面查看xmind.html文件");

                alert.showAndWait();
                return;

            }catch (Exception e){
                e.printStackTrace();
            }
        }

    }

    private void  importFile(){

        FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("选择xmind文件");
        // 初始打开的位置
        fileChooser.setInitialDirectory(new File("."));
        FileChooser.ExtensionFilter extFilter =  new FileChooser.ExtensionFilter("请选择xmind文件", "*.xmind");
        fileChooser.getExtensionFilters().add(extFilter);
        fileChooser.setSelectedExtensionFilter(extFilter);

        this.getScene().getWindow();


        File result =fileChooser.showOpenDialog(this.getScene().getWindow());

        String fileName = result.getName();
        String suffix = fileName.split("\\.")[1];
        if (!"xmind".equals(suffix)){

            Alert alert = new Alert(Alert.AlertType.WARNING);
            alert.setTitle("Warning Dialog");
            alert.setHeaderText("文件选择错误");
            alert.setContentText("只能转换xmind文件");

            alert.showAndWait();
        }else {
            convertXmind2HTML(result);
        }

    }


    private void  convertXmind2HTML(File  sourceFile) {



        try {


            Map map = new HashMap<>();
            String data = MindParse.parse(sourceFile.getAbsolutePath());
            map.put("data", data);



            String h5FileName = System.currentTimeMillis() + "h5.html";
            String ftlPath = "jar:file:"+filePath+"!/com/mind/ftl/home.ftl";
            URL url = new URL(ftlPath);

            InputStream inputStream = url.openStream();
            byte[] bytes = IOUtils.toByteArray(inputStream);
            String ftlContent = new String(bytes);



            String distPath = new File(filePath).getParent() + File.separator + "html";
            File distDir = new File(distPath);
            distDir.delete();
            FreeMarkers.saveFile(map, distPath, h5FileName, ftlContent);


            String h5Url = "file:///"+distPath + File.separator + h5FileName;
            h5AbsoluteUrl = distPath + File.separator + h5FileName;

            webEngine.load(h5Url);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }





}
