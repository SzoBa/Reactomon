import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";

const ListItemText = styled.p`
  font-size: 1em;
  margin: 1%;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const ListItemLink = styled.a`
  margin: 1%;
  font-size: 1em;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const PokemonListItem = (props) => {
  const { name, url } = props.pokemon;
  const id = url.match("/[0-9]+/").toString().replaceAll("/", "");

  return (
    <ListItemText>
      Name: {name} -{" "}
      <ListItemLink to={{ pathname: `/pokemon/${id}` }}>Details</ListItemLink> -
      Original url: {url}
    </ListItemText>
  );
};

export default PokemonListItem;
