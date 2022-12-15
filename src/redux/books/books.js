export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const GET_BOOKS = 'bookstore/books/GET_BOOKS';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialData = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const getBook = (book) => ({
  type: GET_BOOKS,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default function booksReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case `${GET_BOOKS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
}
