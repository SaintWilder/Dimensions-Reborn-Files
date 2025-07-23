import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BattleArena from './pages/BattleArena';
import BakuganCollection from './pages/BakuganCollection';
import CardCollection from './pages/CardCollection';
import AvatarCustomization from './pages/AvatarCustomization';
import WorldMap from './pages/WorldMap';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if user is logged in
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        // Validate token with backend (to be implemented)
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/battle" element={<BattleArena />} />
            <Route path="/bakugan" element={<BakuganCollection />} />
            <Route path="/cards" element={<CardCollection />} />
            <Route path="/avatar" element={<AvatarCustomization />} />
            <Route path="/world" element={<WorldMap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;