const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};
