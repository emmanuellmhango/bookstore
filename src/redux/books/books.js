const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = () => {
  return {
    type: ADD_BOOK
  }
};

export const removeBook = () => {
  return {
    type: REMOVE_BOOK
  }
};

export default function booksReducer(books = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...books,
        //new book details
      ];
    case REMOVE_BOOK:
      return;
    default:
      return books;
  }
}
