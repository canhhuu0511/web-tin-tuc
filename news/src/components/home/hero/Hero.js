import React from 'react'
import { Link } from 'react-router-dom';
import { sliceLink } from '../../../services/sliceLink';
import HeroSkeleton from './hero-skeleton';
import "./hero.scss"

const Hero = (props) => {
  const {listNews}=props;
  
  return listNews&&listNews.length>0?(
    <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-8  grid-margin borderPanel p-0 " style={{backgroundImage:`url(${listNews[0].image})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className="big-content">
              <div className="banner-content">
                <div className="content">
                  <div className="badge badge-danger fs-12 font-weight-bold mb-3 ">
                    Tin chính
                  </div>
                  <Link
                    to={`/news/${sliceLink(listNews[0].link)}`} state={`${listNews[0].link}`}
                    style={{ color: "rgba(255, 255, 255, 1)" }}
                  >
                    <h1 className="mb-2">
                      {listNews[0].title}
                    </h1>
                  </Link>
                  <div className="content-detail">
                    <p>{listNews[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 stretch-card left-content grid-margin pr-0">
            <div className="card bg-dark text-white">
              <div className="card-body borderPanel">
                <h2>Tin mới nhất</h2>
                {listNews.slice(1,4).map((feed)=>
                (<div key={feed.id} className="row border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                  <div className="col-xl-8 pr-3 font-weight-bold">
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to={"#"}
                      >
                      <h5 className="text-line-2">
                        {feed.title}
                      </h5>
                    </Link>
                    <div className="fs-12">
                      {/* <span class="mr-2">Photo </span>10 Minutes ago */}
                      <p className="pybDate">
                        {feed.description}
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4'>
                    {feed.image!==''?
                    (<img
                      style={{ width: "100%" }}
                      src={`${feed.image}`}
                      alt=""
                    />
                    ):<></>}
                  </div>
                </div>)
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  ):<HeroSkeleton/>
}

export default Hero