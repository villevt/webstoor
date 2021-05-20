import React from 'react';
import ReactDOM from 'react-dom';
import {Logo} from "./components/logo";

const App = () =>
  <div>
    <Logo />
  </div>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);