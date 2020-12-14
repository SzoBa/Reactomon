import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ColorProvider } from "./contexts/ColorContext";
import { CatchPokemonProvider } from "./contexts/CatchPokemonContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import GeneralContentHandler from "./elements/GeneralContentHandler";

const App = (props) => {
  return (
    <ThemeContextProvider>
      <ColorProvider>
        <CatchPokemonProvider>
          <Router>
            <GeneralContentHandler />
          </Router>
        </CatchPokemonProvider>
      </ColorProvider>
    </ThemeContextProvider>
  );
};

export default App;
