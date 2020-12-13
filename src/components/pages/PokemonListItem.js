import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CatchPokemonContext } from "../../contexts/CatchPokemonContext";

const ListItemCard = styled.div`
  font-family: arial;
  /* display: inline-block; */
  border: solid black 2px;
  border-radius: 20px;
  height: 100px;
  width: 175px;
  text-align: center;
  margin: 5px 0;
  padding: 10px;
  background-color: rgba(255, 115, 110, 0.9);
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 16px 16px 32px 0 rgba(0, 0, 0, 0.9);
  }
`;

const ListItemText = styled.p`
  font-size: 1em;
  margin: 1%;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const ListItemLink = styled(Link)`
  margin: 1%;
  font-size: 1em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  &:hover {
    color: palevioletred;
  }
`;

const PokemonListItem = (props) => {
  const { name, url } = props.pokemon;
  const id = url.match("/[0-9]+/").toString().replaceAll("/", "");
  const [buttonText, setButtontext] = useState("Catch");
  const [collectedPokemons, catchPokemon] = useContext(CatchPokemonContext);

  const addPokemonToContext = () => {
    if (
      collectedPokemons.filter((pokemon) => pokemon.name === props.pokemon.name)
        .length < 1
    ) {
      catchPokemon((prevPokemons) => [...prevPokemons, props.pokemon]);
      setButtontext("Catched");
    } else {
      setButtontext("Already catched!");
    }
  };

  return (
    <ListItemCard>
      <React.Fragment>
        <ListItemText>Name: {name}</ListItemText>
        <ListItemText>
          <ListItemLink to={`/pokemon/${id}`}>Details</ListItemLink>
        </ListItemText>
        {/* <ListItemText>Original url: {url}</ListItemText> */}
        {props.button ? (
          <button onClick={addPokemonToContext}>{buttonText}</button>
        ) : (
          ""
        )}
      </React.Fragment>
    </ListItemCard>
  );
};

export default PokemonListItem;

// </ListItemText><ListItemLink to={{ pathname: `/pokemon/${id}` }}>Details</ListItemLink> -
