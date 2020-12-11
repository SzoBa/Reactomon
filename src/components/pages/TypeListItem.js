import PropTypes from "prop-types";
import "../../App.css";
import styled from "styled-components";

const ListItemCard = styled.div`
  font-family: arial;
  border: solid black 1px;
  border-radius: 15px;
  height: 80px;
  width: 250px;
  text-align: center;
  margin: 5px 0;
  background-color: rgba(255, 115, 110, 0.9);
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.9);
  }
`;

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
    color: ${(props) => {
      if (props.index % 3 === 0) {
        return "blue";
      } else if (props.index % 3 === 1) {
        return "orange";
      } else {
        return "red";
      }
    }};
  }
`;

const TypeName = styled.span`
  color: ${(props) => {
    if (props.index % 3 === 0) {
      return "cyan";
    } else if (props.index % 3 === 1) {
      return "yellow";
    } else {
      return "pink";
    }
  }};
`;

const TypeListItem = (props) => {
  const { name, url } = props.type;
  const test = url;

  return (
    <ListItemCard>
      <ListItemText name={name}>
        Type name:{" "}
        <TypeName index={props.index} name={name}>
          {name}
        </TypeName>{" "}
      </ListItemText>
      <ListItemText>
        Original detail:{" "}
        <ListItemLink index={props.index} href={test}>
          Go to page
        </ListItemLink>
      </ListItemText>
      <button>Catch</button>
    </ListItemCard>
  );
};

TypeListItem.propTypes = {
  type: PropTypes.object.isRequired,
};

export default TypeListItem;

// <ExternalLink href={test}>Go to page</ExternalLink>
