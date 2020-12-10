import React from "react";
import "../../App.css";

const DetailItem = (props) => {
  return Object.entries(props.detailData).map(([key, value]) => (
    <div className="detailedData" key={key}>
      <React.Fragment>
        <p>
          {props.attribute} : {typeof value}
        </p>
      </React.Fragment>
    </div>
  ));
};

export default DetailItem;
