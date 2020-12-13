import React, { useContext } from "react";
import styled from "styled-components";
import AppTheme from "../../contexts/ThemeStyle";
import ThemeContext from "../../contexts/ThemeContext";

const DetailedItemText = styled.p`
  font-size: 1em;
  margin: 0;
`;

const DetailItem = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

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
