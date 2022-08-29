import React, { useEffect, useState } from "react";
import CenterContent from "../../components/home/center-content/center_content";
import Hero from "../../components/home/hero/Hero";
import "./home.scss";
import {useSelector} from "react-redux";
import MainContent from "../../components/home/main-content/main-content";
import VideoContent from "../../components/home/video-content/video-content";

export const Home = () => {
  const {listNews,categories} = useSelector((state)=>state.news);
  return (
    <div className="home">
          <Hero listNews={listNews} />
          <MainContent categories={categories}/>
          <CenterContent categories={categories}/>
          <VideoContent  categories={categories} />
    </div>
  );
};
