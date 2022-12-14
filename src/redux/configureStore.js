import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

import booksReducer from './books/books';
import categoryReducer from './categories/categories';

/*
const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore(rootReducer);
*/

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
