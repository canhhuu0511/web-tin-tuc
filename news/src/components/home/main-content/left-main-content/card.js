import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({category,listNews}) => {
  console.log(listNews);
  return (
    <div className='left-card'>
        <ul className='left-card_nav'>
            <li style={{width:"97px"}}><Link className='main-item' to={`${category.script}`}>{category.title}</Link></li>
            {category.listSub&&category.listSub.slice(0,4).map((e,index)=>{
                return <li key={index}><Link className='item text-center' to={`${e.script}`}>{e.title}</Link></li>
            })}
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
        <div className=" pt-2 ">
            <ul className='nav row'>
                <li className=" col">
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