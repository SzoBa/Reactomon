import PropTypes from "prop-types";
import "../../App.css";
import styled from "styled-components";

const ListItemText = styled.p`
  font-size: 1em;
  margin: 1%;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
`;

const ListItemLink = styled.a`
  margin: 1%;
  font-size: 1em;
  font-weight: bold;
  color: white;

  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  &:hover {
    color: palevioletred;
  }
`;

const TypeListItem = (props) => {
  const { name, url } = props.type;
  const test = url;

  return (
    <ListItemText>
      Type name: {name} - Original detail:{" "}
      <ListItemLink href={test}>Go to page</ListItemLink>
    </ListItemText>
  );
};

TypeListItem.propTypes = {
  type: PropTypes.object.isRequired,
};

export default TypeListItem;

// <ExternalLink href={test}>Go to page</ExternalLink>
