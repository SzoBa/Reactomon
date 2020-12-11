import React from "react";
import styled from "styled-components";
import "../../App.css";

const ListItemCard = styled.div`
  font-family: arial;
  /* display: inline-block; */
  border: solid black 2px;
  border-radius: 20px;
  height: 100px;
  width: 175px;
  text-align: center;
  margin: 5px 0;
  padding: 10px;
  background-color: rgba(255, 115, 110, 0.9);
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 16px 16px 32px 0 rgba(0, 0, 0, 0.9);
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
    color: palevioletred;
  }
`;

const PokemonListItem = (props) => {
  const { name, url } = props.pokemon;
  const id = url.match("/[0-9]+/").toString().replaceAll("/", "");

  return (
    <ListItemCard>
      <React.Fragment>
        <ListItemText>Name: {name}</ListItemText>
        <ListItemText>
          <ListItemLink href={`/pokemon/${id}`}>Details</ListItemLink>
        </ListItemText>
        {/* <ListItemText>Original url: {url}</ListItemText> */}
        <button>Catch</button>
      </React.Fragment>
    </ListItemCard>
  );
};

export default PokemonListItem;

// </ListItemText><ListItemLink to={{ pathname: `/pokemon/${id}` }}>Details</ListItemLink> -

// .actor_name {
//   margin-top: 10px;
//   font-size: 0.8em;
// }
// .actor_shows {
//   font-size: 1.5em;
//   font-weight: 900;
// }
// .alive {
//   background-color: forestgreen;
// }
// .dead {
//   background-color: black;
//   color: white !important;
// }
// .no_info {
//   background-color: gold;
// }
