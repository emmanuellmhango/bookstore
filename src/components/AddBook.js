import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [inputData, setInputData] = useState({ id: '', title: '', author: '' });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputData({
      ...inputData,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (inputData.title && inputData.author) {
      dispatch(addBook(inputData));
      setInputData({ id: '', title: '', author: '' });
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={inputData.title} placeholder="Book title" onChange={onChangeHandler} />
        <input type="text" name="author" value={inputData.author} placeholder="Book author" onChange={onChangeHandler} />
        <button type="submit" onClick={onClickHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
