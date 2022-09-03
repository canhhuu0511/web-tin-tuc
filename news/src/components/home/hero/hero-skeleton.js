import React from 'react'
import LoadingSkeleton from '../../loading-skeleton/loading-skeleton';
import "./hero.scss"

const HeroSkeleton = () => {


  return (
    <div className="container">
        <div className="row" data-aos="fade-up">
          <div style={{backgroundColor:"white",height:"500px"}} className="col-xl-8 grid-margin borderPanel p-0 " >
          <div className="big-content">
              <div className="banner-content">
                <LoadingSkeleton width="100%" height="300px"/>

                <div className="content">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <LoadingSkeleton width="79%" height="20px"/>
                    <LoadingSkeleton width="79%" height="20px"/>
                    <LoadingSkeleton width="59%" height="20px"/>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-xl-4 stretch-card left-content grid-margin pr-0">
          <div className="card bg-dark text-white">
              <div className="card-body borderPanel">
                <h2>Tin mới nhất</h2>
                {Array.apply(null, { length: 3 }).map((e,index)=>
                (<div key={index} className="row border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                  <div className="col-xl-8 pr-3 font-weight-bold">
                    <LoadingSkeleton width="79%" height="20px"/>
                    <LoadingSkeleton width="79%" height="10px"/>
                    <LoadingSkeleton width="59%" height="10px"/>
                  </div>
                  <div className='col-xl-4'>
                    <LoadingSkeleton width="100%" height="90px"/>
                  </div>
                </div>)
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSkeleton