import { combineReducers } from '@reduxjs/toolkit';
import { isDataReducer } from './module/isDataReducer';
import { counterReducer } from './module/counterReducer';
import { bankReducer } from './module/bankReducer';

// store/index.js , 여러개의  reducer를 통합하는 역할
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  money: bankReducer,
});

export default rootReducer;
