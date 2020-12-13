import React, { useContext } from "react";
import styled from "styled-components";
import PokemonListItem from "./PokemonListItem";
import { CatchPokemonContext } from "../../contexts/CatchPokemonContext";
import AppTheme from "../../contexts/ThemeStyle";
import ThemeContext from "../../contexts/ThemeContext";

const CatchedListContainer = styled.div`
  display: inline-flex;
  margin: 1% 2.5%;
`;

const CatchedList = (props) => {
  const collectedPokemons = useContext(CatchPokemonContext)[0];
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return collectedPokemons.map((pokemon, index) => (
    <CatchedListContainer key={index}>
      <PokemonListItem pokemon={pokemon} button={false} />
    </CatchedListContainer>
  ));
};

export default CatchedList;
