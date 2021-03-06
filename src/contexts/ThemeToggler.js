import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";
import AppTheme from "./ThemeStyle";

const ThemeTogglerButton = styled.button`
  font-size: 1em;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid grey;
  cursor: pointer;
  height: 75%;
  align-self: center;
  color: ${(props) => props.currentTheme.togglerTextColor};
  background: ${(props) => props.currentTheme.togglerTextBackgroundColor};
  &:hover {
    color: ${(props) => props.currentTheme.togglerTextColorHover};
    background: ${(props) =>
      props.currentTheme.togglerTextBackgroundColorHover};
  }
`;

const ButtonText = styled.span`
  font-weight: bold;
`;

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  function changeTheme() {
    setThemeMode(themeMode === "junk" ? "blade" : "junk");
  }

  return (
    <ThemeTogglerButton
      onClick={changeTheme}
      currentTheme={currentTheme}
      title="switch theme"
    >
      Theme: <ButtonText>{themeMode === "junk" ? "Grey" : "Blue"}</ButtonText>
    </ThemeTogglerButton>
  );
};

export default ThemeToggler;
