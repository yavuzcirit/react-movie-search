import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Movie Explorer</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;