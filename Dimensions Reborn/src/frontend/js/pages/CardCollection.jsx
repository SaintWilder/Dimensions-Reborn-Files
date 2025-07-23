import React, { useState, useEffect } from 'react';
import '../css/pages/CardCollection.css';

const CardCollection = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    cardType: 'all',
    attribute: 'all',
    search: ''
  });
  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('gate');

  // Mock data for testing
  const mockGateCards = [
    {
      id: 1,
      name: 'Energize',
      type: 'gate',
      cardType: 'gold',
      effect: 'Add 100 G-Power to your Bakugan',
      description: 'A powerful Gate Card that boosts your Bakugan\'s G-Power significantly.',
      image: '/assets/images/cards/gate/energize.png',
      season: 1
    },
    {
      id: 2,
      name: 'Character',
      type: 'gate',
      cardType: 'silver',
      effect: 'Double the G-Power of Pyrus Bakugan',
      description: 'A Gate Card that specifically benefits Pyrus Bakugan by doubling their G-Power.',
      image: '/assets/images/cards/gate/character.png',
      season: 1
    },
    {
      id: 3,
      name: 'Quicksand',
      type: 'gate',
      cardType: 'bronze',
      effect: 'Subtract 100 G-Power from opponent',
      description: 'A strategic Gate Card that weakens your opponent\'s Bakugan.',
      image: '/assets/images/cards/gate/quicksand.png',
      season: 1
    },
    {
      id: 4,
      name: 'Triple Battle',
      type: 'gate',
      cardType: 'gold',
      effect: 'Both players can roll up to 3 Bakugan',
      description: 'An exciting Gate Card that allows both players to use multiple Bakugan in a single battle.',
      image: '/assets/images/cards/gate/triple_battle.png',
      season: 2
    },
    {
      id: 5,
      name: 'Attribute Change',
      type: 'gate',
      cardType: 'silver',
      effect: 'Change the attribute of your Bakugan',
      description: 'A versatile Gate Card that allows you to change your Bakugan\'s attribute to gain advantage.',
      image: '/assets/images/cards/gate/attribute_change.png',
      season: 2
    },
    {
      id: 6,
      name: 'Power Drain',
      type: 'gate',
      cardType: 'bronze',
      effect: 'Transfer 100 G-Power from opponent to your Bakugan',
      description: 'A strategic Gate Card that not only weakens your opponent but also strengthens your Bakugan.',
      image: '/assets/images/cards/gate/power_drain.png',
      season: 2
    }
  ];

  const mockAbilityCards = [
    {
      id: 7,
      name: 'Fire Tornado',
      type: 'ability',
      cardType: 'red',
      attribute: 'pyrus',
      effect: 'Add 100 G-Power to your Pyrus Bakugan',
      description: 'A powerful Pyrus ability that significantly increases your Bakugan\'s G-Power.',
      image: '/assets/images/cards/ability/fire_tornado.png',
      season: 1
    },
    {
      id: 8,
      name: 'Lightning Shield',
      type: 'ability',
      cardType: 'green',
      attribute: 'haos',
      effect: 'Nullify opponent\'s ability card',
      description: 'A defensive Haos ability that protects your Bakugan from opponent\'s ability effects.',
      image: '/assets/images/cards/ability/lightning_shield.png',
      season: 1
    },
    {
      id: 9,
      name: 'Aqua Cyclone',
      type: 'ability',
      cardType: 'blue',
      attribute: 'aquos',
      effect: 'Subtract 50 G-Power from opponent',
      description: 'An Aquos ability that weakens your opponent\'s Bakugan.',
      image: '/assets/images/cards/ability/aqua_cyclone.png',
      season: 1
    },
    {
      id: 10,
      name: 'Earth Power',
      type: 'ability',
      cardType: 'red',
      attribute: 'subterra',
      effect: 'Add 80 G-Power to your Subterra Bakugan',
      description: 'A Subterra ability that boosts your Bakugan\'s power in battle.',
      image: '/assets/images/cards/ability/earth_power.png',
      season: 1
    },
    {
      id: 11,
      name: 'Darkus Gravity',
      type: 'ability',
      cardType: 'blue',
      attribute: 'darkus',
      effect: 'Prevent opponent from activating Gate Card effects',
      description: 'A strategic Darkus ability that neutralizes Gate Card advantages.',
      image: '/assets/images/cards/ability/darkus_gravity.png',
      season: 2
    },
    {
      id: 12,
      name: 'Ventus Storm',
      type: 'ability',
      cardType: 'green',
      attribute: 'ventus',
      effect: 'Switch G-Power between your Bakugan and opponent\'s',
      description: 'A tricky Ventus ability that can turn the tide of battle by swapping G-Power values.',
      image: '/assets/images/cards/ability/ventus_storm.png',
      season: 2
    }
  ];

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      const allCards = [...mockGateCards, ...mockAbilityCards];
      setCards(allCards);
      filterCards(allCards, activeTab);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    filterCards(cards, activeTab);
  }, [activeFilters, sortOption, activeTab]);

  const filterCards = (allCards, tab) => {
    // First filter by tab (gate or ability)
    let result = allCards.filter(card => {
      if (tab === 'gate') return card.type === 'gate';
      if (tab === 'ability') return card.type === 'ability';
      return true;
    });
    
    // Apply card type filter
    if (activeFilters.cardType !== 'all') {
      result = result.filter(card => card.cardType === activeFilters.cardType);
    }
    
    // Apply attribute filter (only for ability cards)
    if (tab === 'ability' && activeFilters.attribute !== 'all') {
      result = result.filter(card => card.attribute === activeFilters.attribute);
    }
    
    // Apply search filter
    if (activeFilters.search) {
      const searchLower = activeFilters.search.toLowerCase();
      result = result.filter(card => 
        card.name.toLowerCase().includes(searchLower) || 
        card.effect.toLowerCase().includes(searchLower) ||
        card.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'season-asc':
        result.sort((a, b) => a.season - b.season);
        break;
      case 'season-desc':
        result.sort((a, b) => b.season - a.season);
        break;
      default:
        break;
    }
    
    setFilteredCards(result);
  };

  const handleFilterChange = (filterType, value) => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: value
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (e) => {
    setActiveFilters({
      ...activeFilters,
      search: e.target.value
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset attribute filter when switching tabs
    if (tab === 'gate') {
      setActiveFilters({
        ...activeFilters,
        attribute: 'all'
      });
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeDetails = () => {
    setSelectedCard(null);
  };

  if (isLoading) {
    return (
      <div className="card-collection loading">
        <div className="loading-spinner"></div>
        <p>Loading Card Collection...</p>
      </div>
    );
  }

  return (
    <div className="card-collection">
      <h1 className="collection-title">My Card Collection</h1>
      
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'gate' ? 'active' : ''}`}
          onClick={() => handleTabChange('gate')}
        >
          Gate Cards
        </button>
        <button 
          className={`tab-button ${activeTab === 'ability' ? 'active' : ''}`}
          onClick={() => handleTabChange('ability')}
        >
          Ability Cards
        </button>
      </div>
      
      <div className="collection-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search cards..."
            value={activeFilters.search}
            onChange={handleSearch}
          />
        </div>
        
        <div className="filters">
          {activeTab === 'gate' && (
            <div className="filter-group">
              <label>Card Type:</label>
              <select 
                value={activeFilters.cardType} 
                onChange={(e) => handleFilterChange('cardType', e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>
              </select>
            </div>
          )}
          
          {activeTab === 'ability' && (
            <>
              <div className="filter-group">
                <label>Card Type:</label>
                <select 
                  value={activeFilters.cardType} 
                  onChange={(e) => handleFilterChange('cardType', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Attribute:</label>
                <select 
                  value={activeFilters.attribute} 
                  onChange={(e) => handleFilterChange('attribute', e.target.value)}
                >
                  <option value="all">All Attributes</option>
                  <option value="pyrus">Pyrus</option>
                  <option value="aquos">Aquos</option>
                  <option value="subterra">Subterra</option>
                  <option value="haos">Haos</option>
                  <option value="darkus">Darkus</option>
                  <option value="ventus">Ventus</option>
                </select>
              </div>
            </>
          )}
          
          <div className="filter-group">
            <label>Sort By:</label>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="season-asc">Season (Old to New)</option>
              <option value="season-desc">Season (New to Old)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="collection-stats">
        <div className="stat-item">
          <span className="stat-value">{filteredCards.length}</span>
          <span className="stat-label">Cards</span>
        </div>
        
        {activeTab === 'gate' && (
          <>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'gate' && c.cardType === 'gold').length}</span>
              <span className="stat-label gold">Gold</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'gate' && c.cardType === 'silver').length}</span>
              <span className="stat-label silver">Silver</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'gate' && c.cardType === 'bronze').length}</span>
              <span className="stat-label bronze">Bronze</span>
            </div>
          </>
        )}
        
        {activeTab === 'ability' && (
          <>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'ability' && c.cardType === 'red').length}</span>
              <span className="stat-label red">Red</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'ability' && c.cardType === 'green').length}</span>
              <span className="stat-label green">Green</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{cards.filter(c => c.type === 'ability' && c.cardType === 'blue').length}</span>
              <span className="stat-label blue">Blue</span>
            </div>
          </>
        )}
      </div>
      
      {filteredCards.length === 0 ? (
        <div className="no-results">
          <p>No cards found matching your filters.</p>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveFilters({ type: 'all', cardType: 'all', attribute: 'all', search: '' })}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="card-grid">
          {filteredCards.map(card => (
            <div 
              key={card.id} 
              className={`card-item ${card.type} ${card.cardType} ${card.attribute || ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-image">
                <div className="card-placeholder"></div>
              </div>
              <h3 className="card-name">{card.name}</h3>
              <div className="card-info">
                <span className="card-type">{card.cardType}</span>
                {card.attribute && <span className={`card-attribute ${card.attribute}`}>{card.attribute}</span>}
                <span className="card-season">S{card.season}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {selectedCard && (
        <div className="card-details-overlay">
          <div className={`card-details ${selectedCard.type} ${selectedCard.cardType}`}>
            <button className="close-button" onClick={closeDetails}>×</button>
            
            <div className="details-header">
              <div className="card-image-large">
                <div className={`card-placeholder-large ${selectedCard.cardType} ${selectedCard.attribute || ''}`}></div>
              </div>
              <div className="header-info">
                <h2 className="card-name">{selectedCard.name}</h2>
                <div className="card-meta">
                  <span className={`card-type-badge ${selectedCard.cardType}`}>
                    {selectedCard.cardType}
                  </span>
                  {selectedCard.attribute && (
                    <span className={`card-attribute-badge ${selectedCard.attribute}`}>
                      {selectedCard.attribute}
                    </span>
                  )}
                  <span className="card-season-badge">Season {selectedCard.season}</span>
                </div>
              </div>
            </div>
            
            <div className="details-body">
              <div className="effect-section">
                <h3>Effect</h3>
                <p className="effect-text">{selectedCard.effect}</p>
              </div>
              
              <div className="description-section">
                <h3>Description</h3>
                <p>{selectedCard.description}</p>
              </div>
              
              <div className="usage-section">
                <h3>Strategic Usage</h3>
                <p>
                  {selectedCard.type === 'gate' 
                    ? `This Gate Card is best used when you want to ${selectedCard.effect.toLowerCase()}. Place it strategically to maximize its effect.`
                    : `This Ability Card works best with ${selectedCard.attribute} Bakugan and can be used to ${selectedCard.effect.toLowerCase()}.`
                  }
                </p>
              </div>
            </div>
            
            <div className="details-footer">
              <button className="btn btn-primary">Add to Battle Deck</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCollection;