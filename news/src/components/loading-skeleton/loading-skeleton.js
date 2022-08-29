import React from 'react'
import "./loading-skeleton.scss"

const LoadingSkeleton = ({width,height,style})=> {
  return (
    <div className='skeleton' style={{width:`${width?width:"100%"}`,height:`${height?height:"50px"}`,borderRadius:"10px",marginBottom:"10px"}}></div>
  )
}

export default LoadingSkeleton