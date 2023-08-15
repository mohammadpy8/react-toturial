import { createContext } from "react";
import {
  increaseCounter,
  resetCounter,
  decreaseCounter,
} from "./counter/counterAction";
import { useSelector, useDispatch } from "react-redux";


export const ReduxContext = createContext();

const ReduxValue = ({ children }) => {
  const dispatch = useDispatch();
    const { counterValue, counterMsg } = useSelector((state) => state.counter);
    const reduxAtt = {
        increaseCounter,
        decreaseCounter,
        resetCounter,
        dispatch,
        counterMsg,
        counterValue,
      };

  return (
    <ReduxContext.Provider value={reduxAtt}>{children}</ReduxContext.Provider>
  );
};

export default ReduxValue;
