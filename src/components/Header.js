import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <nav className="header-nav">
      <section className="nav-links">
        <span className="header-title">Bookstore CMS</span>
        <span><Link to="/" className="link">BOOKS</Link></span>
        <span><Link to="/categories" className="link">CATEGORIES</Link></span>
      </section>
      <section className="icon-div">
        <button className="icon-button" type="button">
          <i className="fa fa-user icon" />
        </button>
      </section>
    </nav>
  </header>
);

export default Header;
