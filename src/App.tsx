import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
