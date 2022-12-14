import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import booksReducer from './books';
import categoryReducer from './categories';

const rootReducer = combineReducers({ booksReducer, categoryReducer });
const store = configureStore(rootReducer);

export default store;
