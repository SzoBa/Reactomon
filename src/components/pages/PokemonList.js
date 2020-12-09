import React, { Component } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";
import PropTypes from "prop-types";

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }));
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <div>
        <PokemonListItem key={pokemon.toString()} pokemon={pokemon} />
      </div>
    ));
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonList;
