import React, { useEffect, useState } from "react";
import "./new_detail.scss"

const NewsDetail = ({contentHTML}) => {

  const [index,setIndex] = useState(0);

  useEffect(() => {
    getIamgeSrc();
  });

  const getIamgeSrc = async() => {
    const imgs =
      document.getElementsByTagName("img") &&
      document.getElementsByClassName("lazy");
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].getAttribute("data-src")) {
        await imgs[i].setAttribute("src", imgs[i].getAttribute("data-src"));
        imgs[i].removeAttribute("data-src"); //use only if you need to remove data-src attribute after setting src
        setIndex(1);
      }
    }
  };

  return <div className="news_detail" dangerouslySetInnerHTML={{ __html: contentHTML }}></div>;
};

export default NewsDetail;



