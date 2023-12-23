import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="iRobot Roomba Combo i5+ Self-Emptying Robot Vacuum and Mop, Clean by Room with Smart Mapping, Empties Itself for Up to 60 Days, Works with Alexa, Personalized Cleaning OS, Ideal for Pet Hair"
            price={348.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71G+zzUcySL._AC_SX425_.jpg"
          />
          <Product
            id="B08B8VDK37"
            title="Stand Mixer Smoothie Maker"
            price={31}
            rating={4}
            image="https://m.media-amazon.com/images/I/7118DhChyEL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="B07YJW81TR"
            title="ASUS 2023 Vivobook Go 15 Laptop, 15.6” FHD Display, AMD Ryzen 5 7520U Processor, 8GB RAM, 512GB SSD, Windows 11 Home, Mixed Black, E1504FA-AS52"
            price={369.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71tj1W5NoQL._AC_SL1500_.jpg"
          />
          <Product
            id="B00I3LUWQA"
            title="Sony MDR-ZX310B Lifestyle Headphones Without Microphone"
            price={18}
            rating={4}
            image="https://m.media-amazon.com/images/I/51hJN2pp02L._AC_UY218_.jpg"
          />
          <Product
            id="B07VQPM3QW"
            title="Samsung Galaxy Watch Active2, Bluetooth, 44 mm, Silver"
            price={199}
            rating={4}
            image="https://m.media-amazon.com/images/I/716KKssFT6L._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="B083WYD99J"
            title="Amazon Basics Medicine Ball for Workouts Exercise Balance Training"
            price={39}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/913F0MAWv4L._AC_SL1500_.jpg"
          />
          <Product
            id="B083WYD99J"
            title="Amazon Basics Vinyl Hexagon Workout Dumbbell Hand Weight"
            price={27.61}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KfNgaDRmL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;