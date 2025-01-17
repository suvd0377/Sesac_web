import { useReducer, useState } from 'react';

const BANK_ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
};

// dispatch의 요구사항인 action이 reducer의 두번째 인자로 들어온다.
// action ={type, payload}
const reducer = (prevState, action) => {
  console.log('dispatch 항수가 호출되면, reducer 동작!!');
  console.log('prevState', prevState);
  console.log('action', action);
  //  Reduce는 action값에 따라서 state를 return시켜야 한다.
  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReduce() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>현재 잔고:{money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={e => setNumber(Number(e.target.value))}
      />

      <br />
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number })
        }
      >
        예금
      </button>
      <button
        onClick={() =>
          dispatch({ type: BANK_ACTION_TYPES.withdraw, payload: number })
        }
      >
        출금
      </button>
    </>
  );
}
