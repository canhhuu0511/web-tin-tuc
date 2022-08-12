package com.api.feedRssNews.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RSSFeedDTO {
    String id;
    String title;
    String description;
    String pubDate;
    String link;
    String image;
}
