import React from 'react'

const Card = () => {
  return (
    <div className="container">
       <div className="col-12">
        <h3 className="title">
          title
        </h3>
        <div className="row">
          <div className="col-xl-5">
            <img style={{objectFit:"cover",width:'100%'}} src="https://i-vnexpress.vnecdn.net/2022/08/13/chay-6-1660377459-4382-1660377505_r_460x0.jpg" alt="" />
          </div>
          <div className="col-xl-7">
            description dsasadsadasdsadsadasdsadsa
          </div>
        </div>
       </div>
    </div>
  )
}

export default Card