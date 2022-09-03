import React from 'react'

const VideoSubContent = ({listVideos}) => {
 
  return (
    <div className='row gap-3 scrollbar'>
        {listVideos.map((e,index)=>(
            <div style={{paddingRight:"0"}} key={index} className='row'>
                <div className='col-lg-5'>
                    <img style={{width:"100%",height:"100px"}} src={e.image}></img>
                </div>
                <div style={{paddingRight:0}} className='col-lg-7'>
                    <h4 style={{fontSize:"1.2em"}}>{e.title}</h4>
                </div>
            </div>
        ))}
    </div>
  )
}

export default VideoSubContent