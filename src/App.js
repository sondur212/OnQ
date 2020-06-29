import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
const Warning = React.lazy(() => import('./Warning'));

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <main role="main">
      <h1>Hola New World !!</h1>
      <h2 className={count > 5 ? 'warning' : null}>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {count > 5 ? (
        <React.Suspense fallback={null}>
          <Warning />{' '}
        </React.Suspense>
      ) : null}
    </main>
  );
};

export default hot(module)(App);
