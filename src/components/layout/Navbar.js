import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import AppTheme from "../../contexts/ThemeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeToggler from "../../contexts/ThemeToggler";

const NavbarMain = styled.div`
  text-align: center;
`;

const NavbarTitle = styled.h1`
  color: ${(props) => props.currentTheme.textColor};
  font-size: 4em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding-left: 3%;
`;

const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
`;

const NavbarLink = styled(Link)`
  color: ${(props) => props.currenttheme.textColor};
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding: 10px;
  font-weight: bold;
  font-size: 2em;
  border-radius: 20px;
  visibility: ${(props) =>
    useLocation().pathname === props.to ? "hidden" : ""};
  &:hover {
    color: ${(props) => props.currenttheme.textColorOnHover};
  }
`;

const Navbar = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <NavbarMain className="navBar">
      <NavbarTitle currentTheme={currentTheme}>Reactomon</NavbarTitle>
      <NavbarLinksContainer>
        <React.Fragment>
          <NavbarLink currenttheme={currentTheme} to="/">
            Main Page
          </NavbarLink>
          <NavbarLink currenttheme={currentTheme} to="/pokemons">
            Pokemons
          </NavbarLink>
          <NavbarLink currenttheme={currentTheme} to="/types">
            Types
          </NavbarLink>
          <NavbarLink currenttheme={currentTheme} to="/catched">
            Catched
          </NavbarLink>
          <NavbarLink currenttheme={currentTheme} to="/#">
            About
          </NavbarLink>
          <ThemeToggler></ThemeToggler>
        </React.Fragment>
      </NavbarLinksContainer>
    </NavbarMain>
  );
};

export default Navbar;
