import { useState } from 'react';

export default function HandlerEx3() {
  const [hi, changeDelete] = useState(true);
  const del = () => {
    changeDelete(!hi);
  };
  return (
    <div>
      <button onClick={del}>사라져라</button>
      <h2>{hi ? '안녕하세요' : ''}</h2>
    </div>
  );
}
