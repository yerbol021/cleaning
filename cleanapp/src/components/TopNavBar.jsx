import React from "react";
import "../styles/TopNavBar.scss";
import logo from "../images/coolday.png";

const TopNavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="brand-name">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </a>
      <button className="bars3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
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
