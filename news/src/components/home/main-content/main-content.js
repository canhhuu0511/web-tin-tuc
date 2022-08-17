import React from 'react'
import LeftMainContent from './left-main-content/left-main-content'
import "./main-content.scss"
import RightMainContent from './right-main-content/right-main-content'

const MainContent = ({categories}) => {
    console.log(categories);
  return (
    <div className='main-content' >
        <div className="container" >
            <div style={{height:"100%"}} className="row borderPanel">
                <div className="col-lg-7">
                    <LeftMainContent categories={categories.slice(2,5)}/>
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