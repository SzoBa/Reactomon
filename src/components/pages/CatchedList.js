import React, { useContext } from "react";
import styled from "styled-components";
import { CatchPokemonContext } from "../../CatchPokemonContext";
import PokemonListItem from "./PokemonListItem";

const CatchedListContainer = styled.div`
  display: inline-flex;
  margin: 1% 2.5%;
`;

const CatchedList = (props) => {
  const [collectedPokemons, catchPokemon] = useContext(CatchPokemonContext);

  return collectedPokemons.map((pokemon, index) => (
    <CatchedListContainer key={index}>
      <PokemonListItem pokemon={pokemon} button={false} />
    </CatchedListContainer>
  ));
};

export default CatchedList;
