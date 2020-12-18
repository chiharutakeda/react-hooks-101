import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount((prev) =>prev + 1);

  }
  const countDown = () => {
    setCount((prev) =>prev - 1)
  }
  const countUp2 = () => {
    setCount((prev) =>prev + 2);

  }
  const countDown2 = () => 
    setCount((prev) => rev - 2)
  }

  const double = () => {
    setCount((prev) => prev * 2)
  }

  const divide3 = () => {
    setCount((prev) => prev % 3 === 0 ? prev / 3 : prev)
  }

  const reset = () => {
    setCount(() => {
      setCount(0);
    })
  }


  return (
    <>
      <div>const:{count}</div>
      <button onClick={countUp}>+1</button>
      <button onClick={countDown}>-1</button>
      <br />
      <button onClick={countUp2}>+2</button>
      <button onClick={countDown2}>-2</button>
      <br />
      <button onClick={double}>x2</button>
      <br />
      <button onClick={divide3}>3で割り切れる時3で割る</button>
      <br />
      <button onClick={reset}>clear</button>
    </>
  );
}

export default App;
