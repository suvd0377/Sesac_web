import { useState } from 'react';

export default function HandlerEx2() {
  const [colText, changeColText] = useState({ text: '검정색', color: 'black' });

  const handleColorChange = (text, color) => {
    changeColText({ text, color });
  };
  return (
    <div>
      <p style={{ color: colText.color }}>{colText.text}</p>
      <button onClick={() => handleColorChange('빨간색', 'red')}>빨간색</button>
      <button onClick={() => handleColorChange('파란색', 'blue')}>
        파란색
      </button>
    </div>
  );
}
