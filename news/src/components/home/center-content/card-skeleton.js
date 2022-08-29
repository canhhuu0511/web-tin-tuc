import React from "react";
import { Link } from "react-router-dom";
import { dateFormatService } from "../../../services/dateFormat";
import LoadingSkeleton from "../../loading-skeleton/loading-skeleton";
import "./card.scss";

const CardSkeleton = () => {
  return (
    <div className="card-content row">
      <LoadingSkeleton width={"280px"} height={"200px"} />
      <Link to={`#`} className="card-info col-xl-8 col-md-12">
        <h3>
          <LoadingSkeleton style={{marginBottom:"20px"}} height={"30px"} />
          <LoadingSkeleton width={"200px"} height={"30px"} />
        </h3>
          <LoadingSkeleton width={"200px"} height={"30px"} />
          <LoadingSkeleton />
      </Link>
    </div>
  );
};

export default CardSkeleton;
