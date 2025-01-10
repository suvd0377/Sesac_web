import PororoObj from './Change';
// import ChangeObj from './ChangeObj';
import ClassState from './components/ClassState';
import HandlerEx from './components/ex/HandlerEx';
import HandlerEx2 from './components/ex/HandlerEx2';
import HandlerEx3 from './components/ex/HandlerEx3';
import HandlerEx4 from './components/ex/HandlerEx4';
import FunctionState from './components/FunctionState';

function App() {
  return (
    <div>
      <h2>state</h2>
      <h3>ClassState</h3>
      <ClassState />
      <h3>FunctionState</h3>
      <FunctionState />
      <h3>이벤트 핸들링 실습 1</h3>
      <HandlerEx />
      <h3>이벤트 핸들링 실습 2</h3>
      <HandlerEx2 />
      <h3>이벤트 핸들링 실습 3</h3>
      <HandlerEx3 />
      <h3>추가 실습 1</h3>
      <HandlerEx4 />
      <h3>추가 실습 2</h3>
      <PororoObj />
    </div>
  );
}

export default App;
