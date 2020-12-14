import { useContext } from "react";
import { Route } from "react-router-dom";
import AppTheme from "../contexts/ThemeStyle";
import { ThemeContext } from "../contexts/ThemeContext";
import MainBody from "../elements/MainBody";
import Navbar from "../components/layout/Navbar";
import MainPage from "../components/pages/MainPage";
import PokemonList from "../components/pages/PokemonList";
import TypeList from "../components/pages/TypeList";
import PokemonDetail from "../components/pages/PokemonDetail";
import CatchedList from "../components/pages/CatchedList";

const GeneralContentHandler = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <MainBody currentTheme={currentTheme}>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route path="/pokemons" component={PokemonList} />
      <Route path="/types" component={TypeList} />
      <Route path="/pokemon/:id" component={PokemonDetail} />
      <Route path="/catched" component={CatchedList} />
    </MainBody>
  );
};

export default GeneralContentHandler;
