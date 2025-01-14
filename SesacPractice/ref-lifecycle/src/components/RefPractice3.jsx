import React, { useState, useRef } from 'react';

export default function RefPractice3() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 11));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 11));
  const [op, setOp] = useState(
    ['+', '-', '*', '/'][Math.floor(Math.random() * 4)],
  );
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const newQuiz = () => {
    if (op === '+') {
      return num1 + num2;
    } else if (op === '-') {
      return num1 - num2;
    } else if (op === '*') {
      return num1 * num2;
    } else if (op === '/') {
      return num1 / num2;
    }
  };

  const handleSubmit = () => {
    const correctAnswer = newQuiz();

    if (parseFloat(inputValue) === correctAnswer) {
      alert('정답입니다!');
    } else {
      alert(`오답입니다. 정답은 ${correctAnswer} 입니다.`);
    }

    setTimeout(() => {
      setNum1(Math.floor(Math.random() * 11));
      setNum2(Math.floor(Math.random() * 11) + 1);
      setOp(['+', '-', '*', '/'][Math.floor(Math.random() * 4)]);
      setInputValue('');
      inputRef.current.focus();
    }, 0);
  };

  const handleKey = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <p>
        퀴즈: {num1} {op} {num2}
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyPress={handleKey}
        ref={inputRef}
        placeholder="정답을 입력하세요"
      />
      <button onClick={handleSubmit}>정답 제출</button>
    </div>
  );
}
