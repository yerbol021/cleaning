import React from "react";
import "../styles/TopNavBar.scss";
import logo from "../images/coolday.png";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="about">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
