import { useEffect, useState } from 'react';

const MyComponent = ({ number }) => {
  const [text, setText] = useState('');
  /*
    useEffect(effect) */

  // Mount 시점에 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 MOUNT!!! ');
  }, []);

  //   Unmount 시점에 실행
  useEffect(() => {
    return () => {
      console.log('함수형 컴포넌트 UNMOUNT!!!'); //unmount
    };
  }, []);

  //   update 시점에 실행 + mount
  useEffect(() => {
    // text, number 스테이트가 바뀔 때 모두 실행됨
    console.log('함수형 컴포넌트 UPDATE!!! 될 때마다');
  });

  //   특정 state 업데이트 + mount
  useEffect(() => {
    console.log('함수형 컴포넌트 UPDATE!!! Text 변경 시');
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </>
  );
};

const LifeCycleFunction = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunction;
