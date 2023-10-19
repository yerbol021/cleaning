import React from "react";
import "../styles/TopNavBar.scss";
import logo from "../images/Logo.png";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="about">About</div>
      <div className="services">services</div>
      <div className="contact">contact</div>
    </nav>
  );
};

export default TopNavBar;
