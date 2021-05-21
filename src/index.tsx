import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from "./components/header";
import {InfoPanel} from "./components/infopanel";

import {Colors} from './styles';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background-image: linear-gradient(${Colors.get("Light")}, #fff);
  color: ${Colors.get("Main")};
  display: flex;
  font-family: 'Gothic A1', sans-serif;
  flex-direction: column;
  gap: 2em;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 1rem 3rem 1rem 3rem;
  margin: auto;
`;

const RecommendedProducts = styled.div`
`;

ReactDOM.render(
  <React.StrictMode>
    <ContainerDiv>
        <Header />
        <Main>
          <InfoPanel />
          <RecommendedProducts />
        </Main>
    </ContainerDiv>
  </React.StrictMode>,
  document.getElementById('root')
);