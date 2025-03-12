import React, { useState, useEffect } from "react";
import "./HeaderNav.css";
import "./Burger.css"
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderNav = ({ changeLang }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Scrollni bloklash
    } else {
      document.body.style.overflow = "auto"; // Scrollni tiklash
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  return (
    <div id="HeaderNav">
      <div className="container">
        <div id="HeaderLogo">
          <a href="/">
            <img
              src="https://i.ibb.co/Ld43pF77/image-removebg-preview-4.png"
              alt="CompanyLogo"
              style={{ height: "45px" }}
            />
          </a>
        </div>
        {/* Menyu */}
        <div id="HeaderTools" className={menuOpen ? "open" : ""}>
         <div id="MainNav">
           <ul>
            <li>
              <a href="#Header" onClick={closeMenu}>{t("home")}</a>
            </li>
            <li>
              <a href="#MainBottom" onClick={closeMenu}>{t("about")}</a>
            </li>
            <li>
              <a href="#MainFeatureProducts" onClick={closeMenu}>{t("products")}</a>
            </li>
            <li>
              <a href="#Footer" onClick={closeMenu}>{t("contact")}</a>
            </li>
          </ul>

          {/* Social Links */}
          <div id="HeaderSocialLinks">
            <a href="https://t.me/revmatologiya_dr_shohida" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://www.instagram.com/dr.shohida_anvarovna/?igsh=cml4ZDd2bGY0M256" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* Language Selector */}
          <select id="select" onChange={changeLangHandler} defaultValue="en">
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
         </div>
        </div>
         {/* Hamburger Icon */}
         <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
