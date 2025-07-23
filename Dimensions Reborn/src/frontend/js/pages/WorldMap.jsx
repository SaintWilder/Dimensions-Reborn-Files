import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/pages/WorldMap.css';

const WorldMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  // Mock data for locations
  const locations = [
    {
      id: 1,
      name: 'Bakugan Interspace',
      description: 'The central hub for Bakugan battles and player interactions. Here you can find battle arenas, shops, and other players.',
      features: ['Battle Arena', 'Card Shop', 'Bakugan Shop', 'Rankings Board'],
      position: { x: 50, y: 50 },
      image: '/assets/images/locations/interspace.png',
      bgColor: 'linear-gradient(135deg, #5e35b1, #3498db)'
    },
    {
      id: 2,
      name: 'School',
      description: 'A place to learn about Bakugan, their attributes, and battle strategies. You can also battle other students here.',
      features: ['Training Battles', 'Bakugan Library', 'Attribute Studies', 'Strategy Classes'],
      position: { x: 25, y: 30 },
      image: '/assets/images/locations/school.png',
      bgColor: 'linear-gradient(135deg, #1e88e5, #43a047)'
    },
    {
      id: 3,
      name: 'Park',
      description: 'A relaxing area where you can practice rolling your Bakugan and meet other players in a casual setting.',
      features: ['Practice Field', 'Casual Battles', 'Bakugan Trading', 'Events'],
      position: { x: 75, y: 35 },
      image: '/assets/images/locations/park.png',
      bgColor: 'linear-gradient(135deg, #43a047, #fdd835)'
    },
    {
      id: 4,
      name: 'Downtown',
      description: 'The bustling center of the city with shops, tournaments, and special events.',
      features: ['Tournament Arena', 'Premium Card Shop', 'Rare Bakugan Shop', 'Special Events'],
      position: { x: 65, y: 70 },
      image: '/assets/images/locations/downtown.png',
      bgColor: 'linear-gradient(135deg, #e53935, #fdd835)'
    },
    {
      id: 5,
      name: 'Residential Area',
      description: 'Where players have their homes. You can customize your home and invite friends over.',
      features: ['Home Customization', 'Friend Visits', 'Collection Display', 'Private Battles'],
      position: { x: 30, y: 65 },
      image: '/assets/images/locations/residential.png',
      bgColor: 'linear-gradient(135deg, #8d6e63, #e53935)'
    }
  ];

  useEffect(() => {
    // Simulate loading the map
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowLocationInfo(true);
  };

  const closeLocationInfo = () => {
    setShowLocationInfo(false);
    setTimeout(() => {
      setSelectedLocation(null);
    }, 300);
  };

  const moveToLocation = (location) => {
    // Animate player movement to the location
    setPlayerPosition(location.position);
    
    // Show location info after arriving
    setTimeout(() => {
      setSelectedLocation(location);
      setShowLocationInfo(true);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="world-map loading">
        <div className="loading-spinner"></div>
        <p>Loading World Map...</p>
      </div>
    );
  }

  return (
    <div className="world-map">
      <h1 className="map-title">Bakugan Dimensions World Map</h1>
      
      <div className="map-container">
        <div className="map-background">
          <div className="map-grid">
            {/* Grid lines for visual reference */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${i * 10}%` }}></div>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${i * 10}%` }}></div>
            ))}
          </div>
          
          {/* Map locations */}
          {locations.map(location => (
            <div
              key={location.id}
              className="map-location"
              style={{
                left: `${location.position.x}%`,
                top: `${location.position.y}%`
              }}
              onClick={() => handleLocationClick(location)}
            >
              <div className="location-marker">
                <div className="location-icon"></div>
                <div className="location-pulse"></div>
              </div>
              <div className="location-label">{location.name}</div>
            </div>
          ))}
          
          {/* Player avatar on the map */}
          <div 
            className="player-avatar"
            style={{
              left: `${playerPosition.x}%`,
              top: `${playerPosition.y}%`
            }}
          >
            <div className="avatar-icon"></div>
          </div>
        </div>
        
        {/* Location list for easy navigation */}
        <div className="location-list">
          <h3>Locations</h3>
          <ul>
            {locations.map(location => (
              <li 
                key={location.id} 
                className={selectedLocation && selectedLocation.id === location.id ? 'active' : ''}
                onClick={() => moveToLocation(location)}
              >
                <span className="location-name">{location.name}</span>
                <span className="location-arrow">→</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Location information overlay */}
      {selectedLocation && (
        <div className={`location-info ${showLocationInfo ? 'show' : ''}`}>
          <div 
            className="location-info-content"
            style={{ background: selectedLocation.bgColor }}
          >
            <button className="close-button" onClick={closeLocationInfo}>×</button>
            
            <div className="location-header">
              <div className="location-image">
                <div className="image-placeholder"></div>
              </div>
              <h2 className="location-title">{selectedLocation.name}</h2>
            </div>
            
            <div className="location-description">
              <p>{selectedLocation.description}</p>
            </div>
            
            <div className="location-features">
              <h3>Features</h3>
              <ul>
                {selectedLocation.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="location-actions">
              <button className="btn btn-primary" onClick={closeLocationInfo}>
                Travel to {selectedLocation.name}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Map controls */}
      <div className="map-controls">
        <button className="map-control-btn zoom-in">+</button>
        <button className="map-control-btn zoom-out">-</button>
        <button className="map-control-btn reset">
          <span className="reset-icon">⟳</span>
        </button>
      </div>
    </div>
  );
};

export default WorldMap;