const increaseAndChangeAction = (numberPayload, namePayload) => {
    return {
        type: "INCHACTION",
        numberPayload,
        namePayload,
    }
};

const decreaseAndChangeAction = (numberPayload, namePayload) => {
    return {
        type: "DECHACTION",
        numberPayload,
        namePayload,
    }
};

const resetAndChangeAction = () => {
    return {
        type: "RECHACTION",
    }
};

export { increaseAndChangeAction, decreaseAndChangeAction, resetAndChangeAction };