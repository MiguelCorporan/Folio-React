import React, { useContext } from "react";
import { useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "./ThemeContex";
import styled from "styled-components";

const Algo = styled.div`
  .so {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .luna {
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (min-width: 1600px) {
    .so {
      font-size: 2rem;
    }

    .luna {
      font-size: 2rem;
    }
  }
`;

const DarkMode = () => {
  const { cambioModo } = useContext(ThemeContext);
  const [Cambio, setCambio] = useState(true);

  return (
    <Algo
      onClick={() => {
        setCambio((C) => !C);
        cambioModo();
      }}
    >
      {Cambio ? (
        <BsFillMoonFill className="luna" />
      ) : (
        <BsSunFill className="so" />
      )}
    </Algo>
  );
};

export default DarkMode;
