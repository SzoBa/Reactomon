import styled from "styled-components";
import background from "../components/images/background.jpg";

export const MainBody = styled.div`
  background: url(${background}) no-repeat fixed;
  background-size: cover;
  min-height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  box-sizing: border-box;
`;

export default MainBody;
