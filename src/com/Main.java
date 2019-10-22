package com;

import com.mind.component.MindMenuBar;
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage stage) throws Exception{

        System.out.println("server start ....");

        Group root = new Group();
        Scene scene = new Scene(root, 800, 600, Color.BLACK);

        stage.setTitle("脑图工厂");
        stage.setScene(scene);
        //设置窗口的图标.
        stage.getIcons().add(new Image(
                Main.class.getResourceAsStream("/com/mind/image/logo.png")));

        if(!stage.isFocused()){
            stage.requestFocus();
        }





        WebView webView = new WebView();
        BorderPane webViewBorder = new BorderPane();
        webViewBorder.setCenter(webView);

        MenuBar menuBar = new MindMenuBar(webView);
        menuBar.prefWidthProperty().bind(stage.widthProperty());


        BorderPane borderPane = new BorderPane();
        borderPane.setTop(menuBar);
        borderPane.setCenter(webViewBorder);


        borderPane.prefHeightProperty().bind(scene.heightProperty());
        borderPane.prefWidthProperty().bind(scene.widthProperty());

        root.getChildren().add(borderPane);


        stage.setScene(scene);
        stage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
