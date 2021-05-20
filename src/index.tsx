import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo.svg';
import styles from ""

const App = () =>
  <div>
    <img src={Logo} alt="Webstoor Logo" />
  </div>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);