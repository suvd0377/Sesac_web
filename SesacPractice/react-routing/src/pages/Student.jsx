import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
  const { name: paramName } = useParams(); // `name`을 `paramName`으로 변경
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('name'); // 쿼리 스트링에서 `name` 값 가져오기

  return (
    <>
      <h2>학생 이름은 {paramName || queryName}입니다.</h2>
      <br />
      <h3>실제 이름은 {queryName || paramName || '알 수 없음'}</h3>
      <br />
      <button onClick={() => window.history.back()}>이전 페이지로</button>
    </>
  );
}
