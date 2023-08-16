import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterSlice from "../features/counter/counterSlice";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: usersSlice,
    },
    middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
});

export default store;