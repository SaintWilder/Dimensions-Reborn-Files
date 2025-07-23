import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/pages/AuthPages.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real application, this would be an API call
      // For now, we'll simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store token in localStorage (in a real app, this would come from the server)
      localStorage.setItem('token', 'fake-jwt-token');
      
      // Update login state
      setIsLoggedIn(true);
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      setErrors({
        general: 'Login failed. Please check your credentials and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-header">
            <h1 className="auth-title">Login to Bakugan Dimensions</h1>
            <p className="auth-subtitle">Enter your credentials to access your account</p>
          </div>
          
          {errors.general && (
            <div className="auth-error-message">
              {errors.general}
            </div>
          )}
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="input-error">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="input-error">{errors.password}</div>}
            </div>
            
            <div className="form-group form-actions">
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary auth-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
        
        <div className="auth-image">
          <div className="attribute-symbols">
            <div className="attribute-symbol pyrus"></div>
            <div className="attribute-symbol aquos"></div>
            <div className="attribute-symbol subterra"></div>
            <div className="attribute-symbol haos"></div>
            <div className="attribute-symbol darkus"></div>
            <div className="attribute-symbol ventus"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;