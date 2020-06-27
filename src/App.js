import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
const Warning = React.lazy(() => import('./Warning'));

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>Hola New World !!</h1>
      <img alt="company logo" src="./logo.jpg" />
      <h2 className={count > 5 ? 'warning' : null}>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {count > 5 ? (
        <React.Suspense fallback={null}>
          <Warning />{' '}
        </React.Suspense>
      ) : null}
    </>
  );
};

export default hot(module)(App);
