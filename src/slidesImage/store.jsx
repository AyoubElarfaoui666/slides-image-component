import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./redux" ;

export const store = configureStore({
    reducer : {
        api : apiReducer
    }
})