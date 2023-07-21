import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    increaseAndChangeAction,
    decreaseAndChangeAction,
    resetAndChangeAction
} from "../redux/number/numberAction";

const Number = () => {

    const dispatch = useDispatch();
    const numberValue = useSelector(state => state.number);

    return (
        <div>
            <h1>numberValue: {numberValue.numberValue}</h1>
            <h1>nameNumber: {numberValue.nameNumber}</h1>
            <button onClick={() => dispatch(increaseAndChangeAction(+50, "INCREASEANDCHANGE"))}>increaseAndChange</button>
            <button onClick={() => dispatch(decreaseAndChangeAction(+100, "DECREASEANDCHANGE"))}>decreaseAndChange</button>
            <button onClick={() => dispatch(resetAndChangeAction())}>resetAction</button>
        </div>
    );
};

export default Number;