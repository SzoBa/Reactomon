import React, { Component } from "react";
import axios from "axios";

class TypeList extends Component {
  state = {
    types: [],
  };

  getTypes = () => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data }));
  };

  render() {
    return <div></div>;
  }
}

export default TypeList;
