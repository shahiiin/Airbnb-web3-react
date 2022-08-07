import React from "react";
import "./Rentals.css"
import { Link } from "react-router-dom";
import logo from "../images/airbnbRed.png"
import { ConnectButton, Icon } from "web3uikit";
import { useLocation } from "react-router";

const Rentals = () => {

  const { state: searchFilters } = useLocation();
  const rentalsList = [
    [
      {
        attributes: {
          city: "New York",
          unoDescription: "3 Guests • 2 Beds • 2 Rooms",
          dosDescription: "Wifi • Kitchen • Living Area",
          imgUrl:
            "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
          lat: "40.716862",
          long: "-73.999005",
          name: "Apartment in China Town",
          pricePerDay: "3",
        },
      },
    ]
  ]
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
          <div className="filter">
            {searchFilters.guests}Guests
          </div>
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>

        </div>

        <ConnectButton />
      </div>
      <hr className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stay Available for your Destinations
        </div>
        <div className="rentalsContentR">
        </div>
      </div>
    </>
  );
};

export default Rentals;
