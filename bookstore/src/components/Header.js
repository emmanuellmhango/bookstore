import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      <button type="button">
        <span />
        <span />
        {' '}
        what button
        <span />
      </button>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
