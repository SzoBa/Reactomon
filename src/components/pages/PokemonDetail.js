import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import SimpleItem from "./SimpleItem";

const PokemonDetail = (props) => {
  const [id, setId] = useState(null);
  if (id === null) {
    setId(props.match.params.id);
  }

  const [isLoading, details] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (!isLoading) {
    return Object.entries(details).map(([key, value], index) => (
      <div className="detailItem" key={key}>
        <React.Fragment>
          {typeof value === "number" ||
          typeof value === "string" ||
          typeof value === "boolean" ? (
            <SimpleItem attribute={key} simpleData={value} />
          ) : (
            ""
            /*<DetailItem attribute={key} detailData={value} />*/
          )}
        </React.Fragment>
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

export default PokemonDetail;
