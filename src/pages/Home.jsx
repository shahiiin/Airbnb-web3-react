import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png"
import logo from "../images/airbnb.png"



const Home = () => {

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="tabs">
          <div className="selected">Place to Stay</div>
          <div>Experiense</div>
          <div>Online Experiense</div>
        </div>
        <div className="lrContainers">

        </div>
      </div>
    </>

  );
};

export default Home;
