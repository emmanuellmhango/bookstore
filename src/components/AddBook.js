import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import PostBookData from '../redux/books/addBookAPI';
import idGen from '../redux/books/idGen';

const AddBook = () => {
  const [inputData, setInputData] = useState({
    id: '', title: '', author: '', category: '',
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputData({
      ...inputData,
      item_id: idGen(),
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (inputData.title && inputData.author && inputData.category) {
      const pushBook = PostBookData(inputData);
      if (pushBook) dispatch(addBook(inputData));
      setInputData({
        id: '', title: '', author: '', category: '',
      });
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" value={inputData.title} placeholder="Book title" onChange={onChangeHandler} />
        <input type="text" name="author" value={inputData.author} placeholder="Book author" onChange={onChangeHandler} />
        <input type="text" name="category" value={inputData.category} placeholder="Book Category" onChange={onChangeHandler} />
        <button type="submit" onClick={onClickHandler}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
