package com.api.feedRssNews.controller;

import com.api.feedRssNews.DTO.CategoryDTO;
import com.api.feedRssNews.DTO.RSSFeedDTO;
import com.api.feedRssNews.utility.RSSFeedParser;
import com.api.feedRssNews.utility.WebCrawler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/newsfeed")
public class FeedController {

    private WebCrawler webCrawler;
    private RSSFeedParser rssFeedParser;

    @GetMapping("")
    public ResponseEntity<List<RSSFeedDTO>> getAll(@RequestParam String url){
        rssFeedParser = new RSSFeedParser(url);
        List<RSSFeedDTO> list =  rssFeedParser.readFeed();
        list.remove(0);
        return ResponseEntity.ok().body(list);
    }
    @GetMapping("/detail")
    public ResponseEntity<String> getDetail(@RequestParam String url){
        webCrawler = new WebCrawler();

        return ResponseEntity.ok().body(webCrawler.getHTMLContent(url));
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDTO>> getCategories(){
        webCrawler = new WebCrawler();
        List<CategoryDTO> result = webCrawler.getCategory("https://vnexpress.net/");
        if(result!=null&&result.size()>0){
            return ResponseEntity.ok().body(result);
        }
        return ResponseEntity.noContent().build();
    }


}
