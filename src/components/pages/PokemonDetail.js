import React, { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import SimpleItem from "./SimpleItem";
import styled from "styled-components";
import { ColorContext } from "../../contexts/ColorContext";
import { CatchPokemonContext } from "../../contexts/CatchPokemonContext";
import AppTheme from "../../contexts/ThemeStyle";
import ThemeContext from "../../contexts/ThemeContext";

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailsCard = styled.div`
  font-family: arial;
  /* display: inline-block; */
  border: solid black 2px;
  border-radius: 20px;
  height: 375px;
  width: 500px;
  text-align: center;
  margin: 15px 0;
  padding: 10px;
  background-color: rgba(255, 115, 110, 0.9);
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 16px 16px 32px 0 rgba(0, 0, 0, 0.9);
    background-color: white;
    transition: 1s;
  }
`;

const PokemonDetail = (props) => {
  const [id, setId] = useState(null);
  if (id === null) {
    setId(props.match.params.id);
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [isLoading, details] = useFetch(url);

  //if we pass a data to the provider, we can access it
  const setFontColor = useContext(ColorContext)[1];

  const [buttonText, setButtontext] = useState("Catch");
  const [collectedPokemons, catchPokemon] = useContext(CatchPokemonContext);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const addPokemonToContext = () => {
    if (
      collectedPokemons.filter((pokemon) => pokemon.name === details.name)
        .length < 1
    ) {
      catchPokemon((prevPokemons) => [
        ...prevPokemons,
        { name: details.name, url: url + "/" },
      ]);
      setButtontext("Catched");
    } else {
      setButtontext("Already catched!");
    }
  };

  if (!isLoading) {
    return (
      <DetailsContainer>
        <React.Fragment>
          <DetailsCard
            key={id}
            onMouseEnter={() => {
              setFontColor((prevColor) => "rgba(255, 115, 110, 0.9)");
            }}
            onMouseLeave={() => {
              setFontColor((prevColor) => "white");
            }}
          >
            {Object.entries(details).map(([key, value], index) =>
              typeof value === "number" ||
              typeof value === "string" ||
              typeof value === "boolean" ? (
                <SimpleItem key={key} attribute={key} simpleData={value} />
              ) : (
                ""
                /*<DetailItem attribute={key} detailData={value} />*/
              )
            )}
            <button onClick={addPokemonToContext}>{buttonText}</button>
          </DetailsCard>
        </React.Fragment>
      </DetailsContainer>
    );
  } else {
    return (
      <div className="detailItem">
        <p>Problem occurred during loading!</p>
      </div>
    );
  }
};

export default PokemonDetail;
