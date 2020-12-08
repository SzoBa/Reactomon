import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Navbar />
            <Route path="/pokemons" component={PokemonList} />
            <Route path="/types" component={TypeList} />
            <Route path="/pokemon/:id" component={PokemonDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
