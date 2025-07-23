import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Bakugan Dimensions</h1>
          <p className="hero-subtitle">
            Enter the world of Bakugan and battle with your favorite Bakugan from Seasons 1 and 2!
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Create Account</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="bakugan-sphere-large"></div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Game Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon pyrus-bg"></div>
            <h3 className="feature-title">Authentic Bakugan</h3>
            <p className="feature-description">
              Collect and battle with over 120 Bakugan from Seasons 1-2, including regular Bakugan, Trap Bakugan, and mechanical Bakugan.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon aquos-bg"></div>
            <h3 className="feature-title">Strategic Battles</h3>
            <p className="feature-description">
              Engage in turn-based battles using Gate Cards, Ability Cards, and attribute advantages to defeat your opponents.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon subterra-bg"></div>
            <h3 className="feature-title">Collection System</h3>
            <p className="feature-description">
              Build your collection of Bakugan and cards, evolve your Bakugan, and create the ultimate battle team.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon haos-bg"></div>
            <h3 className="feature-title">Multiple Locations</h3>
            <p className="feature-description">
              Explore School, Park, Downtown, Residential areas, and Bakugan Interspace to find battles and challenges.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon darkus-bg"></div>
            <h3 className="feature-title">Player Progression</h3>
            <p className="feature-description">
              Gain experience and rank up through battles, unlocking new Bakugan, cards, and customization options.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon ventus-bg"></div>
            <h3 className="feature-title">Avatar Customization</h3>
            <p className="feature-description">
              Create and customize your own avatar with a variety of clothing, accessories, and styles.
            </p>
          </div>
        </div>
      </section>

      <section className="attributes-section">
        <h2 className="section-title">Bakugan Attributes</h2>
        <div className="attributes-grid">
          <div className="attribute-card pyrus">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Pyrus</h3>
            <p className="attribute-description">
              Fire attribute. Strong against Ventus, weak against Aquos.
            </p>
          </div>
          
          <div className="attribute-card aquos">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Aquos</h3>
            <p className="attribute-description">
              Water attribute. Strong against Pyrus, weak against Ventus.
            </p>
          </div>
          
          <div className="attribute-card subterra">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Subterra</h3>
            <p className="attribute-description">
              Earth attribute. Strong against Darkus, weak against Haos.
            </p>
          </div>
          
          <div className="attribute-card haos">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Haos</h3>
            <p className="attribute-description">
              Light attribute. Strong against Subterra, weak against Darkus.
            </p>
          </div>
          
          <div className="attribute-card darkus">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Darkus</h3>
            <p className="attribute-description">
              Darkness attribute. Strong against Haos, weak against Subterra.
            </p>
          </div>
          
          <div className="attribute-card ventus">
            <div className="attribute-icon"></div>
            <h3 className="attribute-name">Ventus</h3>
            <p className="attribute-description">
              Wind attribute. Strong against Aquos, weak against Pyrus.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Battle?</h2>
          <p className="cta-description">
            Create your account now and start your journey in the world of Bakugan Dimensions!
          </p>
          <Link to="/register" className="btn btn-primary cta-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;