import React, { useEffect, useState } from "react";
import Card from "./card";
import "./left-main-content.scss";
import { useSelector } from "react-redux";
import { selectListNew } from "../../../../redux/slices/newsSlice";

const LeftMainContent = ({ categories }) => {
  const [listNews, setListNews] = useState([]);
  const news = useSelector(selectListNew);

  useEffect(() => {
    const getData = async () => {
      
    };
    getData();
  }, [news]);
  return (
    <div>
      {categories.map((e, index) => (
        <Card key={index} category={e} listNews={listNews} />
      ))}
    </div>
  );
};

export default LeftMainContent;
