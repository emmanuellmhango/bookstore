import { createAsyncThunk } from '@reduxjs/toolkit';
import { REMOVE_BOOK, removeBook } from './books';
import BASE_URL from './URL';

const removeBookData = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  const response = await fetch(`${BASE_URL}/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: bookId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  thunkAPI.dispatch(removeBook(bookId));
  return responseText;
});

export default removeBookData;
