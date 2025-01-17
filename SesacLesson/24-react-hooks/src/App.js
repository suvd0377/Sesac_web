import CustomHook from './components/CustomHook';
import Form from './components/Form';
import UsecallbackEx1 from './components/UsecallbackEx1';
import UsecallbackEx2 from './components/UsecallbackEx2';
import UseMemo1 from './components/UseMemo1';
import UseMemoObj from './components/UseMemoObj';
import UseReduce from './components/UseReducer';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('Hook 배워보기');
  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> */}
      {/* <UsecallbackEx1 />
      <UsecallbackEx2 />
      <UseReduce /> */}
      <CustomHook />
      <Form />
    </>
  );
}

export default App;
