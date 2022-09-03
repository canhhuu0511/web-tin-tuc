import React from "react";
import { Link } from "react-router-dom";
import { sliceLink } from "../../../services/sliceLink";

const ListRecentNews = ({ loading, listNews }) => {
  return !loading ?(
    <div className="row">
      <div className="col-sm-12">
        <div className="footer-border-bottom pb-2">
          {listNews.data.slice(0,4).map((feed,key) => (
            <div key={key} className="row">
              <div className="col-3">
                <img
                  style={{width:"100px",height:"50px",objectFit:"cover"}}
                  src={`${feed.image}`}
                  alt="thumb"
                  className="img-fluid"
                />
              </div>
              <div className="col-9">
                <Link style={{color:"white"}} to={`/news/${sliceLink(feed.link)}`} state={`${feed.link}`}  ><h5 className="font-weight-600">{feed.title}</h5></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ):(
    <div className="row">
      <div className="col-sm-12">
        <div className="footer-border-bottom pb-2">
          {/* {listNews.map((feed) => (
            <div className="row">
              <div className="col-3">
                <img
                  src={`${feed.image}`}
                  alt="thumb"
                  className="img-fluid"
                />
              </div>
              <div className="col-9">
                <Link to={`/news/${sliceLink(feed.link)}`}  state={`${feed.link}`}  ><h5 className="font-weight-600">{feed.title}</h5></Link>
              </div>
            </div>
          ))} */}
          loading....
        </div>
      </div>
    </div>
  );
};

export default ListRecentNews;
