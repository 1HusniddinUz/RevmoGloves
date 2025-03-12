import React from "react";
import "./Main.css"
import "../../responsives/Main/MainRes.css"
import MainTop from "../MainTop/MainTop";
import MainBottom from "../MainBottom/MainBottom";

const Main = () => {
  return (
    <main>
      <MainTop />
      <MainBottom />
    </main>
  );
};

export default Main;
