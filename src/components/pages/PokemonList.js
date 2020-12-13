import React, { useContext } from "react";
import PokemonListItem from "./PokemonListItem";
import { useFetch } from "../../hooks/useFetch";
import styled from "styled-components";
import AppTheme from "../../contexts/ThemeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";

const PokemonListContainer = styled.div`
  display: inline-flex;
  margin: 1% 2.5%;
`;

const PokemonList = (props) => {
  const [isLoading, pokemons] = useFetch("https://pokeapi.co/api/v2/pokemon");
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  if (!isLoading) {
    return pokemons.results.map((pokemon, index) => (
      <PokemonListContainer key={index}>
        <PokemonListItem pokemon={pokemon} button={true} />
      </PokemonListContainer>
    ));
  } else {
    return (
      <div className="detailItem">
        <p>Problem occurred during loading!</p>
      </div>
    );
  }
};

export default PokemonList;
