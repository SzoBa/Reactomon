import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";
import { ThemeProvider, css } from "styled-components";
import MainBody from "./elements/MainBody";

const theme = {
  primary: "junk",
  secondary: "blade",
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainBody>
          <Navbar />
          <Route exact path="/" component={MainPage} />
          <Route path="/pokemons" component={PokemonList} />
          <Route path="/types" component={TypeList} />
          <Route path="/pokemon/:id" component={PokemonDetail} />
        </MainBody>
      </Router>
    </ThemeProvider>
  );
};

export default App;
