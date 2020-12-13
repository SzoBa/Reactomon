import React, { useState, createContext } from "react";

export const CatchPokemonContext = createContext();

export const CatchPokemonProvider = (props) => {
  const [collectedPokemons, catchPokemon] = useState([]);

  return (
    <CatchPokemonContext.Provider value={[collectedPokemons, catchPokemon]}>
      {props.children}
    </CatchPokemonContext.Provider>
  );
};
