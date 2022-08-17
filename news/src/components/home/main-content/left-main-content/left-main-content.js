import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { PATHS } from '../../../../constants/path';
import { getListNews } from '../../../../redux/slices/newsSlice';
import Card from './card'
import "./left-main-content.scss"

const LeftMainContent = ({categories}) => {

  const listNews = useSelector((state)=>state.news.listNews)
  const dispatch = useDispatch();
  useEffect(() => {
    const getListByCategoryName = async() =>{
      await dispatch(getListNews(PATHS.KINHTE));
    }
    getListByCategoryName();
  }, []);

  return (
    <div>
        {categories.map((e,index)=>(
          <Card key={index} category={e} listNews={listNews}/>
        ))}
    </div>
  )
}

export default LeftMainContent;