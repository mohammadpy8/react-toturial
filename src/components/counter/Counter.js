import React, { useContext } from "react";
import { CounterContext } from "../Reducer";

const Counter = () => {

    const dataCounter = useContext(CounterContext);
    
    const { counter, dispatch } = dataCounter;
    const { counterValue, counterMsg, counterBool} = counter;

  return (
    <div>
          <div>
              <button onClick={() => dispatch({ type: "INCRAESE_COUNTER", payload: 10, message: "increase", bool: true })}>increaseCounter</button>
              <h1>{counterValue}</h1>
              <h1>{counterBool ? "mohammmad" : "ali"}</h1>
              <h1>{ counterMsg}</h1>
      </div>
    </div>
  );
};

export default Counter;
