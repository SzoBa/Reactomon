import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ExternalLink } from "react-external-link";
import "../../App.css";

class TypeListItem extends Component {
  render() {
    const { name, url } = this.props.type;
    const test = url;

    return (
      <p className="typeListItem">
        Type name: {name} - Original detail url:{" "}
        <ExternalLink href={test}>Go to page</ExternalLink>
      </p>
    );
  }
}

TypeListItem.propTypes = {
  type: PropTypes.object.isRequired,
};

export default TypeListItem;
