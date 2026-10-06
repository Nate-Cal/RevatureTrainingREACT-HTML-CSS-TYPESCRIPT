import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;