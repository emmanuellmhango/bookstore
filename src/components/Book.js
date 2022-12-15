import React /* , { useEffect } */ from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import removeBookData from '../redux/books/removeBookAPI';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const delBook = () => dispatch(removeBookData(id));

  return (
    <div className="book-div">
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={delBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
