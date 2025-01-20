import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
  const navigate = useNavigate();
  const { name: paramName } = useParams();
  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('name');

  return (
    <>
      <h3>학생 이름은 {paramName || queryName}입니다.</h3>
      <br />
      <h3>실제 이름은 {queryName || paramName || '알 수 없음'}</h3>
      <br />
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  );
}
