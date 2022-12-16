import React /* , { useEffect } */ from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import removeBookData from '../redux/books/removeBookAPI';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const delBook = () => dispatch(removeBookData(id));
  const percentage = 66;
  return (
    <div className="book-div">
      <div className="book-data">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <ul className="book-footer-links">
          <li><NavLink className="footer-link">Comments</NavLink></li>
          <li className="space-li"> | </li>
          <li><NavLink className="footer-link" onClick={delBook}>Remove</NavLink></li>
          <li className="space-li"> | </li>
          <li><NavLink className="footer-link">Edit</NavLink></li>
        </ul>
      </div>
      <div className="progress">
        <ul className="progress-div">
          <li>
            <div className="progress-bar">
              <ul className="circle-progress-container">
                <li>
                  <CircularProgressbar className="circle-progress" value={percentage} text={`${percentage}%`} />
                </li>
                <li className="progress-description">
                  <span className="perc">64%</span>
                  <span className="descr">Completed</span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="line">
              &nbsp;
            </div>
          </li>
          <li className="last-div">
            <div>
              <ul className="details">
                <li className="descr-chap">CURRENT CHAPTER</li>
                <li className="margin-up">Chapter 17</li>
                <li className="margin-up-btn">
                  <button type="button" className="form-submit-btn">
                    UPDATE PROGRESS
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
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
