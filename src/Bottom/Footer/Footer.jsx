import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="Footer">
      <div id="FooterContainer">
        <div id="FooterData">
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>{"Contacts"}</h4>
              <ul>
                <li>
                  <a
                    href="tel:+998999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"Phone: +998(99)-999-99-99"}
                  </a>
                </li>
                <li>{"Manager: Shokhida Naimova"}</li>
                <li>
                  <a
                    href="https://example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"E-mail: example@gmail.com"}
                  </a>
                </li>
              </ul>
            </div>
            <div id="FooterDataSCard">
              <ul>
                <li>
                  <a
                    href="tel:+998999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"Phone: +998(99)-999-99-99"}
                  </a>
                </li>
                <li>{"Manager: Shokhida Naimova"}</li>
                <li>
                  <a
                    href="https://example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"E-mail: example@gmail.com"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>
                {"Location"}
                <a href="https://maps.google.com/maps?q=39.751372,64.453918&ll=39.751372,64.453918&z=16" target="_blank" rel="noopener noreferrer">
                  <i
                    style={{ fontSize: "1rem" }}
                    className="fa-solid fa-location-dot"
                  ></i>
                </a>
              </h4>
              <ul>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    {"Location"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="FooterDataCard">
            <div id="FooterDataSCard">
              <h4>{"About Us"}</h4>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: "All About" }} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
