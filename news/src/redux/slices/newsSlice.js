import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
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


export const newsSlice = createSlice({
  name: "category",
  initialState:{
    categories:[],
    listNews:[],
    loading:false,
    error:""
  },
  reducers: {
  },
  extraReducers:{
    [getCategories.fulfilled]:(state,action)=>{
        state.loading = false;
        state.categories=action.payload;
    },
    [getListNews.fulfilled]:(state,action)=>{
        state.loading = false;
        state.listNews=action.payload;
    },
  }
});

export const { getCategory, getNews } = newsSlice.actions;

export default newsSlice.reducer;
