import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../../App.css";

class DetailItem extends Component {
  render() {
    return Object.entries(this.props.detailData).map(([key, value], index) => (
      <div className="detailedData" key={key}>
        <React.Fragment key={key}>
          {key} : {typeof value}
        </React.Fragment>
      </div>
    ));
  }
}

export default DetailItem;
