import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectListSubNews } from "../../../../redux/slices/newsSlice";

const Card = ({ category }) => {
 const listSubNews = useSelector((state)=>selectListSubNews(state,category.script.slice(3)))
 const listNews =listSubNews?listSubNews.data:[];
  return (
    listNews.length > 0 && (
      <div className="left-card">
        <ul className="left-card_nav">
          <li style={{ width: "97px" }}>
            <Link className="main-item" to={`${category.script}`}>
              {category.title}
            </Link>
          </li>
          {category.listSub &&
            category.listSub.slice(0, 4).map((e, index) => {
              return (
                <li key={index}>
                  <Link className="item text-center" to={`${e.script}`}>
                    {e.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <div className="row">
          <div className="col-lg-9 row mb-3">
            <img className="col" srcSet={`${listNews[0].image} 2x`} alt="" />
            <div className="info col ">
              <h2>{listNews[0].title}</h2>
              <p>{listNews[0].description}</p>
            </div>
          </div>
          <div className="col-lg-3 info">
            <h2>{listNews[1].title}</h2>
            <p>{listNews[1].description}</p>
          </div>
        </div>
        <div className=" pt-2 ">
          <ul className="nav row">
            <li className=" col">
              <Link style={{ fontWeight: "bold" }} to={`/${listNews[2].link}`}>
                {listNews[2].title}
              </Link>
            </li>
            <li className="col">
              <Link style={{ fontWeight: "bold" }} to={`/${listNews[3].link}`}>
                {listNews[3].title}
              </Link>
            </li>
            <li className="col">
              <Link style={{ fontWeight: "bold" }} to={`/${listNews[4].link}`}>
                {listNews[4].title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Card;
