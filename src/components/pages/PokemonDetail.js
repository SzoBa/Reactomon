import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import DetailItem from "./DetailItem";
import SimpleItem from "./SimpleItem";

class PokemonDetail extends Component {
  state = {
    id: [],
    details: [],
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then((res) => this.setState({ details: res.data }));
    });
  }

  render() {
    return Object.entries(this.state.details).map(([key, value], index) => (
      <div className="detailItem" key={key}>
        <p>
          {key}:
          <React.Fragment key={key}>
            {key === "abilities"}
            {typeof value === "number" ||
            typeof value === "string" ||
            typeof value === "boolean" ? (
              <SimpleItem simpleData={value} />
            ) : (
              <DetailItem detailData={value} />
            )}
          </React.Fragment>
        </p>
      </div>
    ));
  }
}

PokemonDetail.propTypes = {
  simpleData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  detailData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PokemonDetail;
