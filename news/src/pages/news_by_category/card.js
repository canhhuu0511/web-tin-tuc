import React from 'react'
import { Link } from "react-router-dom";
import { dateFormatService } from '../../services/dateFormat';
import { sliceLink } from '../../services/sliceLink';
import CardSkeleton from './cardSkeleton';

const Card = ({feed}) => {
    return feed ? (
        <div className="card-content row">
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
          <img className="col-xl-4 " src={`${feed.image}`} />
        </div>
      ) : (
        <CardSkeleton />
      );
}

export default Card