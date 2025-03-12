import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav"
import HeaderMain from "../HeaderMain/HeaderMain"
import "./Header.css"
import "../../responsives/Top/TopRes.css"
const Header = ({changeLang}) => {
  return (
    <header id="Header">
      <HeaderNav changeLang = {changeLang} />
      <HeaderMain changeLang = {changeLang} />
    </header>
  );
};

export default Header;
