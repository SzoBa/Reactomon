import React from "react";
import { useFetch } from "../../hooks/useFetch";
import TypeListItem from "./TypeListItem";

const TypeList = (props) => {
  const [isLoading, types] = useFetch("https://pokeapi.co/api/v2/type");

  if (!isLoading) {
    return types.results.map((type, index) => (
      <div key={index}>
        <TypeListItem type={type} />
      </div>
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
