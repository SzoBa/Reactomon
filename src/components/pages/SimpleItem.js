import styled from "styled-components";

const SimpleAttributeText = styled.p`
  font-size: 1.2em;
  margin: 2%;
  color: ${(props) => props.color};
  transition: 1s;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const AttributeName = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const SimpleItem = (props) => {
  return (
    <div className="simpleData">
      <SimpleAttributeText color={props.color}>
        <AttributeName color={props.color}>
          {props.attribute + ": "}
        </AttributeName>
        {props.simpleData.toString()}
      </SimpleAttributeText>
    </div>
  );
};

export default SimpleItem;
