const DEPOSIT = 'money/DEPOSIT';
const WITHDRAW = 'money/WITHDRAW';

export const deposit = payload => ({ type: DEPOSIT, payload });
export const withdraw = payload => ({ type: WITHDRAW, payload });
const initialMoneyState = 0;

export const bankReducer = (state = initialMoneyState, action) => {
  if (action.type === 'money/DEPOSIT') {
    return state + action.payload;
  } else if (action.type === 'money/WITHDRAW') {
    return state - action.payload;
  } else {
    return state;
  }
};
