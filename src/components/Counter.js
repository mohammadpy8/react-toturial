import React, { useContext } from "react";

import { ReduxContext } from "../redux/reduxAtt";

const Counter = () => {
  const {
    decreaseCounter,
    dispatch,
    increaseCounter,
    resetCounter,
    counterMsg,
    counterValue,
  } = useContext(ReduxContext);

  return (
    <div>
      <button onClick={() => dispatch(increaseCounter(+10, "INCREASE"))}>
        increase
      </button>
      <button onClick={() => dispatch(decreaseCounter(+5, "DECREASE"))}>
        decrease
      </button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
      <h2>counter : {counterValue}</h2>
      <h2>msg: {counterMsg}</h2>
    </div>
  );
};

export default Counter;
