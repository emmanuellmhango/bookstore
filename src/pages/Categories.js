import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </section>
  );
};

export default Categories;
