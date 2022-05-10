import { createSlice } from "@reduxjs/toolkit";
import { all } from "../actions";

const __main__ = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: {
        [all.fulfilled]: (state, action) => {
            state.users.push(action.payload);
            console.log(action);
        },
        [all.rejected]: (state, action) => {
            console.log(action);
        }
    }
});

export default __main__.reducer;
