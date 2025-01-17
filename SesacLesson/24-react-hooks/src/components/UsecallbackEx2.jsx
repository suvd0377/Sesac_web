import { useCallback, useState } from 'react';

export default function UsecallbackEx2() {
  const [text, setText] = useState('');

  //   렌더링 될 때마다 다시 메모리에 저장이 더ㅣ거 있음
  //   const onChangeText = e => {
  //     setText(e.target.value);
  //   };

  // 첫번째 렌더링이 되었을 때만 메모리에 저장됨
  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <input type="text" onChange={onChangeText} value={text} />
      <p>작성한 값:{text}</p>
    </>
  );
}
