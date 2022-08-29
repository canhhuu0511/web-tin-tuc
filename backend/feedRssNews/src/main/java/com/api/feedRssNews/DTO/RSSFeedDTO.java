package com.api.feedRssNews.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RSSFeedDTO {
    String id;
    String title;
    String description;
    Date pubDate;
    String link;
    String image;
}
