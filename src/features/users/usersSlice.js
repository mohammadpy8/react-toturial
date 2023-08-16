import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const usersSlice = createSlice({
    name: "users", 
    initialState,
    extraReducers: (builder) => {}
})