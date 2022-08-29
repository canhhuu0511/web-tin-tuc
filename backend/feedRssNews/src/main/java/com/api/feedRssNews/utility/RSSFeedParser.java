package com.api.feedRssNews.utility;

import com.api.feedRssNews.DTO.RSSFeedDTO;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;

public class RSSFeedParser{
    public static final String URL_VNEXPRESS = "https://vnexpress.net";
    public static final String URL_NGUOIDUATIN = "https://www.nguoiduatin.vn";

    static final String TITLE = "title";
    static final String DESCRIPTION = "description";
    static final String LINK = "link";
    static final String ITEM = "item";
    static final String PUB_DATE = "pubDate";

    final URL url;

    public RSSFeedParser(String feedUrl) {
        try {
            this.url = new URL(feedUrl);
            System.out.println(this.url.getHost());
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }
    public List<RSSFeedDTO> readFeed() throws IOException, FeedException {
        List<RSSFeedDTO> feeds = new ArrayList<>();
        SyndFeedInput input = new SyndFeedInput();
        SyndFeed feed = input.build(new XmlReader(this.url));
        int id = 0;
        for (SyndEntry entry : (List<SyndEntry>) feed.getEntries()) {
            id ++;
            String title = entry.getTitle();
            String description = entry.getDescription().getValue().toString();
            String link = entry.getLink();
            Date pubdate = entry.getPublishedDate();
            RSSFeedDTO rssFeedDTO = convertDataToDTO(id,title,description, link, pubdate);
            if(rssFeedDTO.getImage()!=null)
                feeds.add(rssFeedDTO);
        }
        return feeds;
    }

    private RSSFeedDTO convertDataToDTO(int id,String title,String detailInfo,String link,Date pubDate){
        RSSFeedDTO result = new RSSFeedDTO();
        result.setTitle(title);
        result.setLink(link);
        result.setPubDate(pubDate);
        result.setId("RF00"+id);
        try {
            if(detailInfo.indexOf("</br>")==-1) {
                result.setImage(detailInfo.substring(detailInfo.indexOf("src=") + 5, detailInfo.indexOf("width") -2));
                result.setDescription(detailInfo.substring(detailInfo.indexOf("</a>") + 4));
                result.setImage(result.getImage().replaceAll("thumb_x180x115","thumb_x992x595"));
//                thumb_x180x115
            }else {
                result.setImage(detailInfo.substring(detailInfo.indexOf("src=") + 5, detailInfo.indexOf("></a>") -2));
                result.setDescription(detailInfo.substring(detailInfo.indexOf("</br>") + 5));}
        }catch (Exception e){
            System.out.println(detailInfo.indexOf("src="));
            System.out.println(detailInfo.indexOf(".jpg") +4);
            System.out.println(detailInfo);
        }
        return result;
    }
}