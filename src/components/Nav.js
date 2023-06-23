import React from 'react';
import '../style/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="nav">
      <div className="logo">
        <p>Math Magicians</p>
      </div>
      <ul className="nav-items">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/math">Calculator</Link></li>
        <li className="nav-link"><Link to="/quote">Quote</Link></li>
      </ul>
    </header>
  );
}

export default Nav;
