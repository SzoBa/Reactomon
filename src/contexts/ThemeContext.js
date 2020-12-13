import { useState, createContext } from "react";

export const ThemeContext = createContext(["junk", () => {}]);

export const ThemeContextProvider = (props) => {
  const theme = useState("junk");

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
