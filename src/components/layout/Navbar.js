import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import styled from "styled-components";

const NavbarMain = styled.div`
  text-align: center;
`;

const NavbarTitle = styled.h1`
  color: white;
  font-size: 4em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding-left: 3%;
`;

const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding: 10px;
  font-weight: bold;
  font-size: 2em;
  border-radius: 20px;
`;

const Navbar = (props) => {
  return (
    <NavbarMain className="navBar">
      <NavbarTitle>Reactomon</NavbarTitle>
      <NavbarLinksContainer>
        <NavbarLink to="/pokemons">Pokemons</NavbarLink>
        <NavbarLink to="/types">Types</NavbarLink>
      </NavbarLinksContainer>
    </NavbarMain>
  );
};

export default Navbar;
