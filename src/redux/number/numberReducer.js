const initialState = {
    numberValue: 0,
    nameNumber: "default",
};

const numberReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case "INCHACTION":
            return {
                ...state,
                numberValue: state.numberValue + action.numberPayload,
                nameNumber: action.namePayload,
            }
        case "DECHACTION":
            return {
                ...state,
                numberValue: state.numberValue - action.numberPayload,
                nameNumber: action.namePayload,
            }
        case "RECHACTION":
            return {
                numberValue: 0,
                nameNumber: "default"
            }
        default:
            return state;
    };
};

export default numberReducer;