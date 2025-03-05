import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navigation">
          <div className="nav-left">
            <div className="logo">
              <img src="logo.png" alt="" />
            </div>
          </div>
          <div className="nav-right">
            <ul className="nav-els">
              <li className="nav-el">About us</li>
              <li className="nav-el">Services</li>
              <li className="nav-el">Use Cases</li>
              <li className="nav-el">Pricing</li>
              <li className="nav-el">Blog</li>
              <li className="nav-eld">
                <button className="request-btn">Request a quote</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
