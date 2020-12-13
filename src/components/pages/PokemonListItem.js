import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CatchPokemonContext } from "../../contexts/CatchPokemonContext";
import AppTheme from "../../contexts/ThemeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";

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
  background-color: ${(props) => props.currentTheme.cardBackgroundColor};
  opacity: 0.9;
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

const CatchButton = styled.button`
  padding: 3px;
  border-radius: 10px;
  font-weight: bold;
`;

const PokemonListItem = (props) => {
  const { name, url } = props.pokemon;
  const id = url.match("/[0-9]+/").toString().replaceAll("/", "");
  const [buttonText, setButtontext] = useState("Catch");
  const [collectedPokemons, catchPokemon] = useContext(CatchPokemonContext);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

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
    <ListItemCard currentTheme={currentTheme}>
      <React.Fragment>
        <ListItemText>Name: {name}</ListItemText>
        <ListItemText>
          <ListItemLink to={`/pokemon/${id}`}>Details</ListItemLink>
        </ListItemText>
        {/* <ListItemText>Original url: {url}</ListItemText> */}
        {props.button ? (
          <CatchButton onClick={addPokemonToContext}>{buttonText}</CatchButton>
        ) : (
          ""
        )}
      </React.Fragment>
    </ListItemCard>
  );
};

export default PokemonListItem;

// </ListItemText><ListItemLink to={{ pathname: `/pokemon/${id}` }}>Details</ListItemLink> -
