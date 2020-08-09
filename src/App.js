import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => {
  return (
    <main role="main">
      <h1>Hola New World !!</h1>
    </main>
  );
};

export default hot(module)(App);
