import React, { Component } from "react";

class SimpleItem extends Component {
  render() {
    return this.props.simpleData.toString();
  }
}

export default SimpleItem;
