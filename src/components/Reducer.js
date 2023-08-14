import React, { useReducer, createContext } from 'react';

export const CounterContext = createContext();

const initialState = {
    counterValue: 0,
    counterMsg: "",
    counterBool: true,
};

const counterReducer = (state, aciton) => {

    switch (aciton.type) {
        case "INCRAESE_COUNTER":
            return {
                counterValue: state.counterValue + aciton.payload,
                counterMsg: aciton.message,
                counterBool: aciton.bool,
            }
        case "DECRAESE_COUNTER":
            return {
                counterValue: state.counterValue - aciton.payload,
                counterMsg: aciton.payload,
                counterBool: aciton.payload,
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }

};

const Reducer = ({children}) => {

    const [counter, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{counter, dispatch}}>
            {children}
        </CounterContext.Provider>
    );
};

export default Reducer;