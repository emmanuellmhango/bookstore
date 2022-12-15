import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import fetchBooks from '../redux/books/getBookAPI';

const ListBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {
        books.map((book) => (
          <div key={book.item_id}>
            <Book
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          </div>
        ))
      }
    </div>
  );
};

export default ListBooks;
