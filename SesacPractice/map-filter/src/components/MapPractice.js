import { useState } from 'react';

export default function MapPractice() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addList = () => {
    if (name && email) {
      const newList = list.concat({ name, email });
      setList(newList);
      setName('');
      setEmail('');
    } else {
      alert('다 적어주세요!');
    }
  };

  const activeEnter = e => {
    if (e.key == 'Enter') {
      addList();
    }
  };

  const deleteList = (name, email) => {
    const newAll = list.filter(name, email);
    setList(newAll);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="이름"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="이메일"
        onChange={e => {
          setEmail(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addList}>등록</button>
      <br />
      <br />
      <div>
        {list.map(value => (
          <>
            <h3 key={value} onDoubleClick={() => deleteList(name, email)}>
              {name}: {email}
            </h3>
          </>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
}
