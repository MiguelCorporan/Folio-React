import { useContext, useState } from "react";
import styled from "styled-components";

import GlobalStyledAll from "./components/GlobalStyledAll";
import Layout from "./components/Layout";
import ThemeContex, { ThemeContext } from "./components/ThemeContex";

const AppStyled = styled.main`
  background-color: ${({ theme: { main } }) => main};
  color: ${({ theme: { textColor } }) => textColor};
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppStyled className="app" theme={theme}>
      <GlobalStyledAll />
      <Layout />
    </AppStyled>
  );
}

export default App;
