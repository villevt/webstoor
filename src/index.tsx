import React from 'react';
import ReactDOM from 'react-dom';
import {Logo} from "./components/logo";

import styles from "./index.module.css";
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/Jumbotron";

ReactDOM.render(
  <React.StrictMode>
    <div className="overflow-hidden min-vh-100">
      <Container fluid>
        <Logo className="d-block mx-auto my-5 w-25"/>
        <h1 className="text-center display-4">Stoorming with the best deals! </h1>
      </Container>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);