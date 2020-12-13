import React, { useContext } from "react";
import styled from "styled-components";
import AppTheme from "../../contexts/ThemeStyle";
import { ThemeContext } from "../../contexts/ThemeContext";

const MainPageH1 = styled.h1`
  margin-top: 3%;
  font-size: 4em;
  color: ${(props) => props.currentTheme.textColor};
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const MainPageText = styled.p`
  font-size: 2em;
  margin-top: 3%;
  color: ${(props) => props.currentTheme.textColor};
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const MainPage = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div>
      <MainPageH1 currentTheme={currentTheme}>This is the Main Page</MainPageH1>
      <MainPageText currentTheme={currentTheme}>
        Choose from the links above to navigate to the desired page
      </MainPageText>
    </div>
  );
};

export default MainPage;
