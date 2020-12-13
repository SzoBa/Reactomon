import { useFetch } from "../../hooks/useFetch";
import TypeListItem from "./TypeListItem";
import styled from "styled-components";

const TypeListContainer = styled.div`
  display: inline-flex;
  margin: 1% 2%;
`;

const TypeList = (props) => {
  const [isLoading, types] = useFetch("https://pokeapi.co/api/v2/type");

  if (!isLoading) {
    return types.results.map((type, index) => (
      <TypeListContainer key={index}>
        <TypeListItem type={type} index={index} />
      </TypeListContainer>
    ));
  } else {
    return (
      <div className="detailItem">
        <p>Problem occurred during loading!</p>
      </div>
    );
  }
};

export default TypeList;
