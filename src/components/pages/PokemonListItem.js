import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../App.css";

class PokemonListItem extends Component {
  render() {
    const { name, url } = this.props.pokemon;
    const id = url.match("/[0-9]+/").toString().replaceAll("/", "");

    return (
      <p className="listItem">
        Name: {name} - <Link to={{ pathname: `/pokemon/${id}` }}>Details</Link>{" "}
        - Original url: {url}
      </p>
    );
  }
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonListItem;
