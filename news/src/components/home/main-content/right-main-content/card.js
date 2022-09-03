import React from "react";
import { Link } from "react-router-dom";
import { sliceLink } from "../../../../services/sliceLink";

const Card = ({ feed }) => {
  return (
    <div className="container">
      <div className="col-12">
        <Link
          to={`/news/${sliceLink(feed.link)}`}
          state={`${feed.link}`}
        >
          {" "}
          <h3 className="title">{feed.title}</h3>
        </Link>
        <div className="row">
          <div className="col-xl-5">
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={`${feed.image}`}
              alt=""
            />
          </div>
          <div className="col-xl-7">{feed.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
