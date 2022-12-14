const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default function booksReducer(books = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...books,
        action.payload,
      ];
    case REMOVE_BOOK:
      return books.filter((book) => book.id !== action.payload);
    default:
      return books;
  }
}
