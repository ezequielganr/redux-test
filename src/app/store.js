import { configureStore } from "@reduxjs/toolkit";
import home from "./reducers/home";

const refresh = () => {

    return JSON.parse(localStorage.getItem("__state"));
}

const store = configureStore({
    reducer: {
        home
    },
    preloadedState: refresh()
});

store.subscribe(() => {
    localStorage.setItem("__state", JSON.stringify(store.getState()));
});

export default store;
