import { useRef, useState } from 'react';

export default function MapPractice2() {
  const [comment, setComment] = useState([
    { writer: '민봉', title: '화이팅!!!' },
    { writer: '진우', title: '집에 가고 싶다...' },
    { writer: '규빈', title: '나는야 코딩 천재' },
  ]);
  const [inputWriter, setInputWriter] = useState(''); // 작성자 등록 input
  const [inputTitle, setInputTitle] = useState(''); // 제목 등록 input

  const writerRef = useRef();
  const titleRef = useRef();

  const addComment = () => {
    if (!inputWriter) {
      writerRef.current.focus();
      return;
    }
    if (!inputTitle) {
      titleRef.current.focus();
      return;
    }

    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setInputTitle('');
    setInputWriter('');
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          ref={writerRef}
          onChange={e => {
            setInputWriter(e.target.value);
          }}
        />{' '}
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          ref={titleRef}
          onChange={e => setInputTitle(e.target.value)}
        />{' '}
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
