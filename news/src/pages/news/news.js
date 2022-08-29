import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { feedService } from '../../services/FeedAPI';
import NewsDetail from './new_detail/new_detail'
import "./news.scss"

export const News = () => {
  const { state } = useLocation();
  const [contentHTML, setContentHTML] = useState("");

  useEffect(() => {
    feedService
      .getNewsDetail(state)
      .then((e) => setContentHTML(e.data))
      .catch((e) => {
        setContentHTML("NO Content");
      });
  }, [state]);
  return (
    <div className='detail' >
        <div className="container" >
            <div style={{height:"100%",margin:"0"}} className="row borderPanel">
                <div className="col-lg-7">
                    <NewsDetail contentHTML={contentHTML}/>
                </div>
                <div className="col-lg-5">
                    {/* <RightMainContent/> */}
                </div>
                
            </div>
        </div>
    </div> 

  )
}
