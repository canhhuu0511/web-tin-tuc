import React from "react";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../../../loading-skeleton/loading-skeleton";
import "./list-categories.scss";

const ListCategories = (props) => {
  const {categories} = props;
  return categories.length>0? (
    <div className="col-md-3 col-sm-12 left-center ">
      <div className="content borderPanel">
        <h2 className="title">
          Danh mục
        </h2>
        <ul className="listCategory">
          {categories.map((e)=>(
            <li key={e.script} ><Link to={`/${e.script}`}>{e.title}</Link></li>
          ))}
        </ul>
        
      </div>
    </div>
  ):
  <div className="col-md-3 col-sm-12 left-center ">
      <div className="content borderPanel">
        <h2 className="title">
          Danh mục
        </h2>
        <ul className="listCategory">
            {Array.apply(null, { length: 8 }).map((e,index)=>(
                <li key={index} ><LoadingSkeleton height={"20px"} width={"100px"}/></li>
              ))}
        </ul>
        
      </div>
    </div>;
};

export default ListCategories;
