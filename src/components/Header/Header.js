import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import {
  HeaderWrapper,
  Inner,
  Logo,
  LogoContainer,
  Nav,
  NavHamburger,
  NavHamburgerLine,
  NavItem,
} from "./HeaderStyle";

const Header = (props) => {
  let active = useLocation().pathname;
  const [ visible, setVisible ] = useState(false);

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo alt="logo" src={logo} />
        </LogoContainer>
        <NavHamburger onClick={() => setVisible(visible ? false : true)}>
          <NavHamburgerLine />
          <NavHamburgerLine />
          <NavHamburgerLine />
        </NavHamburger>
        <Nav visible={visible.toString()}>
          <NavItem
            to="/"
            active={active === "/" ? "true" : "false"}
            onClick={() => setVisible(false)}
          >
            Home
          </NavItem>
          <NavItem
            to="/events"
            active={active === "/events" ? "true" : "false"}
            onClick={() => setVisible(false)}
          >
            Events
          </NavItem>
          {props.isLoggedIn
          ? <NavItem to='/' onClick={() => props.logout()}>Logout</NavItem>
          : 
          <NavItem
            to="/login"
            active={active === "/login" ? "true" : "false"}
            onClick={() => setVisible(false)}
          >
            Login
          </NavItem>
          
          }
          {!props.isLoggedIn && <NavItem
            to="/register"
            active={active === "/register" ? "true" : "false"}
            onClick={() => setVisible(false)}
          >
            Register
          </NavItem>}
          {props.isAdmin && <NavItem
            to="/admin"
            active={active === "/admin" ? "true" : "false"}
            onClick={() => setVisible(false)}
          >
            Admin
          </NavItem>}
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
