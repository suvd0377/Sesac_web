import React, { useRef, useState } from 'react';

export default function RefPractice2() {
  const inputRef = useRef();
  const [chColor, setChColor] = useState('');

  const handleColor = () => {
    const color = inputRef.current.value;
    setChColor(color);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        backgroundColor: chColor,
        width: '200px',
        height: '50px',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      <input
        ref={inputRef}
        type="text"
        style={{
          display: 'block',
          margin: 'auto',
          padding: '5px',
          width: '80%',
        }}
      />
      <button
        onClick={handleColor}
        style={{ display: 'block', margin: '5px auto', padding: '5px 10px' }}
      >
        색 적용
      </button>
    </div>
  );
}
