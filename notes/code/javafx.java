package org.jianzhao.java;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
import lombok.val;

/**
 * @author cbdyzj
 */
public class JavaFx extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) {
        val btn = new Button();
        btn.setText("Say 'Hello World'");
        Integer[] c = {0};
        btn.setOnAction(event ->
                btn.setText(String.valueOf(c[0]++)));
        stage.setTitle("Hello World!");
        stage.setScene(new Scene(new StackPane(btn), 300, 250));
        stage.show();
    }
}
