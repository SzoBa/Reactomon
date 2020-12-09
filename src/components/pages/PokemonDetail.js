import React, { Component } from "react";
import axios from "axios";

class PokemonDetail extends Component {
  state = {
    details: [],
  };

  getDetails = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => this.setState({ details: res.data }));
  };

  render() {
    return <div></div>;
  }
}

export default PokemonDetail;
