import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(ReduxThunk));

export default store;
