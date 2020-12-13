import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { ColorProvider } from "./contexts/ColorContext";
import { CatchPokemonProvider } from "./contexts/CatchPokemonContext";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";
import CatchedList from "./components/pages/CatchedList";
import ThemeContext from "./contexts/ThemeContext";

import background from "./components/images/background.jpg";

const App = (props) => {
  const theme = useState("junk");

  const MainBody = styled.div`
    background: url(${background}) no-repeat fixed;
    background-size: cover;
    min-height: 100%;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    box-sizing: border-box;
  `;

  return (
    <ThemeContext.Provider value={theme}>
      <ColorProvider>
        <CatchPokemonProvider>
          <Router>
            <MainBody>
              <Navbar />
              <Route exact path="/" component={MainPage} />
              <Route path="/pokemons" component={PokemonList} />
              <Route path="/types" component={TypeList} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
              <Route path="/catched" component={CatchedList} />
            </MainBody>
          </Router>
        </CatchPokemonProvider>
      </ColorProvider>
    </ThemeContext.Provider>
  );
};

export default App;
