import React from 'react'
import { selectListNew } from '../../../../redux/slices/newsSlice'
import Card from './card'
import "./right-main-content.scss"
import { useSelector } from 'react-redux'
const RightMainContent = () => {
  const listNews = useSelector(selectListNew);
  return listNews.length>0&& (
    <div className='border-rigth'>
      {listNews.slice(20,27).map((e,index)=>(
        <Card key={index} feed={e} />
      ))}
    </div>
  )
}

export default RightMainContent