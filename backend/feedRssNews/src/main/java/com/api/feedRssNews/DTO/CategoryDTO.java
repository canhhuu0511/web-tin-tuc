package com.api.feedRssNews.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {
    String title;
    String script;
    List<CategoryDTO> listSub;

    public CategoryDTO(String title , String script){
        this.title = title;
        this.script = script;
        this.listSub = new ArrayList<>();
    }
}
