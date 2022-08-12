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

    public WebCrawler() {
        urlLink = new HashSet<String>();
    }

    public String getHTMLContent(String URL) {
        String data_detail = "";
        if (!urlLink.contains(URL)) {
            try {
                if (urlLink.add(URL)) {
//					System.out.println(URL);
                }
                Document doc = Jsoup.connect(URL).get();

                Elements elements = doc.getElementsByClass("sidebar-1").not(".pin-comment");

                for (Element ele : elements) {
                    for(int i = 1 ; i<ele.children().size()-2 ;i++) {
                        data_detail+=ele.children().get(i)+"\n";
                    }
                }
                return data_detail;
            }
            catch (IOException e) {
                System.err.println("For '" + URL + "': " + e.getMessage());
            }
        }
        return null;
    }
    public List<CategoryDTO> getCategory(String URL) {
        List<CategoryDTO> result = new ArrayList<>();
        try {
            Document doc = Jsoup.connect(URL).get();

            Elements elements = doc.getElementsByClass("parent");

            for (Element ele : elements) {
                for(int i = 2 ; i<ele.children().size()-1 ;i++) {
                    result.add(new CategoryDTO(ele.children().get(i).text(), ele.children().get(i).children().get(0).attr("href")));
                }
            }
            return result;
        } catch (IOException e) {
            System.err.println("For '" + URL + "': " + e.getMessage());
        }

        return null;
    }
}