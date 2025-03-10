import React from "react";
import "./MainBottom.css";

const ProductGloves = [
  {
    id: 1,
    name: "Nitrile Gloves",
    description:
      "Lateksga allergiyasi bor odamlar uchun yaxshi alternativa. Kimyoviyga va teshilishga yordam beradi.",
    image:
      `https://i.ibb.co/ycBn2QZs/1.jpg`,
  },
  {
    id: 2,
    name: "Latex Gloves",
    description:
      "Tabiiy kauchukdan ishlab chiqariladi. Juda moslashuvchan va qulay",
    image:
      "https://i.ibb.co/NgTPhqM1/2.jpg ",
  },
  {
    id: 3,
    name: "Vinyl Gloves",
    description:
      "Sintetik materialdan ishlab chiqariladi. Nisbatan arzon, lekin kamroq mustahkam",
    image:
      "https://i.ibb.co/9kz2R1wF/3.jpg",
  },
];
const MainBottom = () => {
  return (
    <div id="MainBottom">
      <div id="MainFeature">
        <div id="FeatureContainer">
          <div id="FeatureGloves"></div>
          <div id="FeatureGlovesInfo">
            <div id="FeatureGlovesText">
              <h2>Ish uchun to'g'ri ish qo'lqoplarini tanlang</h2>
              <p>
              Muayyan ish muhitingiz uchun mos qo'lqoplardan foydalanish muhimligini sizga aytishimiz shart emas. Biz ularni himoya qilish imkon qadar oson ekanligiga ishonch hosil qilamiz. Rezina qo'lqoplar tanlovimizni ko'rib chiqing va bir necha marta bosish orqali buyurtmangizni sizga yuboring. Bu yerda bizning veb-saytimizda siz kimyo darsisiz yoki kichik bosma nashrlarsiz o‘zingizga kerak bo‘lgan barcha xavfsizlik va foydalanish ma’lumotlarini olishingiz mumkin – aniq nima kerakligini bilasizmi yoki biror yo‘nalishdan foydalanishingiz mumkinmi, biz yordam berishga tayyormiz.
              </p>
              <p>
              Sizga nitril qo'lqoplar yoki lateks qo'lqoplar, changsiz yoki suv o'tkazmaydigan qo'lqoplar yoki mahkam o'rinli yoki qo'shimcha tutqich kerak bo'ladimi, Gloves.com saytida to'g'ri juftlikni topishingiz mumkin. Bizda faqat sinovdan o'tgan, yaxshi sifatli rezina qo'lqoplar mavjud bo'lib, ular ish paytida yirtilmaydi yoki teshilmaydi va ishingiz tugaguniga qadar qo'llaringizni toza va himoyalangan holda saqlaydi. Ehtimol, siz nitril bilan allergik reaktsiyalarning oldini olishingiz kerak yoki neopren bilan kimyoviy moddalardan himoya qilishingiz kerak - bizda sizning jamoangizdagi har bir kishiga mos keladigan o'lchamdagi bir martalik ish qo'lqoplari mavjud.
              </p>
              <p>
              Yordam kerakmi yoki butun jamoa uchun ulgurji buyurtma berishga tayyormisiz? <u>Biz bilan bog'laning</u> va biz sizga bugun yordam beramiz!
              </p>
            </div>
            <a href="/contact">
              <button>HARID QILISH</button>
            </a>
          </div>
        </div>
        <div id="MainFeatureProducts">
          <h2>Bizning mahsulotlarimizga qarang</h2>

          <div id="MainProductsContainer">
            {ProductGloves.map((item) => (
              <div key={item.id} id="ProductGloves">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div id="GlovesText">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#">
            <button>MAHSULOTLAR KATALOGI</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
