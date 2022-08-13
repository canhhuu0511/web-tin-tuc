import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Card = ({feed}) => {
  
  const listNews = useSelector((state)=>state.news.listNews)
  
  return (
    <div className='left-card'>
        <ul className='left-card_nav'>
            <li><Link className='main-item' to={"/kinh-doanh"}>Kinh doanh</Link></li>
            <li><Link to={"/bat-dong-san"}>Bất động sản</Link></li>
            <li><Link to={"/tieu-dung-du-luan"}>Tiêu dùng {"&"} Dư luận</Link></li>
            <li><Link to={"/the-gioi"}>Thế giới</Link></li>
            <li><Link to={"/thuong-hieu"}>Thương hiệu</Link></li>
        </ul>
        <div className="row">
            <div className="col-lg-9 row mb-3">
                <img className='col' srcSet={`${listNews[10].image} 2x`}alt="" />
                <div className="info col border-right">
                    <h2>{listNews[10].title}</h2>
                    <p>{listNews[10].description}</p>
                </div>
            </div>
            <div className="col-lg-3 info">
                    <h2>{listNews[11].title}</h2>
                    <p>{listNews[11].description}</p>
            </div>
        </div>
        <div className="row pt-2 ">
            <ul>
            <li className="col">
                <Link style={{fontWeight:"bold"}} to={`/${listNews[12].link}`}>{listNews[12].title}</Link>
            </li>
            <li className="col">
                <Link  style={{fontWeight:"bold"}} to={`/${listNews[13].link}`}>{listNews[13].title}</Link>
            </li>
            <li className="col">
                <Link  style={{fontWeight:"bold"}} to={`/${listNews[14].link}`}>{listNews[14].title}</Link>
            </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Card