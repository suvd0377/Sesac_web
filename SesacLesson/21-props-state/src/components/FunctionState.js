import { useState } from 'react';

export default function FunctionState() {
  // 기존 js 사용해서 화면 바꾸는 방식
  /*
    let apple = '사과';
  const inEng = () => {
    // apple = "apple"
    const content = document.querySelector('.state');
    // console.log(apple);
    content.innerHTML = 'apple';
  }; */

  //    2. state를 사용해서 화면을 변경
  const [apple, setApple] = useState('사과');

  const inEng2 = () => {
    setApple('apple');
  };
  /*return (
      <div>
        <div className="state">{apple}</div>
        <button onClick={inEng}>영어로 변경! (함수형)</button> 
        <button onClick={inEng2}>영어로 변경! (함수형)</button>
      </div>
    ); */

  // 3. vanilla JS 사과 > apple > 사과 > apple
  /*return (
    const changeLang = () => {
        const content = document.querySelector(".state")
        content.innerHTML === "사과"
        ? (content.innerText = "apple")
        : (content.innerText = "사과")
    }

    <div>
      <div className="state">사과</div>
      <button onClick={changeLang}>언어 변경</button>
    </div>
  );*/

  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    // true라면 false로, false라면 true로 변경
    setShowEnglish(!showEnglish);
  };
  return (
    <div>
      <div className="state">{showEnglish ? 'apple' : '사과'}</div>
      <button onClick={changeLang2}>언어 변경</button>
    </div>
  );
}
