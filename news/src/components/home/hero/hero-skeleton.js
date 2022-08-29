import React from 'react'
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../../loading-skeleton/loading-skeleton';
import "./hero.scss"

const HeroSkeleton = () => {


  return (
    <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-8 grid-margin borderPanel p-0 " >
             <LoadingSkeleton width="100%" height="500px"/>
          </div>
          <div  className="col-xl-4 stretch-card left-content grid-margin pr-0">
            <LoadingSkeleton width="100%" height="500px"/>
          </div>
        </div>
    </div>
  )
}

export default HeroSkeleton