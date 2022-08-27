import React, { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();

const ThemeContex = ({ children }) => {
  const [DarkMode, setDarkMode] = useState(false);

  const cambioModo = () => {
    setDarkMode(!DarkMode);
  };

  const ligth = {
    main: "#f5f5f5",
    textColor: "#000",
    Bcolor: "#000",
    Ccolor: "#fff",
  };

  const dark = {
    main: "#000",
    textColor: "#fff",
    Bcolor: "#fff",
    Ccolor: "#000",
  };

  const theme = DarkMode ? dark : ligth;

  return (
    <ThemeContext.Provider value={{ theme, cambioModo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeContex;
