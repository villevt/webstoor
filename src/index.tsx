import React from 'react';
import ReactDOM from 'react-dom';
import {Logo} from "./components/logo";

import Container from 'react-bootstrap/Container';

import './custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-primary overflow-hidden min-vh-100">
      <Container fluid>
        <Logo className="d-block mx-auto my-5 w-25"/>
        <h1 className="text-center">Stoorming with the best deals!</h1>
      </Container>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);