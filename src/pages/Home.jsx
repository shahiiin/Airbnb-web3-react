import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png"
import logo from "../images/airbnb.png"
import { ConnectButton, Select, DatePicker, Input, Icon } from "web3uikit";


const Home = () => {

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

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
              onChange={(data) => setDestination(data.label)}
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
              onChange={(event) => setCheckIn(event.checkIn)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="checkOut"
              onChange={(event) => setCheckOut(event.checkOut)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Gests
            <Input
              name="AddGests"
              value={2}
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
          }}
          >
            <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
            </div>
          </Link>

        </div>
      </div>
    </>

  );
};

export default Home;
