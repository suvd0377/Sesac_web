const initialIsDataState = false;
export const isDataReducer = (state = initialIsDataState, action) => {
  if (action.type === 'isData/CHANGE') {
    return !state;
  } else {
    return state;
  }
};
