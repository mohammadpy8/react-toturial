const increaseCounter = (increase) => {
    return {
        type: "INCREASECOUNTER",
        payload: increase,
    }
};

const decreaseCounter = (decrease) => {
    return {
        type: "DECREASECOUNTER",
        payload: decrease,
    }
};

const resetCounter = () => {
    return {
        type: "RESETCOUNTER",
    }
};

export { increaseCounter, decreaseCounter, resetCounter };