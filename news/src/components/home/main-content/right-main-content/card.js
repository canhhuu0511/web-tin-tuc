import React from 'react'

const Card = ({feed}) => {
  return (
    <div className="container">
       <div className="col-12">
        <h3 className="title">
          {feed.title}
        </h3>
        <div className="row">
          <div className="col-xl-5">
            <img style={{objectFit:"cover",width:'100%'}} src={`${feed.image}`} alt="" />
          </div>
          <div className="col-xl-7">
            {feed.description}
          </div>
        </div>
       </div>
    </div>
  )
}

export default Card