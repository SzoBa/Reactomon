import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const ThemeTogglerButton = styled.button`
  cursor: pointer;
`;

const ContainerDiv = styled.div`
  text-align: center;
`;

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  function changeTheme() {
    setThemeMode(themeMode === "junk" ? "blade" : "junk");
  }

  return (
    <div>
      <ContainerDiv>
        <ThemeTogglerButton onClick={changeTheme} title="switch theme">
          {themeMode === "junk" ? "Fancy" : "Retro"}
        </ThemeTogglerButton>
      </ContainerDiv>
    </div>
  );
};

export default ThemeToggler;
