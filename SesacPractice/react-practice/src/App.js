const name = 'Julie';
const animal = '강아지';
const a = 8;
const b = 5;

const divStyle = {
  color: 'Green',
};

function App() {
  return (
    <div>
      <h2 style={{ color: 'blue' }}>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <br />
      <h2 style={{ color: 'blue' }}>
        <u>{name}</u>는 <u>{animal}</u>입니다.
      </h2>
      <br />
      <h2 style={divStyle}>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</h2>
      <br />
      <h2 style={divStyle}>{3 + 5 == 9 ? '정답입니다!' : '오답입니다!'}</h2>
      <br />
      <h2 style={{ color: 'red' }}>{a > b && 'a가 b 보다 큽니다.'}</h2>
    </div>
  );
}

export default App;
