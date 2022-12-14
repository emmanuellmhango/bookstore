import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="header-nav">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link"><Link to="/">BOOKS</Link></li>
        <li className="link"><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
