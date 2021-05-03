import styled from "styled-components";
import { colors, breakpoints, transitionEase } from "../../lib/style/theme";
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: ${colors.white};
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Inner = styled.div`
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 15px 25px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 15px 0;
    max-width: 993px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;

export const LogoContainer = styled(Link)`
  display: block;
  width: 50px;

  @media screen and (${breakpoints.desktopLarge}) {
    width: 60px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Nav = styled.nav`

  @media screen and (${breakpoints.notDesktop}) {
    display: ${(props) => props.visible === "true" ? "flex" : "none"};
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: ${colors.white};
  }

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const NavHamburger = styled.div`
  width: 25px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const NavHamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 100px;
  background-color: ${colors.darkGrey};
  margin-bottom: 6px;
`;

export const NavItem = styled(NavLink)`
  &:last-child {
    margin-bottom: 0;
  }

  height: 50px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.active === "true" ? colors.red : colors.black)};
  &:hover {
    color: ${colors.red};
  }

  @media screen and (${breakpoints.desktop}) {
    display: inline-block;
    margin: 15px 0;
    margin-right: 60px;
    transition: ${transitionEase};

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and ($desktopLarge) {
    font-size: 18px;
  }
`;
