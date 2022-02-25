import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import guy from "../../assets/img/Website Hompage_Large Images(1).png";
import text from "../../assets/img/Website Homepage Text.png";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="homepage">
        <section className="homepage__section">
          <div className="homepage__section__down">
          <img src={text} alt="" className="homepage__text" />
          <button>Start</button>
          <div>
            INSTA
            FB 
            LKDN
          </div>
          </div>
           <img src={guy} alt="" className="homepage__guy" />
        </section>
      </div>
    </div>
  );
}
