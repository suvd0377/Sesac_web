import { useState } from 'react';

export default function useToggle(initialState = false) {
  // value는 토글의 상태
  const [value, setValue] = useState(initialState);

  //   value를 반대값으로 전환시키는 함수
  const toggleValue = () => setValue(!value);

  //   현재의 value값과, 반대전환함수를 배열에 담아서 리턴
  return [value, toggleValue];
}
