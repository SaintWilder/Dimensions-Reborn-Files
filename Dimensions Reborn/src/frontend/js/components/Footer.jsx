import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Bakugan Dimensions</h3>
          <p className="footer-description">
            A fan recreation of the Bakugan Dimensions MMORPG that ran from June 2010 to June 2011.
            This project is not affiliated with Spin Master, Sega Toys, or any official Bakugan property.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/world">World Map</Link></li>
            <li><Link to="/battle">Battle Arena</Link></li>
            <li><Link to="/bakugan">My Bakugan</Link></li>
            <li><Link to="/cards">My Cards</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="#" target="_blank" rel="noopener noreferrer">Game Guide</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Bakugan Database</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Card Database</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Battle Tutorials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Attributes</h3>
          <div className="attribute-icons">
            <div className="attribute pyrus" title="Pyrus"></div>
            <div className="attribute aquos" title="Aquos"></div>
            <div className="attribute subterra" title="Subterra"></div>
            <div className="attribute haos" title="Haos"></div>
            <div className="attribute darkus" title="Darkus"></div>
            <div className="attribute ventus" title="Ventus"></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Bakugan Dimensions Recreation Project. All rights reserved.</p>
        <p>This is a fan project and is not affiliated with or endorsed by the official Bakugan franchise.</p>
      </div>
    </footer>
  );
};

export default Footer;