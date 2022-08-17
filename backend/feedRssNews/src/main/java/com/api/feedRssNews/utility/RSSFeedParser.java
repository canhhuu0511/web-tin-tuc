package com.api.feedRssNews.utility;

import com.api.feedRssNews.DTO.RSSFeedDTO;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;


import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Characters;
import javax.xml.stream.events.XMLEvent;
public class RSSFeedParser{
    static final String TITLE = "title";
    static final String DESCRIPTION = "description";
    static final String LINK = "link";
    static final String ITEM = "item";
    static final String PUB_DATE = "pubDate";

    final URL url;

    public RSSFeedParser(String feedUrl) {
        try {
            this.url = new URL(feedUrl);
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
            String pubdate = entry.getPublishedDate().getTime()+"";
            feeds.add(convertDataToDTO(id,title,description, link, pubdate));
        }
        return feeds;
    }
    private String getCharacterData(XMLEvent event, XMLEventReader eventReader)
            throws XMLStreamException {
        String result = "";
        event = eventReader.nextEvent();
        if (event instanceof Characters) {
            result = event.asCharacters().getData();
        }
        return result;
    }

    private InputStream read() {
        try {
            return url.openStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private RSSFeedDTO convertDataToDTO(int id,String title,String detailInfo,String link,String pubDate){
        RSSFeedDTO result = new RSSFeedDTO();
        result.setTitle(title);
        result.setLink(link);
        result.setPubDate(pubDate);
        result.setId("RF00"+id);
        try {
            result.setImage(detailInfo.substring(detailInfo.indexOf("src=") + 5, detailInfo.indexOf(".jpg") +4));
            if(detailInfo.indexOf("</br>")==-1)
            result.setDescription(detailInfo.substring(detailInfo.indexOf("</a>") + 4));
            else result.setDescription(detailInfo.substring(detailInfo.indexOf("</br>") + 5));

        }catch (Exception e){
            System.out.println(detailInfo.indexOf("src="));
            System.out.println(detailInfo.indexOf(".jpg") +4);
            System.out.println(detailInfo);
        }
        return result;
    }
}