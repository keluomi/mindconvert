package com.mind.utils;

import freemarker.template.Configuration;
import freemarker.template.Template;
import org.apache.commons.io.IOUtils;

import java.io.*;
import java.util.Map;

public class FreeMarkers {

	/**
	 * 渲染模板字符串。
	 */
	public static String renderString(String templateString, Map<String, ?> model) {
		try {
			StringWriter result = new StringWriter();
			Template t = new Template("default", new StringReader(templateString), new Configuration());
			t.process(model, result);
			return result.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";

	}

	/**
	 * 渲染Template文件.
	 */
	public static String renderTemplate(Template template, Object model) {
		try {
			StringWriter result = new StringWriter();
			template.process(model, result);
			return result.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}

	/**
	 * 创建默认配置，设定模板目录.
	 */
	public static Configuration buildConfiguration(String directory) throws IOException {

		Configuration cfg = new Configuration();
		String filePath  = FreeMarkers.class.getResource(directory).getFile();
		File file = new File(filePath);
		cfg.setDirectoryForTemplateLoading(file);
		return cfg;
	}


	public static void saveFile(Map<String, Object> model, String dirPath, String fileName,String templateString) throws IOException {


		String result = FreeMarkers.renderString(templateString, model);

		File dir = new File(dirPath);
		dir.mkdirs();
		String pathname = dirPath + File.separator + fileName;
		File file = new File(pathname);
		file.createNewFile();

		IOUtils.write(result, new FileOutputStream(file));

	}
}
