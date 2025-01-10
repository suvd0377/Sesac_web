export default function PropsMap2({ arr }) {
  return (
    <div style={{ border: '1px solid red' }}>
      <ul>
        <li>
          props가 배열이고, 해당 배열로 map 연산을 시행시킬 때, props가 저날되지
          않는 순간을 대비해랴함
        </li>
        <li>?를 이용해서 props가 전달되지 않났을 때 map 연사을 </li>
      </ul>
      {arr?.map((er, li) => {
        return <div key={{ i }}>{el.name}</div>;
      })}
    </div>
  );
}
