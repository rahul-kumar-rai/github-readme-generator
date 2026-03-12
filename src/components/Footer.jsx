import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Made with <FaHeart className="heart-icon" /> Rahul Kumar Rai
          </p>
          <a 
            href="https://github.com/rahul-kumar-rai/github-readme-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> Star on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;