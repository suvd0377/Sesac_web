import { useRef, useState } from 'react';

export default function SetText() {
  const refVal = useRef<number>(0); // 변수로 사용할 ref
  // ref 객체를 이용해서 DOM 접근시 null 초기값 전달 필수
  const refInput = useRef<HTMLInputElement>(null);

  //   const [text, setText] = useState<string>("");
  const [text, setText] = useState('');

  // refVal 변수를 변경하는 함수
  const changeRef = () => {
    refVal.current += 1;
    console.log('refVal: ', refVal.current);
  };

  const changeState = () => {
    if (refInput.current) {
      console.log('text state 변경 완료!!');
      setText(refInput.current.value);
    }
  };

  const checkString = () => {
    console.log('state string', text);
    console.log('input value ref', refInput.current?.value);
  };

  return (
    <div>
      <h2>useRef & useState 사용해보기</h2>
      <input type="text" ref={refInput} onChange={checkString} />
      <br />
      <button onClick={changeState}>state 변경!</button>
      <button onClick={changeRef}>ref +1</button>

      <p>state: {text}</p>
      <p>refVal: {refVal.current}</p>
      <p>refInput의 value: {refInput.current?.value}</p>
    </div>
  );
}
