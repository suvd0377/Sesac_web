import { useState } from 'react';

export default function PFunctionState() {
  const [count, setCount] = useState(0);

  const increase = () => {
    //  count = count + 1 불가능
    setCount(count + 1);
    // setCount(prevCount => prevCount + 1);
  };

  const decrease = () => {
    //  count = count - 2  불가능
    setCount(count - 2);
    // setCount(prevCount => prevCount - 2);
  };

  return (
    <div>
      <h4>함수형</h4>
      <p>숫자: {count}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
