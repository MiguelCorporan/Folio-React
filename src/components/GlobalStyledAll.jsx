import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./ThemeContex";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    min-height: 100vh;
    background-color: #211522;
  }
  *{
    box-sizing: border-box;
  }
  #root{
    min-height: 100vh;
    background-color:${({ theme: { main } }) => main} ;
  }
  .app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .section{
    min-height: calc(100vh - 10rem);
    flex-grow: 1;
  }
  .nav-fot{
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  footer{
    min-height: 2rem;
    padding-left: 1rem;
    text-align: center;
    color: ${({ theme: { textColor } }) => textColor};
    padding-top: .5rem;
    font-size:.8rem ;
  }
  button{
    background-color: transparent;
    border: none;
  }
`;

const GlobalStyledAll = () => {
  const { theme } = useContext(ThemeContext);
  return <GlobalStyle theme={theme} />;
};

export default GlobalStyledAll;
