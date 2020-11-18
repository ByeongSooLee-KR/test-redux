export const increaseNumber = (item) => {
  return {
    type: "INCREASE_NUMBER",
    payload: item,
  };
};

export const decreaseNumber = (item) => {
  return {
    type: "DECREASE_NUMBER",
    payload: item,
  };
};
