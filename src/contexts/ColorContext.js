import React, { useState, createContext } from "react";

export const ColorContext = createContext();

export const ColorProvider = (props) => {
  const [fontColor, setFontColor] = useState("white");

  return (
    <ColorContext.Provider value={[fontColor, setFontColor]}>
      {props.children}
    </ColorContext.Provider>
  );
};

//not default
