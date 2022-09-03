import React from 'react'
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../../components/loading-skeleton/loading-skeleton';

const CardSkeleton = () => {
    return (
        <div className="card-content row">
          <Link to={`#`} className="card-info col-xl-8 col-md-12">
            <h3>
              <LoadingSkeleton style={{marginBottom:"20px"}} height={"30px"} />
              <LoadingSkeleton width={"200px"} height={"30px"} />
            </h3>
              <LoadingSkeleton width={"200px"} height={"30px"} />
              <LoadingSkeleton />
          </Link>
          <LoadingSkeleton width={"280px"} height={"200px"} />
        </div>
      );
}

export default CardSkeleton