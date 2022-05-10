import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "home",
    initialState: {
        text: null
    },
    reducers: {
        edit: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const { edit } = slice.actions;

export default slice.reducer;
