import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from "./components/header";

import {Colors} from './styles';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background: #fff;
  color: ${Colors.get("Main")};
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const RecommendedProducts = styled.div`
  min-height: 10em;
  min-width: 100vw;
`;

ReactDOM.render(
  <React.StrictMode>
    <ContainerDiv>
        <Header />
        <RecommendedProducts />
    </ContainerDiv>
  </React.StrictMode>,
  document.getElementById('root')
);