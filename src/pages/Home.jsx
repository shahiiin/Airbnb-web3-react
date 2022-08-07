import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png"
import logo from "../images/airbnb.png"
import { ConnectButton, Select, DatePicker } from "web3uikit";


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
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York"
                },

                {
                  id: "lon",
                  label: "London"
                },
                {
                  id: "db",
                  label: "Dubai"
                },
                {
                  id: "la",
                  label: "Los angles"
                },
              ]}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="checkIn"
              onChange={(event)=>console.log(event.checkIn)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="checkOut"
              onChange={(event)=>console.log(event.checkOut)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Gests
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;
