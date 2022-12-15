import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from './URL';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const fetchBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
});

export default fetchBooks;
