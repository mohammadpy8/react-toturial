import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";

const rootReducer = combineReducers({

    counter: counterReducer,
    number: numberReducer,

});

export default rootReducer;