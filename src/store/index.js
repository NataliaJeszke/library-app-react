import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book/book-slice";

const store = configureStore({
    reducer:{
        BOOK: bookSlice.reducer
    }
})

export {store}