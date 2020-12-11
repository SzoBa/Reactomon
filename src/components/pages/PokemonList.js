import React from "react";
import PokemonListItem from "./PokemonListItem";
import { useFetch } from "../../hooks/useFetch";

const PokemonList = (props) => {
  const [isLoading, pokemons] = useFetch("https://pokeapi.co/api/v2/pokemon");

  if (!isLoading) {
    return pokemons.results.map((pokemon, index) => (
      <div key={index}>
        <PokemonListItem pokemon={pokemon} />
      </div>
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
