export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log('합성이벤트 클릭!!');
  }

  function printInput(e) {
    console.log(e);
  }

  function callTest() {
    alert('안녕하세요');
  }
  return (
    <div>
      <button onClick={syntheticEvent}>콘솔을 보세요</button>
      {/* <button onClick={callTest()}>함수 호출해서 전달</button> */}
      <br />
      <input
        type="text"
        placeholder="글자를 입력하세요."
        onChange={e => {
          printInput(e);
        }}
      />
    </div>
  );
}
