import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DOMAIN } from "../../constants/path";
import { feedService } from "../../services/FeedAPI";

export const getCategories = createAsyncThunk("news/category",async (params,thunkAPI)=>{
    let data = null;
    await feedService.getCategories().then((e)=>data=e.data);
    return data;
});
export const getListNews = createAsyncThunk("news/news",async (params,thunkAPI)=>{
    let data = null;
    await feedService.getAll(params).then((e)=>data=e.data);
    return data;
})

export const getListSubNews = createAsyncThunk("news/subNews",async (params,thunkAPI)=>{
  const urlAPIs = [
    `${DOMAIN.NGUOIDUATIN}/kinh-doanh.rss`,
    `${DOMAIN.NGUOIDUATIN}/gia-dinh.rss`,
    `${DOMAIN.NGUOIDUATIN}/xa-hoi.rss`,
    `${DOMAIN.NGUOIDUATIN}/da-chieu.rss`,
    `${DOMAIN.NGUOIDUATIN}/video.rss`,
  ];
  const requests = [];
  const resp = await feedService.getAll(urlAPIs[0]);
  requests.push(resp);
  const resp2 = await feedService.getAll(urlAPIs[1]);
  requests.push(resp2);
  const resp3 = await feedService.getAll(urlAPIs[2]);
  requests.push(resp3);
  const resp4 = await feedService.getAll(urlAPIs[3]);
  requests.push(resp4);
  const resp5 = await feedService.getAll(urlAPIs[4]);
  requests.push(resp5);
  const result = [];
  axios
    .all(requests)
    .then(
      axios.spread((...responses) => {
        result.push({title:"kinh-doanh",data:responses[0].data});
        result.push({title:"doi-song",data:responses[1].data});
        result.push({title:"xa-hoi",data:responses[2].data});
        result.push({title:"da-chieu",data:responses[3].data});
        result.push({title:"video",data:responses[4].data});
      })
    )
    .catch((errors) => {
      // react on errors.
      console.error(errors);
    });

    console.log(result);
    return result;
})

export const newsSlice = createSlice({
  name: "category",
  initialState:{
    categories:[],
    listNews:[],
    listSubNews:[],
    loading:true,
    error:""
  },
  reducers: {
  },
  extraReducers:{
    [getCategories.pending]:(state)=>{
      state.loading = true;
    },
    [getCategories.fulfilled]:(state,action)=>{
      state.categories=action.payload;
      state.loading = false;

    },
    [getListNews.fulfilled]:(state,action)=>{
        state.listNews=action.payload;
        state.loading = false;
    },
    [getListSubNews.fulfilled]:(state,action)=>{
      state.listSubNews=action.payload;
      state.loading = false;
  },
  }
});

export const { getCategory, getNews } = newsSlice.actions;
export const selectListNew = state => state.news.listNews;
export const selectListSubNews = (state,script) => state.news.listSubNews.filter((e)=>e.title==script)[0];
export default newsSlice.reducer;
