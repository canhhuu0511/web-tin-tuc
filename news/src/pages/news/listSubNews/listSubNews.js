import React, { useEffect, useState } from "react";
import Card from "../../../components/home/center-content/card";
import { selectListSubNews } from "../../../redux/slices/newsSlice";
import { useSelector } from "react-redux";
import CardSkeleton from "../../../components/home/center-content/card-skeleton";
const ListSubNews = ({ type }) => {
  const listVideo = useSelector((state) =>
    selectListSubNews(state, `${type}`)
  );
  const randomNumber = Math.floor(Math.random()*10);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (listVideo) setLoading(false);
    }, 1000);
  }, [listVideo]);
  return !loading ?(
    <div className="list-sub-news">
      <h3 style={{fontWeight:"bold",marginTop:"2em"}} className={"title"}>Tin Liên quan</h3>
      <div className={"list-news"}>
        {listVideo.data.slice(randomNumber,randomNumber+6).map((feed,key)=>(
            <Card key={key} feed={feed}></Card>
        ))}
      </div>
    </div>
  ):
  <div className="col-md-9 col-sm-12  right-content">
        <div className='content borderPanel'>
          <ul className='container'>
              {Array.apply(null, { length: 2 }).map((e,index)=>(
                <CardSkeleton key={index}/>
              ))}
          </ul>
        </div>
  </div>
};

export default ListSubNews;
