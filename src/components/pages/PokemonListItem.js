import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const PokemonListItem = (props) => {
  const { name, url } = props.pokemon;
  const id = url.match("/[0-9]+/").toString().replaceAll("/", "");

  return (
    <p className="listItem">
      Name: {name} - <Link to={{ pathname: `/pokemon/${id}` }}>Details</Link> -
      Original url: {url}
    </p>
  );
};

export default PokemonListItem;
