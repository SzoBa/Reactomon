import React, { Component } from "react";
import axios from "axios";

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data }));
  };

  render() {
    return <div></div>;
  }
}

export default PokemonList;
