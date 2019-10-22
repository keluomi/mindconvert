package com.mind.utils;

import org.xmind.core.util.FileUtils;

import javax.activation.MimetypesFileTypeMap;
import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipInputStream;

public class XMindUtils {


    public static void main(String[] args) {

        String path = "/Users/lwz/git_work/mindfx/src/com/mind/ftl/spring.xmind";
        readAttachments(path);
    }
    public  static Map<String,String> readAttachments(String path){


        Map<String,String> resultMap = new HashMap<>();
        ZipFile zf = null;
        try {
            zf = new ZipFile(path);
            InputStream in = new BufferedInputStream(new FileInputStream(path));
            Charset utf8 = Charset.forName("utf-8");
            ZipInputStream zin = new ZipInputStream(in,utf8);
            ZipEntry ze;
            while((ze = zin.getNextEntry()) != null){

                if(ze.toString().indexOf("attachments") != -1){



                    String mimeType = "";
                    if (ze.toString().endsWith("bmp")){

                        mimeType = "image/bmp";
                    }else if (ze.toString().endsWith("gif")){
                        mimeType = "image/gif";
                    }else if (ze.toString().endsWith("jpeg") || ze.toString().endsWith("jpg")){
                        mimeType = "image/jpeg";
                    }else if (ze.toString().endsWith("png")){
                        mimeType = "image/png";
                    }

                    InputStream inputStream = zf.getInputStream(ze);
                    byte[] buf = new byte[inputStream.available()];
                    inputStream.read(buf);
                    try {
                        String imageString =  Base64Kit.encode(buf);
                        imageString = "data:"+mimeType+";base64,"+ imageString;
                        resultMap.put(ze.toString(), imageString);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }





            }
            zin.closeEntry();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return resultMap;
    }
}
