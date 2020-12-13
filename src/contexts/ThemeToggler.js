import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const ThemeTogglerButton = styled.span``;

const ContainerDiv = styled.div`
  text-align: center;
  color: white;
`;

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div>
      <ContainerDiv
        style={{ cursor: "pointer" }}
        onClick={() => {
          setThemeMode(themeMode === "junk" ? "blade" : "junk");
        }}
      >
        <ThemeTogglerButton title="switch theme">
          {themeMode === "junk" ? "Old" : "New"}
        </ThemeTogglerButton>
      </ContainerDiv>
    </div>
  );
};

export default ThemeToggler;
