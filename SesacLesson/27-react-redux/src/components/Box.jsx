export function Box1() {
  return (
    <div style={{ border: '2px dashed pink', padding: '10px' }}>
      <h4>Box1입니다.</h4>
      <Box2 />
    </div>
  );
}
export function Box2() {
  return (
    <div style={{ border: '1px solid skyblue', padding: '10px' }}>
      <h4>Box2입니다.</h4>
    </div>
  );
}
