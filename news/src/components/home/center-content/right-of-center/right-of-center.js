import React from 'react'
import Card from '../card'
import CardSkeleton from '../card-skeleton'
import "./right-of-center.scss"
const RightContent = ({listNews}) => {
  return listNews.length>0?(
    <div className="col-md-9 col-sm-12  right-content">
        <div className='content borderPanel'>
          <ul className='container'>
              {listNews.map((e,index)=>(
                e.image===''?
                <></>:
                <Card key={e.title} feed={e}/>
              ))}
          </ul>
        </div>
    </div>
  ):
  <div className="col-md-9 col-sm-12  right-content">
        <div className='content borderPanel'>
          <ul className='container'>
              {Array.apply(null, { length: 4 }).map((e,index)=>(
                <CardSkeleton key={index}/>
              ))}
          </ul>
        </div>
  </div>
}

export default RightContent