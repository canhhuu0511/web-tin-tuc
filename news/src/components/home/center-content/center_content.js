import React from "react";
import "./center-content.scss";
import LeftContent from "./left-of-center";
import RightContent from "./right-of-center";
import {useSelector} from "react-redux";

const CenterContent = (props) => {
  const categories = useSelector((state)=>state.news.categories);
  const listNews = useSelector((state)=>state.news.listNews);
  return (
    <div className="center-content">
      <div className="container">
        <div className="row">
          <LeftContent categories={categories}/>
          <RightContent listNews={listNews.slice(5,9)} />
        </div>
      </div>
    </div>
  );
};

export default CenterContent;
