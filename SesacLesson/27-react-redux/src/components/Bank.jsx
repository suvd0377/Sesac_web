import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/module/bankReducer';
import { useState } from 'react';

export default function Bank() {
  const money = useSelector(state => state.money);
  const [inputNumber, setInputNumber] = useState(0);
  console.log(money);
  const dispatch = useDispatch();
  return (
    <div style={{ border: '2px dashed pink', padding: '10px' }}>
      <h3>코딩온 은행</h3>
      <p>잔액: {money.toLocaleString()}원</p>
      <input
        type="number"
        placeholder="돈을 입력해주세요"
        step={10000}
        value={inputNumber}
        onChange={e => {
          setInputNumber(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch(deposit())}>입금</button>
      <button onClick={() => dispatch(withdraw())}>출금</button>
    </div>
  );
}
