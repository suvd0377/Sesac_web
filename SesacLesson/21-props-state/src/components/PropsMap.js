export default function PropsMap() {
  const testArr = [1, 2, 3, 4, 5];
  const newTestArr = testArr.map(el => {
    return el + 10;
  });

  return (
    <div>
      <h3>map 사용해보기</h3>
      {testArr}
      <ul>
        {arr.map((el, i) => {
          return <li>{el.name}</li>;
        })}
      </ul>
    </div>
  );
}
