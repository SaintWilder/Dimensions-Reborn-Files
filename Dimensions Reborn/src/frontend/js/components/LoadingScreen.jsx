import React from 'react';
import '../css/components/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="bakugan-sphere"></div>
          <div className="attribute-symbols">
            <div className="attribute-symbol pyrus"></div>
            <div className="attribute-symbol aquos"></div>
            <div className="attribute-symbol subterra"></div>
            <div className="attribute-symbol haos"></div>
            <div className="attribute-symbol darkus"></div>
            <div className="attribute-symbol ventus"></div>
          </div>
        </div>
        <h2 className="loading-title">Bakugan Dimensions</h2>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-text">Loading game assets...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;