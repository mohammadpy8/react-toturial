const intialState = {
    loading: false,
    users: [],
    error: "",
};

const userReducer = (state = intialState, action) => {
    
    switch (action.type) {
        case "FETCH_USERS_REQ":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading: false,
                users: action.payload,
            }
        case "FETCH_USERS_FAIL":
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
        default:
            return state;
    }

};

export default userReducer;