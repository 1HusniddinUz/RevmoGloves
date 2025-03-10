import React from "react";
import "./HeaderNav.css";
const HeaderNav = () => {
  return (
    <div id="HeaderNav">
      <div className="container">
        <div id="HeaderLogo">
          <h1>#RevmoGloves</h1>
        </div>
        <div id="HeaderTools">
          <ul>
            <li>
              <a href="#Header">Home</a>
            </li>
            <li>
              <a href="#MainTop">About</a>
            </li>
            <li>
              <a href="#MainBottom">Products</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
          </ul>
        </div>
        <div id="HeaderSocialLinks">
          <a href="https://t.me/revmatologiya_dr_shohida" target="_blank" rel="noopener noreferrer" >
          <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.instagram.com/dr.shohida_anvarovna/?igsh=cml4ZDd2bGY0M256" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
