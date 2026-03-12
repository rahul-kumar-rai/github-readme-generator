import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <FaGithub className="logo-icon" />
            <h1>GitHub Profile README Generator</h1>
          </div>
          <p className="tagline">Create stunning GitHub profiles in minutes</p>
        </div>
      </div>
    </header>
  );
};

export default Header;