import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export class Navbar extends Component {
  render() {
    return (
      <navbar textAlign="center">
        <h1>Reactomon</h1>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/types">Types</Link>
      </navbar>
    );
  }
}

export default Navbar;
