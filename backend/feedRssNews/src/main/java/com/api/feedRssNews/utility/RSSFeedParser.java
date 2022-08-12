package com.api.feedRssNews.utility;

import com.api.feedRssNews.DTO.RSSFeedDTO;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


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

    public List<RSSFeedDTO> readFeed() {
        List<RSSFeedDTO> feeds = new ArrayList<>();
        try {
            boolean isFeedHeader = true;
            // Set header values intial to the empty string
            String description = "";
            String title = "";
            String link = "";
            int i = 0 ;
            String pubdate = "";

            // First create a new XMLInputFactory
            XMLInputFactory inputFactory = XMLInputFactory.newInstance();
            // Setup a new eventReader
            InputStream in = read();
            XMLEventReader eventReader = inputFactory.createXMLEventReader(in);
            // read the XML document
            int id = 0;
            while (eventReader.hasNext()) {
                XMLEvent event = eventReader.nextEvent();
                if (event.isStartElement()) {
                    String localPart = event.asStartElement().getName()
                            .getLocalPart();
                    switch (localPart) {
                        case ITEM:
                            if (isFeedHeader) {
                                isFeedHeader = false;
                            }
                            id++;
                            feeds.add(convertDataToDTO(id,title,description, link, pubdate));
                            event = eventReader.nextEvent();
                            break;
                        case TITLE:
                            title = getCharacterData(event, eventReader);
                            break;
                        case DESCRIPTION:
                            description = getCharacterData(event, eventReader);
                            break;
                        case LINK:
                            link = getCharacterData(event, eventReader);
                            break;
                        case PUB_DATE:
                            pubdate = getCharacterData(event, eventReader);
                            break;

                    }
                } else if (event.isEndElement()) {

                }
            }
        } catch (XMLStreamException e) {
            throw new RuntimeException(e);
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
            result.setImage(detailInfo.substring(detailInfo.indexOf("src=") + 5, detailInfo.indexOf("></a>") - 2));
            result.setDescription(detailInfo.substring(detailInfo.indexOf("</br>") + 5));
        }catch (Exception e){
            result.setImage("");
            result.setDescription("");

        }
        return result;
    }
}