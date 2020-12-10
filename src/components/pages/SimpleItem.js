import React, { Component } from "react";

class SimpleItem extends Component {
  render() {
    return (
      <div className="simpleData">
        <p>{this.props.attribute + ": " + this.props.simpleData.toString()}</p>
      </div>
    );
  }
}

export default SimpleItem;
