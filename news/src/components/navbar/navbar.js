import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatService } from "../../services/dateFormat";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { sliceLink } from "../../services/sliceLink";
const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const handleClickToggle = () => {
    setShow(!show);
  };
  const [offset, setOffset] = useState(0);

  //handleScroll event
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = useSelector((state) => state.news.categories);
  const listNews = useSelector((state) => state.news.listNews);
  return (
    <div>
      <header id="header" className={`${offset>300?"sticky":""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div style={offset>300?{display:"none"}:{display:"block"}} className="navbar-top">
              <div  className="d-flex justify-content-between align-items-center">
                <ul className="navbar-top-left-menu">
                  <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                      Liên hệ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                      Góp ý
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                      Quản cáo
                    </Link>
                  </li>
                </ul>
                <ul style={{display:"none"}} className="navbar-top-right-menu">
                  <li className="nav-item">
                    {/* Search form */}
                    <div className="md-form active-cyan active-cyan-2 mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to={""} className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={""} className="nav-link">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-bottom pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Link to={""} className="navbar-brand">
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
                </div>
                <div className="navbar-bottom-content">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => handleClickToggle()}
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className={`navbar-collapse justify-content-center collapse ${
                      show ? "show" : ""
                    } `}
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                      <li>
                        <button
                          onClick={() => handleClickToggle()}
                          style={
                            !show ? { display: "none" } : { display: "block" }
                          }
                          className="navbar-close"
                        >
                          <h1>X</h1>
                        </button>
                      </li>
                      <li className="nav-item">
                        <Link to={""} className="nav-link">
                          Trang chủ
                        </Link>
                      </li>
                      {categories.map((e) => (
                        <li key={e.script} className="nav-item">
                          <Link to={e.script} className="nav-link">
                            {e.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="social-media ">
                  <li>
                    <Link to={"/contact"}>
                      <i
                        style={{ margin: "0 3px" }}
                        className="fab fa-facebook-f "
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>
                      <i className="fab fa-youtube " />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>
                      <i className="fab fa-twitter " />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="flash-news-banner ">
        <div className="container " style={{ padding: "8px 0" }}>
          <div className="d-lg-flex align-items-center justify-content-between ">
            <div
              style={{ width: "82%" }}
              className="d-flex align-items-center "
            >
              <span className="badge badge-dark mr-3 ">Tin nhanh</span>
              <marquee className="event d-flex" width="100%">
                {listNews.slice(5, 13).map((e) => (
                  <Link
                    style={{ marginRight: "20px", textDecoration: "none" }}
                    key={e.id}
                    to={`/news/${sliceLink(e.link)}`}
                    state={`${e.link}`}
                  >
                    {e.title}
                  </Link>
                ))}
              </marquee>
            </div>
            <div className="d-flex">
              <span className="mr-3 text-danger ">
                {listNews.length > 0
                  ? dateFormatService
                      .formatPubDate(listNews[1].pubDate)
                      .replace()
                  : ""}
              </span>
              <span className="text-danger ">,30°C,TP.HCM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
