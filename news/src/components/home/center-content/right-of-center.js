import React from 'react'
import Card from './card'
import "./right-of-center.scss"
const RightContent = ({listNews}) => {
  return (
    <div className="col-md-9 col-sm-12  right-content">
        <div className='content borderPanel'>
          <ul className='container'>
              {listNews.map((e)=>(
                e.image===''?
                <></>:
                <Card feed={e}/>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default RightContent