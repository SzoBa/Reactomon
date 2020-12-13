import styled from "styled-components";
import "../../App.css";
import ThemeToggler from "../../contexts/ThemeToggler";

const MainPageH1 = styled.h1`
  margin-top: 3%;
  font-size: 4em;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const MainPageText = styled.p`
  font-size: 2em;
  margin-top: 3%;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const MainPage = (props) => {
  return (
    <div>
      <MainPageH1>This is the Main Page</MainPageH1>
      <MainPageText>
        Choose from the links above to navigate to the desired page
      </MainPageText>
      <ThemeToggler></ThemeToggler>
    </div>
  );
};

export default MainPage;
