import React from "react";
import { Link } from "react-router-dom";
import "./left-of-center.scss";

const LeftContent = (props) => {
  const {categories} = props;
  return (
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
  );
};

export default LeftContent;
