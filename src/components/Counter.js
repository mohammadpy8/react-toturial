import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {

    const { counterValue } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment(+10))}>increase</button>
            <button onClick={() => dispatch(decrement())}>decrease</button>
            <h1>number: {counterValue}</h1>
        </div>
    );
};

export default Counter;