import React from 'react'
import LeftMainContent from './left-main-content/left-main-content'
import "./main-content.scss"
import RightMainContent from './right-main-content/right-main-content'

const MainContent = ({categories}) => {
  return (
    <div className='main-content' >
        <div className="container" >
            <div style={{height:"100%",margin:"0"}} className="row borderPanel">
                <div className="col-lg-7">
                    <LeftMainContent categories={categories.slice(2,6)}/>
                </div>
                <div className="col-lg-5">
                    <RightMainContent/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MainContent