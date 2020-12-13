import React, { useContext } from "react";
import styled from "styled-components";
import PokemonListItem from "./PokemonListItem";
import { CatchPokemonContext } from "../../contexts/CatchPokemonContext";

const CatchedListContainer = styled.div`
  display: inline-flex;
  margin: 1% 2.5%;
`;

const CatchedList = (props) => {
  const collectedPokemons = useContext(CatchPokemonContext)[0];

  return collectedPokemons.map((pokemon, index) => (
    <CatchedListContainer key={index}>
      <PokemonListItem pokemon={pokemon} button={false} />
    </CatchedListContainer>
  ));
};

export default CatchedList;
