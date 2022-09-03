import React from "react";
import LoadingSkeleton from "../../loading-skeleton/loading-skeleton";

const PopularNewsSekeleton = () => {
  return (
    <div className="popular-news">
      <div className="container">
      <LoadingSkeleton width={"140px"} height={"30px"} />
        <div style={{padding:"0"}} className="content">
          <div style={{marginBottom:"20px"}} className="content-item">
          <LoadingSkeleton width={"100%"} height={"160px"} />
          <LoadingSkeleton width={"250px"} height={"25px"} />
          <LoadingSkeleton width={"200px"} height={"15px"} />

          </div>
          
          {Array.apply(null, { length: 4 }).map((e,index) => {
              return (
                <div key={index} style={{marginBottom:"20px"}} className="content-item">
                  <LoadingSkeleton width={"250px"} height={"20px"} />
                  <LoadingSkeleton width={"200px"} height={"10px"} />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container">
        <LoadingSkeleton width={"100%"} height={"400px"} />
      </div>
    </div>
  );
};

export default PopularNewsSekeleton;
