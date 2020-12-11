import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/pages/MainPage";
import PokemonList from "./components/pages/PokemonList";
import TypeList from "./components/pages/TypeList";
import PokemonDetail from "./components/pages/PokemonDetail";

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Route exact path="/" component={MainPage} />
          <Route path="/pokemons" component={PokemonList} />
          <Route path="/types" component={TypeList} />
          <Route path="/pokemon/:id" component={PokemonDetail} />
        </div>
      </div>
    </Router>
  );
};

export default App;
