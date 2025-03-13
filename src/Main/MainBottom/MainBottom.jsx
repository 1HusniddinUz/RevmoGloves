import React from "react";
import "./MainBottom.css";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Autoplay } from "swiper/modules";

const ProductGloves = [
  { id: 1, name: "Nitril qoʻlqop", image: "https://i.ibb.co/4nb9rB8T/gloves.jpg" },
  {
    id: 2,
    name: "Гидрокортизон",
    image: "https://ae04.alicdn.com/kf/Sc2069f92f1124d84b8a083c5c36da9820.jpg_640x640.jpg",
  },
  { id: 3, name: "Vinil qoʻlqop", image: "https://img.joomcdn.net/ec7f4e526900efd741c50c1250fe872d6fa9bb96_original.jpeg" },
  { id: 4, name: "Lateks qoʻlqop", image: "https://ae04.alicdn.com/kf/Sf9bdf1ac5cf84f7686fc292604683c8az.jpg" },
  { id: 5, name: "Tibbiy qoʻlqop", image: "https://ae04.alicdn.com/kf/S3973f7b540384a91997bd817c574188eS.jpg_640x640.jpg" },
  { id: 6, name: "Nitril qoʻlqop", image: "https://ae04.alicdn.com/kf/HTB1G1DgT4TpK1RjSZR0q6zEwXXab.jpg" },
  { id: 7, name: "Qoplamali qoʻlqop", image: "https://i.ebayimg.com/thumbs/images/g/4DoAAOSwY-1mvNno/s-l1200.jpg" },
  { id: 8, name: "Ishchi qoʻlqop", image: "https://i.ibb.co/sJQhC49V/gloves2.jpg" },
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
              <h2>{t("mainTopH3")}</h2>
              <p>{t("mainTopP1")}</p>
            </div>
          </div>
        </div>

        {/* Karuselni o'zgartirildi, width qisqartirildi */}
        <div className="gloves-carousel" style={{ maxWidth: "80%", margin: "40px auto" }}>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        modules={[Autoplay, Pagination]}
      >
        {ProductGloves.map((glove) => (
          <SwiperSlide key={glove.id}>
            <img
              src={glove.image}
              alt={glove.name}
              className="carousel-image"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </div>
  );
};

export default MainBottom;
