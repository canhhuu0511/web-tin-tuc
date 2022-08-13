import React from 'react'
import { Link } from 'react-router-dom'
import { dateFormatService } from '../../../services/dateFormat'
import "./card.scss"

const Card = ({feed}) => {
  return (
    <div className='card-content row'>
        <img className='col-xl-4 ' src={`${feed.image}`}  />
        <Link to={`${feed.link}`} className="card-info col-xl-8 col-md-12">
            <div className="title">
                {feed.title}
            </div>
            <p className={"pubDate"}>
                {dateFormatService.formatPubDateAndTime(feed.pubDate)}
            </p>
            <p>
                {feed.description}
            </p>
        </Link>
    </div>
  )
}

export default Card