import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from "./components/header";
import { ProductCatalog } from './components/ProductCatalog';

import {Colors} from './styles';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background-color: ${Colors.get("Light")};
  color: ${Colors.get("Main")};
  display: flex;
  font-family: 'Gothic A1', sans-serif;
  flex-direction: column;
  gap: 2em;
  min-height: 100vh;
  min-width: 100vw;
`;

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 1rem 3rem 1rem 3rem;
  margin: auto;
`;

ReactDOM.render(
  <React.StrictMode>
    <ContainerDiv>
        <Header />
        <Main>
          <ProductCatalog />
        </Main>
    </ContainerDiv>
  </React.StrictMode>,
  document.getElementById('root')
);