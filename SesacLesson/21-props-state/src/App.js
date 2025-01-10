import { ClassProps, ClassProps2 } from './components/ClassProps';
import ClassState from './components/ClassState';
import Counter from './components/Counter';
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from './components/FunctionProps';
import FunctionState from './components/FunctionState';
import PropsMap from './components/PropsMap';
import PropsMap2 from './components/PropsMap2';
import EntirePractice from './components/practice/EntirePractice';
import SyntheticEvent from './components/SyntheticEvent';
import Alphabet from './components/Alphabet';

function App() {
  return (
    <div>
      {/* <h2>Props 사용</h2>
      <h3>Class형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      /> */}

      {/* <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기">
        <span style={{ color: 'red' }}>children 요소입니다!!!</span>
      </FunctionProps4>

      <h2>State</h2>
      <h3>클래스형 state</h3>
      <ClassState />
      <h3>함수형 state</h3>
      <FunctionState />
      <h2>이벤트</h2>
      <SyntheticEvent />
      <Counter /> */}

      {/* <h2>실습문제!!</h2> */}
      {/* <EntirePractice /> */}

      {/* <h2>Props</h2>
      <PropsMap />
      <PropsMap2 arr={arr} /> */}
      <Alphabet />
    </div>
  );
}

export default App;
