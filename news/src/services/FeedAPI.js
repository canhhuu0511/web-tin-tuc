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

}


export const feedService = new FeedService();