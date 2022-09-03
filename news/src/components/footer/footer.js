import React, { useEffect, useState } from "react";
import { selectListSubNews } from "../../redux/slices/newsSlice";
import "./footer.scss";
import { useSelector } from "react-redux";
import ListRecentNews from "./listRecentNews/listRecentNews";
import { Link } from "react-router-dom";

const Footer = () => {
  const listRecentPost = useSelector((state) =>
    selectListSubNews(state, "tin-moi-nhat")
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if(listRecentPost&&listRecentPost.data.length>0)
      setLoading(false);
    }, 1000);
  }, [listRecentPost]);
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              style={{ position: "relative", top: "-15px" }}
              className="col-lg-5 left-footer"
            >
              <Link to={""}>
                <h2
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  KENH33
                </h2>
              </Link>
              <h5 className="font-weight-normal  mb-5">
                My name is Canh , I'm a web developer
              </h5>
              <ul className="social-media icons-footer mb-3">
                <li>
                  <a href="#">
                    <i
                      style={{ margin: "0 3px" }}
                      className="fab fa-facebook-f"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3 className="font-weight-bold mb-3">Tin mới nhất</h3>
                <ListRecentNews loading={loading} listNews={listRecentPost}></ListRecentNews>
            </div>
            <div className="col-lg-3">
              <h3 className="font-weight-bold mb-3">Danh mục</h3>
              <div className="footer-border-bottom pb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 font-weight-600">Chinh tri</h5>
                  <div className="count">1</div>
                </div>
              </div>
              <div className="footer-border-bottom pb-2 pt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 font-weight-600">Kinh tế</h5>
                  <div className="count">1</div>
                </div>
              </div>
              <div className="footer-border-bottom pb-2 pt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 font-weight-600">Xã hội</h5>
                  <div className="count">1</div>
                </div>
              </div>
              <div className="footer-border-bottom pb-2 pt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 font-weight-600">Đời sống</h5>
                  <div className="count">1</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 font-weight-600">Đa chiều</h5>
                  <div className="count">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-sm-flex justify-content-between align-items-center">
                <div className="fs-14 font-weight-600">
                  © 2020 @{" "}
                  <a
                    href="https://www.bootstrapdash.com/"
                    target="_blank"
                    className="text-white"
                  >
                    {" "}
                    BootstrapDash
                  </a>
                  . All rights reserved.
                </div>
                <div className="fs-14 font-weight-600">
                  Nhom 33 Canh and Duy{" "}
                  <a
                    href="https://www.bootstrapdash.com/"
                    target="_blank"
                    className="text-white"
                  >
                    BootstrapDash
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
