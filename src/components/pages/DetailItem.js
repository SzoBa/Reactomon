import React from "react";
import styled from "styled-components";
import "../../App.css";

const DetailedItemText = styled.p`
  font-size: 1em;
  margin: 0;
`;

const DetailItem = (props) => {
  return Object.entries(props.detailData).map(([key, value]) => (
    <div className="detailedData" key={key}>
      <React.Fragment>
        <DetailedItemText>
          {props.attribute} : {typeof value}
        </DetailedItemText>
      </React.Fragment>
    </div>
  ));
};

export default DetailItem;
