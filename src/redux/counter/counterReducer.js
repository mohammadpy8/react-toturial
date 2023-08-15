const intialState = {
  counterValue: 0,
  counterMsg: "",
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counterValue: state.counterValue + action.payload,
        counterMsg: action.payMsg,
      };
    case "DECREASE":
      return {
        counterValue: state.counterValue - action.payload,
        counterMsg: action.payMsg,
          };
      case "RESET":
          return intialState;
      default:
          return state;
  }
};

export default counterReducer;
