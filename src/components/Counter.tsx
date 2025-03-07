import React, {FC, useState} from 'react';

export type CounterProps = {
  value: number
};

export const Counter: FC<CounterProps>  = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleUp = () => setCounter((counterPref) => counterPref + 1);
  const handleDown = () => setCounter((counterPref) => counterPref - 1);
  const handleReset = () => setCounter(value);

  return <>
    <h1>Counter</h1>
    <div>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleUp}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDown}>-1</button>
      </div>
    </div>
  </>;
};
