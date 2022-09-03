import React, { useEffect, useState, memo } from "react";
import { selectListSubNews } from "../../../redux/slices/newsSlice";
import { useSelector } from "react-redux";
import "./popular_news.scss";
import { Link } from "react-router-dom";
import { dateFormatService } from "../../../services/dateFormat";
import PopularNewsSekeleton from "../../../components/detail/popular_news_skeleton/popular_news_skeleton";
import { sliceLink } from "../../../services/sliceLink";

const PopularNews = () => {
  const listVideo = useSelector((state) =>
    selectListSubNews(state, "tin-xem-nhieu")
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (listVideo) setLoading(false);
    }, 1000);
  }, [listVideo]);

  return loading === false ? (
      <div className="popular-news">
        <div className="container">
          <h3 className="header">Xem nhiều</h3>
          <div className="content">
            <div className="content-item">
              <img src={`${listVideo.data[0].image}`} alt="" />
              <Link to={`/news/${sliceLink(listVideo.data[0].link)}`} state={`${listVideo.data[0].link}`}>{listVideo.data[0].title}</Link>
              <p>
                {dateFormatService.formatPubDateAndTime(
                  listVideo.data[0].pubDate
                )}
              </p>
            </div>
            {listVideo &&
              listVideo.data.length >= 0 &&
              listVideo.data.slice(1,5).map((feed,key) => {
                return (
                  <div key={key} className="content-item">
                    <Link style={{fontWeight:"normal",fontSize:"15px"}} to={`/news/${sliceLink(feed.link)}`} state={`${feed.link}`}>{feed.title}</Link>
                    <p>
                      {dateFormatService.formatPubDateAndTime(
                        feed.pubDate
                      )}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container box-content p-3">
          <h3 className="header">Tin tài trợ</h3>
          <div className="content">
            {listVideo &&
              listVideo.data.length >= 0 &&
              listVideo.data.slice(5, 9).map((feed,key) => {
                return (
                  <div key={key} className="content-item">
                    <Link style={{fontWeight:"normal",fontSize:"15px"}} to={`/news/${sliceLink(feed.link)}`} state={`${feed.link}`}>{feed.title}</Link>
                    <p>
                      {dateFormatService.formatPubDateAndTime(
                        feed.pubDate
                      )}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
  ) : (
    <PopularNewsSekeleton></PopularNewsSekeleton>
  );
};

export default memo(PopularNews);
