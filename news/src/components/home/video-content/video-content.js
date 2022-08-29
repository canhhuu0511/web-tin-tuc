import React, { useEffect, useState,memo } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../pages/loading_page/Loading'
import { selectListSubNews } from '../../../redux/slices/newsSlice'
import LoadingSkeleton from '../../loading-skeleton/loading-skeleton'
import "./video-content.scss"
import VideoMainContent from './video_main_content/video_main_content'
import VideoSubContent from './video_sub_content/video_sub_content'

const VideoContent = ({ categories}) => {
    // console.log(categories)
  const listVideo = useSelector((state)=>selectListSubNews(state,"video"));
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{setLoading(false)},1000)
  }, []);

  console.log(listVideo)
  
  return listVideo!==undefined&&loading===false?(
    <div className='video-content' >
        <div className="container" >
            <div style={{maxHeight:"100%",margin:"0"}} className="row borderPanel">
            <h2 className="font-weight-bold">Video</h2>
                <div className="col-lg-8">
                    <VideoMainContent feedVideo={listVideo.data[0]} />
                </div>
                <div className="col-lg-4 list-sub-video">
                    <VideoSubContent listVideos={listVideo.data.slice(3,20)}/>
                </div>
            </div>
        </div>
    </div>
    ):<LoadingSkeleton height={"300px"}/>
}

export default memo(VideoContent)