const INITIAL_STATE = {
  number: 30,
};
export const numberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };
    case "DECREASE_NUMBER":
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};
