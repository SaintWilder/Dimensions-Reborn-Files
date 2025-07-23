import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/components/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="Bakugan Dimensions" className="logo-image" />
            <span className="logo-text">Bakugan Dimensions</span>
          </Link>
        </div>

        <div className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/world" className="nav-link" onClick={() => setMenuOpen(false)}>World Map</Link>
                </li>
                <li className="nav-item">
                  <Link to="/battle" className="nav-link" onClick={() => setMenuOpen(false)}>Battle Arena</Link>
                </li>
                <li className="nav-item">
                  <Link to="/bakugan" className="nav-link" onClick={() => setMenuOpen(false)}>My Bakugan</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cards" className="nav-link" onClick={() => setMenuOpen(false)}>My Cards</Link>
                </li>
                <li className="nav-item">
                  <Link to="/avatar" className="nav-link" onClick={() => setMenuOpen(false)}>Avatar</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link logout-btn" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link register-btn" onClick={() => setMenuOpen(false)}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;