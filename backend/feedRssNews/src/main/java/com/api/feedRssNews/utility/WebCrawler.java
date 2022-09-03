package com.api.feedRssNews.utility;


import com.api.feedRssNews.DTO.CategoryDTO;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;


public class WebCrawler {

    private HashSet<String> urlLink;
    public static final String URL_VNEXPRESS = "https://vnexpress.net";
    public static final String URL_NGUOIDUATIN = "https://www.nguoiduatin.vn";

    public WebCrawler() {
        urlLink = new HashSet<String>();
    }

    public String getHTMLContent(String URL) {
        if (!urlLink.contains(URL)) {
            try {
                Document doc = Jsoup.connect(URL).get();
                if (URL.startsWith(URL_VNEXPRESS)) {
                    return getHTMLForVNExpress(doc);
                }else if(URL.startsWith(URL_NGUOIDUATIN)){
                    return getHTMLForNGUOIDUATIN(doc);
                }
                return "";
            }
            catch (IOException e) {
                System.err.println("For '" + URL + "': " + e.getMessage());
            }
        }
        return null;
    }

    public static String getHTMLForVNExpress( Document doc){
        String data_detail = "";
        Elements elements = doc.getElementsByClass("sidebar-1").not(".pin-comment");

        for (Element ele : elements) {
            for(int i = 1 ; i<ele.children().size()-2 ;i++) {
                data_detail+=ele.children().get(i)+"\n";
            }
        }
        return data_detail;
    }

    public static String getHTMLForNGUOIDUATIN( Document doc){
        String data_detail = "";
        Elements elements = doc.getElementsByClass("tmp-group-left");

        for (Element ele : elements) {
            for(int i = 0 ; i < 4 ; i++)
                data_detail+=ele.children().get(i)+"\n";
        }
        return data_detail;
    }

    public List<CategoryDTO> getCategory(String URL) {
        List<CategoryDTO> result = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(URL).get();
            Elements elements = doc.getElementsByClass("tmp-nav");
            for (Element ele : elements) {
                for(int i = 1 ; i<ele.children().size() ;i++) {
                    CategoryDTO cate = new CategoryDTO(ele.children().get(i).text(), ele.children().get(i).children().get(0).attr("href"));
                    cate.setListSub(getSubCategories(cate.getTitle()));
                    result.add(cate);
                }
            }
            return result;
        } catch (IOException e) {
            System.err.println("For '" + URL + "': " + e.getMessage());
        }
        return null;
    }

    public List<CategoryDTO> getSubCategories(String categoryName) {
        String URL = "https://www.nguoiduatin.vn/rss.html";
        List<CategoryDTO> result = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(URL).get();
            Elements elements = doc.getElementsByClass("row");
            Element element = elements.get(elements.size() - 4);
            for (Element ele : element.children()) {
                if (ele.child(0).text().equals(categoryName)) {
                    if (ele.children().size() >= 2) {
                        for(Element e : ele.child(1).children()) {
                            result.add(new CategoryDTO(e.text(), e.children().attr("href")));
                        }
                    }
                }
            }
            return result;
        } catch (IOException e) {
            System.err.println("For '" + URL + "': " + e.getMessage());
        }
        return null;
    }

}