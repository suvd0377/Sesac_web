import FakePost from './components/FakePost';
import LifeCycle from './components/LifeCycle';
import RealPost from './components/RealPost';

function App() {
  return (
    <div>
      <h2>실습 1</h2>
      <LifeCycle>
        <FakePost />
        <RealPost />
      </LifeCycle>
    </div>
  );
}

export default App;
