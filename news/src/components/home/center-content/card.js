import React from "react";
import { Link } from "react-router-dom";
import { dateFormatService } from "../../../services/dateFormat";
import { sliceLink } from "../../../services/sliceLink";
import CardSkeleton from "./card-skeleton";
import "./card.scss";

const Card = ({ feed }) => {
  return feed ? (
    <div className="card-content row">
      <img className="col-xl-4 " src={`${feed.image}`} />
      <Link
        to={`/news/${sliceLink(feed.link)}`}
        state={`${feed.link}`}
        className="card-info col-xl-8 col-md-12"
      >
        <h3>{feed.title}</h3>
        <p className={"pubDate"}>
          {dateFormatService.formatPubDateAndTime(feed.pubDate)}
        </p>
        <p>{feed.description}</p>
      </Link>
    </div>
  ) : (
    <CardSkeleton />
  );
};

export default Card;
