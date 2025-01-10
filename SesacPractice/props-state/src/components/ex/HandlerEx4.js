import { useState } from 'react';

export default function HandlerEx4() {
  const [number, setNumber] = useState(0);
  const [emoji, setEmoji] = useState('🤡');
  const increase = () => {
    setNumber(number + 1);
    if (number + 1 > 7) {
      setEmoji('😈');
    }
  };
  const decrease = () => {
    setNumber(number - 1);
    if (number - 1 <= 7) {
      setEmoji('🤡');
    }
  };
  return (
    <div>
      <h5>
        {number}
        {emoji}
      </h5>
      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>1감소</button>
    </div>
  );
}
