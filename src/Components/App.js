import React from "react";
import Prices from "./Prices";
import { GlobalStyle } from "../Styles/globalStyles";
import { AppWrapper } from "../Styles/AppStyled"

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Prices />
    </AppWrapper>
  );
}

export default App;
