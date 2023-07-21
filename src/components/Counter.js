import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter, resetCounter } from '../redux/counter/counterActions';

const Counter = () => {

    const counterValue = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        
        <div >
            <h1 > Counter: {counterValue.counterValue} </h1>
            <button onClick={() => dispatch(increaseCounter(+10))} > increase counter </button>
            <button onClick={() => dispatch(decreaseCounter(+20))} > decrease counter </button>
            <button onClick={() => dispatch(resetCounter())} > reset counter </button>
            <p>540$ <del>450$</del></p>
            {
                counterValue && <p>mohammad</p>
            }
        </div>
    );
};

export default Counter;