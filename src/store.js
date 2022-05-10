import { configureStore } from "@reduxjs/toolkit";
import users from "./app/users";

const refresh = () => {
    let state = localStorage.getItem("__state");

    if (state) JSON.parse(state);

    return undefined;
};

const store = configureStore({
    reducer: {
        users
    },
    preloadedState: refresh()
});

store.subscribe(() => {
    localStorage.setItem("__state", JSON.stringify(store.getState()));
});

export default store;
