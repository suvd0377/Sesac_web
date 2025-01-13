import LifeCycleClass from './components/LifeCycleClass';
import LifeCycleFunction from './components/LifeCycleFunction';
import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunction1, RefFunction2 } from './components/RefFunction';

function App() {
  return (
    <div>
      {/* Ref */}
      <RefClass1 />
      <RefClass2 />
      <RefFunction1 />
      <RefFunction2 />

      {/* LifeCycle */}
      <LifeCycleClass />
      <LifeCycleFunction />
    </div>
  );
}

export default App;
