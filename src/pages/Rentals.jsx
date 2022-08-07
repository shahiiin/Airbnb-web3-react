import React from "react";
import "./Rentals.css"
import { Link } from "react-router-dom";
import logo from "../images/airbnbRed.png"
import { ConnectButton } from "web3uikit";
import { useLocation } from "react-router";

const Rentals = () => {

  const { state: searchFilters } = useLocation();
  return (
    <>

      <div className="topBanner">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="searchReminder">
          <div className="filter">
            {searchFilters.destination}
          </div>
          <div className="vl" />
          <div className="filter">
            {`
           ${searchFilters.checkIn.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.checkIn.toLocaleString("default", {
             day: "2-digit",
           })} 
           - 
           ${searchFilters.checkOut.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.checkOut.toLocaleString("default", {
             day: "2-digit",
           })}
          `}
          </div>
          <div className="vl" />
          <div className="filter"></div>
          <div className="vl" />

        </div>

        <ConnectButton />
      </div>
    </>
  );
};

export default Rentals;
