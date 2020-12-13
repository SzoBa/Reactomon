import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { ColorProvider } from "./contexts/ColorContext";
import { CatchPokemonProvider } from "./contexts/CatchPokemonContext";
import MainBody from "./elements/MainBody";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";
import CatchedList from "./components/pages/CatchedList";
import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import AppTheme from "./contexts/ThemeStyle";

const App = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeContextProvider>
      <ColorProvider>
        <CatchPokemonProvider>
          <Router>
            <MainBody currentTheme={currentTheme}>
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
    </ThemeContextProvider>
  );
};

export default App;
