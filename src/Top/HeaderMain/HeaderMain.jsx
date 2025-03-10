import React from "react";
import "./HeaderMain.css"
import HeaderBg from "../../media/HeaderBg.mp4"

const HeaderMain = () => {
  return (
    <div id="HeaderMain">
      <video src={HeaderBg} autoPlay loop muted ></video>
      <div id="HeaderContent">
        <h1><span>RevmoGloves</span> <br />  Biz bilan erkin harakatlaning
        </h1>
      </div>
      <div id="HeaderMain_Overlay"></div>
    </div>
  );
};

export default HeaderMain;
