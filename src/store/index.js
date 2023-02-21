import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book/book-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    BOOK: bookSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

// const store = configureStore({
//     reducer:{
//         BOOK: bookSlice.reducer
//     }
// })



export {store}
