import React from "react";

import { Header } from "./components/Header";
import { ProductCatalog } from "./components/ProductCatalog";

import { Colors } from "./styles";
import styled from "styled-components";

const Main = styled.div`
  background-color: ${Colors.get("Main")};
  font-family: sans-serif;
  font-weight: lighter;
  min-height: 100vh;
  min-width: 100vw;
`;

export const App = () => {
  return (
    <Main>
      <Header />
      <ProductCatalog />
    </Main>
  );
};
