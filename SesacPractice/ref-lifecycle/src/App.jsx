import FakePost from './components/FakePost';
import LifeCycle from './components/LifeCycle';
import RealPost from './components/RealPost';
import RefPractice from './components/RefPractice';
import RefPractice2 from './components/RefPractice2';
import RefPractice3 from './components/RefPractice3';

function App() {
  return (
    <div>
      <h2>실습 1</h2>
      <LifeCycle>
        <FakePost />
        <RealPost />
      </LifeCycle>

      <h2>실습 2</h2>
      <RefPractice />

      <h2>실습 3</h2>
      <RefPractice2 />

      <h2>실습 4</h2>
      <RefPractice3 />
    </div>
  );
}

export default App;
