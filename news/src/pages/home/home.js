import React, { useEffect, useState } from "react";
import CenterContent from "../../components/home/center-content/center_content";
import Hero from "../../components/home/hero/Hero";
import "./home.scss";
import {useSelector} from "react-redux";
import MainContent from "../../components/home/main-content/main-content";

export const Home = (props) => {
  const listNews = useSelector((state)=>state.news.listNews);
  const categories = useSelector((state)=>state.news.categories);

  return listNews && listNews.length>0?(
    <div className="home">
          <Hero listNews={listNews}/>
          <CenterContent categories={categories}/>
          <MainContent/>
    </div>
  ):<></>;
};
