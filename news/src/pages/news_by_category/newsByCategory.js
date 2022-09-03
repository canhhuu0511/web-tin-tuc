import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DOMAIN } from "../../constants/path";
import { selectListSubCategories } from "../../redux/slices/newsSlice";
import { feedService } from "../../services/FeedAPI";
import Popular_news from "../news/popular_news/popular_news";
import Card from "./card";
import "./newByCategory.scss";

const NewsByCategory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type ,subtype} = useParams();
  console.log(type,subtype)
  const category = useSelector((state) =>
    selectListSubCategories(state, `/c/${type}`)
  );
  const randomNumber = Math.floor(Math.random() * 10);

  useEffect(() => {
    feedService
      .getAll(`${DOMAIN.NGUOIDUATIN}/${subtype||type}.rss`)
      .then((e) => {
        setData(e.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [subtype]);
  console.log(data)

  return category?(
    <div className="news-by-category">
      <div className="container">
        <div
          style={{ backgroundColor: "white" }}
          className=" borderPanel "
        >
          <ul className="top-header">
            <li className="main-item">
              <Link to={`.`}>
                <h2>{category.title}</h2>
              </Link>
            </li>
            {category.listSub &&
              category.listSub.slice(0, 4).map((e, index) => {
                return (
                  <li className="item" key={index}>
                    <Link className=" text-center" to={`${e.script.slice(3)}`}>
                      {e.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          {!loading ? (
            <div className="content row">
              <div className="col-lg-9">
                <div className="top-content">
                  <img
                    src={`${data[0].image}`}
                    alt=""
                  />
                  <div className="info">
                    <Link to={"#"}>
                      <h3>{data[0].title}</h3>
                    </Link>
                    <p>
                      {data[0].description}
                    </p>
                  </div>
                </div>
                <div className="main-content">
                    {data.slice(randomNumber,randomNumber+9).map((feed,key)=>{
                        return <Card key={key} feed={feed}/>
                    })}
                </div>
              </div>
              <div  className="col-lg-3 pt-3">
                <Popular_news></Popular_news>
              </div>
            </div>
          ) : (
            <>loading...</>
          )}
        </div>
      </div>
    </div>
  ):<>loading...</>;
};

export default memo(NewsByCategory);
