const initialState = {
    counterValue: 0
};

const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "INCREASECOUNTER":
            return {
                counterValue: state.counterValue + action.payload,
            }
        case "DECREASECOUNTER":
            return {
                counterValue: state.counterValue - action.payload,
            }
        case "RESETCOUNTER":
            return initialState
        default:
            return state;
    };
};

export default counterReducer;