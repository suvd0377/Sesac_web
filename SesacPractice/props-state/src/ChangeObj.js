import { useState } from 'react';

export default function ChangeObj(props) {
  const [pororoObjArr, setObject] = useState(0);
  const { name, age, nickName } = props.objArr[pororoObjArr];
  const changeObj = () => {
    if (pororoObjArr === 2) {
      return setObject(0);
    } else {
      return setObject(pororoObjArr + 1);
    }
  };
  return (
    <div>
      <p>이름:{name} </p>
      <p>나이:{age}</p>
      <p>별명:{nickName} </p>
      <button onClick={changeObj}>멤버 바꾸기</button>
    </div>
  );
}
