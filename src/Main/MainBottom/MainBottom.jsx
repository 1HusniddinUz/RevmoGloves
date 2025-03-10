import React from "react";
import "./MainBottom.css";

const ProductGloves = [
  {
    id: 1,
    name: "Nitrile Gloves",
    description:
      "Lateksga allergiyasi bor odamlar uchun yaxshi alternativa. Kimyoviy moddalarga va teshilishga chidamli.",
    image:
      "https://www.gloves.com/cdn/shop/articles/pesticide_gloves.webp?v=1734468091&width=426",
  },
  {
    id: 2,
    name: "Latex Gloves",
    description:
      "Tabiiy kauchukdan ishlab chiqariladi. Juda moslashuvchan va qulay",
    image:
      "https://www.gloves.com/cdn/shop/articles/latex_gloves.webp?v=1734442824&width=426",
  },
  {
    id: 3,
    name: "Vinyl Gloves",
    description:
      "Sintetik materialdan ishlab chiqariladi. Nisbatan arzon, lekin kamroq mustahkam",
    image:
      "https://www.gloves.com/cdn/shop/articles/best_glove_for_oil.webp?v=1732624888&width=426",
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
              <h2>Choose the right work gloves for the job</h2>
              <p>
                We don’t need to tell you that using the appropriate gloves for
                your specific work environment is critical. We simply make sure
                that securing them is as easy as possible. Browse our selection
                of rubber gloves and get your order sent to you in just a couple
                of clicks. Here on our website, you can get all the safety and
                use information you need without the chemistry lesson or small
                print - whether you know exactly what you need or if you could
                use some direction, we’re here to help.
              </p>
              <p>
                No matter whether you need nitrile gloves or latex gloves,
                powder free or waterproof, or a snug fit or extra grip, you can
                find the right pair at Gloves.com. We only stock tested, good
                quality rubber gloves that are made of material that won’t tear
                or puncture when you’re on the job, and will keep your hands
                clean and protected until your work is done. Perhaps you need to
                prevent allergic reactions with nitrile, or you need to protect
                from chemicals with neoprene - we’ve got disposable work gloves
                in sizes that fit every person on your team.
              </p>
              <p>
                Need help or ready to place a wholesale order for the whole
                team? <u>Get in touch with us</u> and we’ll help you out today!
              </p>
            </div>
            <a href="/contact">
              <button>SHOP NOW</button>
            </a>
          </div>
        </div>
        <div id="MainFeatureProducts">
          <h2>See Our Resources</h2>

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
            <button>VISIT THE BLOG</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
