import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <span style={{ textAlign: "center" }}>
        Made with{" "}
        <img
          src="https://i.ibb.co/kJWh08Y/heart.png"
          alt="heart"
          border="0"
          width="20px"
        />{" "}
        in <span style={{ postion: "relative", left: "20px" }}>India</span>
      </span>
    </div>
  );
};

export default FooterBottom;
