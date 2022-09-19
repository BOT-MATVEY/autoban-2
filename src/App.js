import ".//scss/main.scss";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import UspCards from "./components/UspCards";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Products from "./components/Products";
import EmailFormBanner from "./components/EmailFormBanner";
import Reviews from "./components/Reviews";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import PopUpRequestCall from "./components/PopUpRequestCall";
import React, { useState } from "react";

function App() {
  const catalogRef = React.createRef();
  const lizingRef = React.createRef();
  const aboutCompanyRef = React.createRef();
  const carServiceRef = React.createRef();
  const ContactsRef = React.createRef();

  const [isMenuOpend, setIsMenuOpened] = useState(false);
  const [isModelCall, setIsModelCall] = React.useState(false);

  const toggleModelCall = () => {
    setIsModelCall(!isModelCall);
  };

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpend);
  };

  return (
    <div className="App">
      {isMenuOpend && <Menu toggleMenu={toggleMenu} />}
      {isModelCall && <PopUpRequestCall toggleModelCall={toggleModelCall} />}
      <Header toggleMenu={toggleMenu} toggleModelCall={toggleModelCall} />
      <HeroPage toggleMenu={toggleMenu} toggleModelCall={toggleModelCall} />

      <div className="wrapper">
        <div className="wrapper__content">
          {/* <Test /> */}
          <UspCards />
          <Slider />
          <Banner />
          <Products />
          <EmailFormBanner />
          <Reviews id={"AboutCompanyId"} />
          <Slider id={"CarServiceId"} />
        </div>
      </div>

      <Map />
      <Footer id={"ContactsId"} toggleModelCall={toggleModelCall} />

      {console.log("catalogRef: " + catalogRef.current)}
    </div>
  );
}

export default App;
