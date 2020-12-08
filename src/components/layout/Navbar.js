import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <h1>Reactomon</h1>
        <div className="links">
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/types">Types</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
