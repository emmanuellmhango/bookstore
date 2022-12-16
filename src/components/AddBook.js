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
    <div className="book-form">
      <div className="rule">
        &nbsp;
      </div>
      <div className="form-div">
        <span className="form-title">ADD NEW BOOK</span>
        <form className="form">
          <input type="text" className="input-field" name="title" value={inputData.title} placeholder="Book title" onChange={onChangeHandler} required />
          <input type="text" className="input-field" name="author" value={inputData.author} placeholder="Book author" onChange={onChangeHandler} required />
          <select className="input-field-select" value={inputData.category} onChange={onChangeHandler} name="category">
            <option>Book Category</option>
            <option>Fiction</option>
            <option>Comic</option>
            <option>Thriller</option>
            <option>Adventurous</option>
            <option>History</option>
            <option>Science</option>
          </select>
          <button type="submit" className="form-submit-btn" onClick={onClickHandler}>ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
