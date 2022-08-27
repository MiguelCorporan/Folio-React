import React, { useContext } from "react";
import { useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "./ThemeContex";

const DarkMode = () => {
  const { cambioModo } = useContext(ThemeContext);
  const [Cambio, setCambio] = useState(true);

  return (
    <div
      onClick={() => {
        setCambio((C) => !C);
        cambioModo();
      }}
    >
      {Cambio ? <BsFillMoonFill /> : <BsSunFill />}
    </div>
  );
};

export default DarkMode;
