import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="card p-5">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="title text-center">Liên hệ với chúng tôi</h2>
              <div
                id="gmap"
                style={{ height: "576px" }}
                className="contact-map"
              >
                <iframe
                  style={{width:"100%",height:"100%"}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.712361376101!2d106.70258971376882!3d10.833310261105924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752861eee9ea25%3A0x8e5255a240ead1f2!2zMTg2IELDrG5oIEzhu6NpLCBQaMaw4budbmcgMTMsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1662191235892!5m2!1svi!2s"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div style={{position:"relative"}} className="contact-info">
                <h2 className="title text-center">Thông tin liên lạc</h2>
                <address style={{marginLeft:"2em",marginTop:"2em"}}>
                  <p>Nguyễn Hữu Cảnh</p>
                  <p>186 Bình Lợi,Bình Thạnh</p>
                  <p>TP Hồ Chí Minh - Việt Nam</p>
                  <p>Số điện thoại: +84 969948178</p>
                  <p>
                    Github:{" "}
                    <a
                      style={{ color: "blue" }}
                      href="https://github.com/canhhuu0511"
                    >
                      https://github.com/canhhuu0511
                    </a>
                  </p>
                  <p>Email: ngcanh0511@gmail.com</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
