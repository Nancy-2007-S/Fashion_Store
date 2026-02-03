import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = ({ setToken }) => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <Link to={"/"}>
          <img className="navbar-logo" src={assets.logo} alt="Trendify" />
        </Link>
        <button
          onClick={() => setToken("")}
          className="navbar-logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
