import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from "./components/button";
import {Logo} from "./components/logo";

import {Colors} from './styles';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background: #fff;
  color: ${Colors.get("Main")};
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Header = styled.div`
  align-items: center;
  background-image: linear-gradient(${Colors.get("Light")}, #fff);
  display: flex;
  gap: 1em;
  justify-content: center;
`

const StyledLogo = styled(Logo)`
  height: clamp(1rem, 4vh, 2.5rem);
  margin-bottom: 2em;
  margin-top: 2em;
`;

const RecommendedProducts = styled.div`
  min-height: 10em;
  min-width: 100vw;
`;

const AdminButton = styled(Button)`
  justify-self: flex-end;
`;

ReactDOM.render(
  <React.StrictMode>
    <ContainerDiv>
        <Header>
          <StyledLogo />
          <AdminButton>
            Admin
          </AdminButton>
        </Header>
        <RecommendedProducts />
    </ContainerDiv>
  </React.StrictMode>,
  document.getElementById('root')
);