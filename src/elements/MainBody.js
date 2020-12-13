import styled from "styled-components";

export const MainBody = styled.div`
  background: url(${(props) => props.currentTheme.backgroundImage}) no-repeat
    fixed;
  color: ${(props) => props.currentTheme.textColor};
  background-size: cover;
  min-height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  box-sizing: border-box;
`;

export default MainBody;
