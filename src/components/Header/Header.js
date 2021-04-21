import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Inner">
        <Link to="/" className="Header-LogoContainer">
          <img alt="logo" src={logo} className="Header-Logo" />
        </Link>
        <div className="Header-NavHamburger">
          <div className="Header-NavHamburgerLine"></div>
          <div className="Header-NavHamburgerLine"></div>
          <div className="Header-NavHamburgerLine"></div>
        </div>
        <nav className="Header-Nav">
          <Link to="/" className="Header-NavItem">
            Home
          </Link>
          <Link to="/events" className="Header-NavItem">
            Events
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
