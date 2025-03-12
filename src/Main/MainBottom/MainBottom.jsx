import React from "react";
import "./MainBottom.css";
import { useTranslation } from "react-i18next";

const ProductGloves = [
  {
    id: 1,
    key: `Nitril qoʻlqop`,
    image: "https://i.ibb.co/ycBn2QZs/1.jpg",
    description: "Lateksga allergiyasi bor odamlar uchun yaxshi alternativa. Kimyoviyga va teshilishga yordam beradi."
  },
  {
    id: 2,
    name: `Lateks qoʻlqop`,
    image: "https://i.ibb.co/NgTPhqM1/2.jpg",
    description: "Tabiiy kauchukdan ishlab chiqariladi. Juda moslashuvchan va qulay"

  },
  {
    id: 3,
    name: `Vinil qoʻlqop`,
    image: "https://i.ibb.co/9kz2R1wF/3.jpg",
    description: "Sintetik materialdan ishlab chiqariladi. Nisbatan arzon, lekin kamroq mustahkam"
  },
];
const MainBottom = () => {
  const { t } = useTranslation();
  return (
    <div id="MainBottom">
      <div id="MainFeature">
        <div id="FeatureContainer">
          <div id="FeatureGloves"></div>
          <div id="FeatureGlovesInfo">
            <div id="FeatureGlovesText">
              <h2>{t(`mainTopH3`)}</h2>
              <p>{t(`mainTopP1`)}</p>
              <p>{t(`mainTopP2`)}</p>
              <p>{t(`mainTopP4`)}</p>
            </div>
            <a href="/contact">
              <button>{t(`mainTopBtn`)}</button>
            </a>
          </div>
        </div>
        <div id="MainFeatureProducts">
          <h2>{t(`mainProductH1`)}</h2>

          <div id="MainProductsContainer">
            {ProductGloves.map((glove) => {
              console.log("glove.key:", glove.key);
              return (
                <div key={glove.id} id="ProductGloves">
                  <img src={glove.image} alt={glove.name} loading="lazy" />
                  <div id="GlovesText">
                    <h3>{glove.name}</h3>
                    <p>{glove.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <a href="#">
            <button>{t(`mainProductBtn`)}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
