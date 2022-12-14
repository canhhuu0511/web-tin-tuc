import axios from "axios";
import { domain } from "../constants/setting_api";
export class FeedService{
    getAll = (url) => {
        return axios({
            url: `${domain}/newsfeed?url=${url}`,
            method:"GET"
        })
    };
    getCategories = () =>{
        return axios({
            url: `${domain}/newsfeed/categories`,
            method:"GET"
        })
    }
    getNewsDetail = (url) =>{
        return axios({
            url:`${domain}/newsfeed/detail?url=${url}`,
            method:"GET"
        })
    }

}


export const feedService = new FeedService();