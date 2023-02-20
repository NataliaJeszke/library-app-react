import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: 'bookSlice',
    initialState:{
        bookList: [
            {title: 'Człowiek Nietoperz', author:'Jo Nesbo', data:'1997', genre:'Crime'},
            {title: 'Karaluchy', author:'Jo Nesbo', data:'1998', genre:'Crime'},
            {title: 'Czerwone gardło', author:'Jo Nesbo', data:'2000', genre:'Thriller'},
            {title: 'Trzeci Klucz', author:'Jo Nesbo', data:'2002', genre:'Crime'},
            {title: 'Pentagram', author:'Jo Nesbo', data:'2003', genre:'Crime'},
            {title: 'Łowcy Głów', author:'Jo Nesbo', data:'2008', genre:'Crime'},
    ],
    },

    reducers:{
        addBookAction: (currentBook, action)=>{
            console.log(action);
            currentBook.bookList.push(action.payload)
        }
    }

});

export const {addBookAction} = bookSlice.actions
