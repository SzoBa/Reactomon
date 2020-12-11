import styled from "styled-components";

const SimpleAttributeText = styled.p`
  font-size: 1em;
  margin: 1%;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const SimpleItem = (props) => {
  return (
    <div className="simpleData">
      <SimpleAttributeText>
        {props.attribute + ": " + props.simpleData.toString()}
      </SimpleAttributeText>
    </div>
  );
};

export default SimpleItem;
