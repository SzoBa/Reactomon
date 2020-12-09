import React, { Component } from "react";
import TypeListItem from "./TypeListItem";
import PropTypes from "prop-types";
import axios from "axios";

class TypeList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return this.state.types.map((type) => (
      <div>
        <TypeListItem key={type.toString()} type={type} />
      </div>
    ));
  }
}

TypeList.propTypes = {
  types: PropTypes.array,
};

export default TypeList;
