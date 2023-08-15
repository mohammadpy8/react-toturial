const increaseCounter = (number, msg) => {
  return {
    type: "INCREASE",
    payload: number,
    payMsg: msg,
  };
};

const decreaseCounter = (number, msg) => {
  return {
    type: "DECREASE",
    payload: number,
    payMsg: msg,
  };
};

const resetCounter = () => {
  return {
    type: "RESET",
  };
};

export { increaseCounter, decreaseCounter, resetCounter };
