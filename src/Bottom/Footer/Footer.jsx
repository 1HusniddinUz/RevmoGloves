import React from "react";
import "./Footer.css";
import "../../responsives/Bottom/BottomRes.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="Footer">
      <div id="FooterContainer">
        <div id="FooterData">
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>{t(`footerH31`)}</h4>
              <ul>
                <li>
                  <a
                    href="tel:+998906371001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`footerPhone`)} +998(90)-637-10-01
                  </a>
                </li>
                <li>{t(`footerPosition`)} Shokhida Naimova</li>
                <li>
                  <a
                    href="https://naimova-90@mail.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`footerEmail`)}: naimova-90@mail.ru
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4 style={{textAlign: "center"}}>
                {t(`footerH32`)}    
                <a
                  href="https://maps.google.com/maps?q=39.751372,64.453918&ll=39.751372,64.453918&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    style={{ fontSize: "1rem" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                </a>
              </h4>
              <p style={{color: "white" , fontSize: "0.8rem" , textAlign: "center" , marginBottom: "10px"}}>Бухоро халқлар дўстлиги мфй саноатчилар кўчаси 2-уй</p>
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=39.751372,64.453918&hl=es&z=16&output=embed"
                width="100%"
                height="450"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* <div id="FooterDataCard">
            <div id="FooterDataSCard">
              
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
