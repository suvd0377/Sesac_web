import Bank from './components/Bank';
import { Box1 } from './components/Box';
import Test from './components/Test';

function App() {
  return (
    <>
      <div>redux</div>
      {/* <Test /> */}
      <h2>여러 개의 전역 state 사용하기</h2>
      <Box1 />
      <h2>은행</h2>
      <Bank />
    </>
  );
}

export default App;
