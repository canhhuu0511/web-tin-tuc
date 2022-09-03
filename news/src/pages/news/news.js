import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { feedService } from "../../services/FeedAPI";
import NewsDetail from "./new_detail/new_detail";
import "./news.scss";
import PopularNews from "./popular_news/popular_news";
import Comment from "../../components/plugin_FB/comment/comment";
import { sliceLink } from "../../services/sliceLink";
import ListSubNews from "./listSubNews/listSubNews";
export const News = () => {
  const { state } = useLocation();
  const [contentHTML, setContentHTML] = useState("");


  useEffect(() => {
    feedService
      .getNewsDetail(state)
      .then((e) => setContentHTML(e.data))
      .catch((e) => {
        setContentHTML("NO Content");
      });
  }, [state]);
  return (
    <div className="detail">
      <div className="container">
        <div
          style={{ height: "100%", margin: "0" }}
          className="row borderPanel"
        >
          <div className="col-lg-9">
            <NewsDetail contentHTML={contentHTML} />
          </div>
          <div className="col-lg-3">
            <PopularNews />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{ height: "100%", margin: "0", marginTop: "2em" }}
          className="row borderPanel content-bottom"
        >
          <div className="col-lg-9">
          <Comment href={sliceLink(state)}></Comment>
          </div>
          <div className="col-lg-9">
            <ListSubNews type={"da-chieu"}/>
          </div>
        </div>
      </div>
    </div>
  );
};
