import React from 'react'

const VideoMainContent = ({feedVideo}) => {
 
  return (
    <div>
        <img src={`${feedVideo.image}`} style={{width:"100%"}} alt='video'></img>
        <h3 style={{marginTop:"10px"}}>{feedVideo.title}</h3>
    </div> 
  )
}

export default VideoMainContent