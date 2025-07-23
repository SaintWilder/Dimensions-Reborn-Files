import React, { useState, useEffect } from 'react';
import '../../css/pages/BakuganCollection.css';

const BakuganCollection = () => {
  const [bakugan, setBakugan] = useState([]);
  const [filteredBakugan, setFilteredBakugan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState({
    attribute: 'all',
    season: 'all',
    type: 'all',
    search: ''
  });
  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedBakugan, setSelectedBakugan] = useState(null);

  // Mock data for testing
  const mockBakugan = [
    {
      id: 1,
      name: 'Dragonoid',
      attribute: 'pyrus',
      season: 1,
      type: 'regular',
      gPower: 340,
      evolution: null,
      evolvesTo: 'Delta Dragonoid',
      abilities: ['Fire Tornado', 'Boosted Dragon'],
      image: '/assets/images/bakugan/dragonoid.png',
      description: 'A dragon-like Bakugan with powerful fire abilities. It is the Guardian Bakugan of Dan Kuso.'
    },
    {
      id: 2,
      name: 'Tigrerra',
      attribute: 'haos',
      season: 1,
      type: 'regular',
      gPower: 330,
      evolution: null,
      evolvesTo: 'Blade Tigrerra',
      abilities: ['Lightning Shield', 'Velocity Fang'],
      image: '/assets/images/bakugan/tigrerra.png',
      description: 'A tiger-like Bakugan with incredible speed. It is the Guardian Bakugan of Runo Misaki.'
    },
    {
      id: 3,
      name: 'Preyas',
      attribute: 'aquos',
      season: 1,
      type: 'regular',
      gPower: 310,
      evolution: null,
      evolvesTo: 'Preyas Diablo & Angelo',
      abilities: ['Water Refrain', 'Blue Stealth'],
      image: '/assets/images/bakugan/preyas.png',
      description: 'A chameleon-like Bakugan with the ability to change attributes. It is the Guardian Bakugan of Marucho Marukura.'
    },
    {
      id: 4,
      name: 'Hydranoid',
      attribute: 'darkus',
      season: 1,
      type: 'regular',
      gPower: 350,
      evolution: null,
      evolvesTo: 'Dual Hydranoid',
      abilities: ['Chaos of Darkness', 'Gravity Chamber'],
      image: '/assets/images/bakugan/hydranoid.png',
      description: 'A hydra-like Bakugan with multiple heads. It is the Guardian Bakugan of Masquerade and later Alice Gehabich.'
    },
    {
      id: 5,
      name: 'Skyress',
      attribute: 'ventus',
      season: 1,
      type: 'regular',
      gPower: 320,
      evolution: null,
      evolvesTo: 'Storm Skyress',
      abilities: ['Destruction Meteor Storm', 'Green Nobility Violent Wind'],
      image: '/assets/images/bakugan/skyress.png',
      description: 'A phoenix-like Bakugan with powerful wind abilities. It is the Guardian Bakugan of Shun Kazami.'
    },
    {
      id: 6,
      name: 'Gorem',
      attribute: 'subterra',
      season: 1,
      type: 'regular',
      gPower: 360,
      evolution: null,
      evolvesTo: 'Hammer Gorem',
      abilities: ['Grand Impact', 'Taros Hammer'],
      image: '/assets/images/bakugan/gorem.png',
      description: 'A golem-like Bakugan with incredible strength. It is the Guardian Bakugan of Julie Makimoto.'
    },
    {
      id: 7,
      name: 'Neo Dragonoid',
      attribute: 'pyrus',
      season: 2,
      type: 'regular',
      gPower: 400,
      evolution: 'Dragonoid',
      evolvesTo: 'Cross Dragonoid',
      abilities: ['Burning Dragon', 'Fire Shield'],
      image: '/assets/images/bakugan/neo_dragonoid.png',
      description: 'The evolution of Dragonoid with enhanced fire abilities. It is the Guardian Bakugan of Dan Kuso in New Vestroia.'
    },
    {
      id: 8,
      name: 'Percival',
      attribute: 'darkus',
      season: 2,
      type: 'regular',
      gPower: 380,
      evolution: null,
      evolvesTo: 'Knight Percival',
      abilities: ['Darkus Thunder', 'Tri-Gunner'],
      image: '/assets/images/bakugan/percival.png',
      description: 'A knight-like Bakugan with powerful dark abilities. It is the Guardian Bakugan of Ace Grit.'
    },
    {
      id: 9,
      name: 'Elfin',
      attribute: 'aquos',
      season: 2,
      type: 'regular',
      gPower: 370,
      evolution: null,
      evolvesTo: 'Minx Elfin',
      abilities: ['Shooting Stardust', 'Wing Mercury'],
      image: '/assets/images/bakugan/elfin.png',
      description: 'A fairy-like Bakugan with the ability to change attributes. It is the Guardian Bakugan of Marucho Marukura in New Vestroia.'
    },
    {
      id: 10,
      name: 'Hades',
      attribute: 'darkus',
      season: 2,
      type: 'mechanical',
      gPower: 600,
      evolution: null,
      evolvesTo: null,
      abilities: ['Photon Tail', 'Full Burst'],
      image: '/assets/images/bakugan/hades.png',
      description: 'A mechanical Bakugan created by Professor Clay as a copy of Hydranoid. It is used by Shadow Prove.'
    },
    {
      id: 11,
      name: 'Fortress',
      attribute: 'subterra',
      season: 2,
      type: 'trap',
      gPower: 100,
      evolution: null,
      evolvesTo: null,
      abilities: ['Land Twister', 'Gravity Mine'],
      image: '/assets/images/bakugan/fortress.png',
      description: 'A Subterra Trap Bakugan that resembles a fortress. It is used by Mira Clay to support her Bakugan in battle.'
    },
    {
      id: 12,
      name: 'Altair',
      attribute: 'ventus',
      season: 2,
      type: 'mechanical',
      gPower: 550,
      evolution: null,
      evolvesTo: null,
      abilities: ['Spinal Saucer', 'Thunder Flare'],
      image: '/assets/images/bakugan/altair.png',
      description: 'A mechanical Bakugan created by Professor Clay. It is used by Lync Volan.'
    }
  ];

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      setBakugan(mockBakugan);
      setFilteredBakugan(mockBakugan);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Apply filters and sorting
    let result = [...bakugan];
    
    // Apply attribute filter
    if (activeFilters.attribute !== 'all') {
      result = result.filter(b => b.attribute === activeFilters.attribute);
    }
    
    // Apply season filter
    if (activeFilters.season !== 'all') {
      result = result.filter(b => b.season === parseInt(activeFilters.season));
    }
    
    // Apply type filter
    if (activeFilters.type !== 'all') {
      result = result.filter(b => b.type === activeFilters.type);
    }
    
    // Apply search filter
    if (activeFilters.search) {
      const searchLower = activeFilters.search.toLowerCase();
      result = result.filter(b => 
        b.name.toLowerCase().includes(searchLower) || 
        b.description.toLowerCase().includes(searchLower)
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
      case 'gpower-asc':
        result.sort((a, b) => a.gPower - b.gPower);
        break;
      case 'gpower-desc':
        result.sort((a, b) => b.gPower - a.gPower);
        break;
      default:
        break;
    }
    
    setFilteredBakugan(result);
  }, [bakugan, activeFilters, sortOption]);

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

  const handleBakuganClick = (bakugan) => {
    setSelectedBakugan(bakugan);
  };

  const closeDetails = () => {
    setSelectedBakugan(null);
  };

  if (isLoading) {
    return (
      <div className="bakugan-collection loading">
        <div className="loading-spinner"></div>
        <p>Loading Bakugan Collection...</p>
      </div>
    );
  }

  return (
    <div className="bakugan-collection">
      <h1 className="collection-title">My Bakugan Collection</h1>
      
      <div className="collection-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Bakugan..."
            value={activeFilters.search}
            onChange={handleSearch}
          />
        </div>
        
        <div className="filters">
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
          
          <div className="filter-group">
            <label>Season:</label>
            <select 
              value={activeFilters.season} 
              onChange={(e) => handleFilterChange('season', e.target.value)}
            >
              <option value="all">All Seasons</option>
              <option value="1">Season 1</option>
              <option value="2">Season 2</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Type:</label>
            <select 
              value={activeFilters.type} 
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="regular">Regular</option>
              <option value="mechanical">Mechanical</option>
              <option value="trap">Trap</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Sort By:</label>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="gpower-asc">G-Power (Low to High)</option>
              <option value="gpower-desc">G-Power (High to Low)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="collection-stats">
        <div className="stat-item">
          <span className="stat-value">{filteredBakugan.length}</span>
          <span className="stat-label">Bakugan</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'pyrus').length}</span>
          <span className="stat-label pyrus">Pyrus</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'aquos').length}</span>
          <span className="stat-label aquos">Aquos</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'subterra').length}</span>
          <span className="stat-label subterra">Subterra</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'haos').length}</span>
          <span className="stat-label haos">Haos</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'darkus').length}</span>
          <span className="stat-label darkus">Darkus</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{bakugan.filter(b => b.attribute === 'ventus').length}</span>
          <span className="stat-label ventus">Ventus</span>
        </div>
      </div>
      
      {filteredBakugan.length === 0 ? (
        <div className="no-results">
          <p>No Bakugan found matching your filters.</p>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveFilters({ attribute: 'all', season: 'all', type: 'all', search: '' })}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="bakugan-grid">
          {filteredBakugan.map(bakugan => (
            <div 
              key={bakugan.id} 
              className={`bakugan-card ${bakugan.attribute}`}
              onClick={() => handleBakuganClick(bakugan)}
            >
              <div className="bakugan-sphere">
                <div className="attribute-icon"></div>
              </div>
              <h3 className="bakugan-name">{bakugan.name}</h3>
              <div className="bakugan-info">
                <span className="g-power">{bakugan.gPower} G</span>
                <span className="bakugan-type">{bakugan.type}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {selectedBakugan && (
        <div className="bakugan-details-overlay">
          <div className={`bakugan-details ${selectedBakugan.attribute}`}>
            <button className="close-button" onClick={closeDetails}>×</button>
            
            <div className="details-header">
              <div className="bakugan-sphere large">
                <div className="attribute-icon"></div>
              </div>
              <div className="header-info">
                <h2 className="bakugan-name">{selectedBakugan.name}</h2>
                <div className="bakugan-meta">
                  <span className={`attribute-badge ${selectedBakugan.attribute}`}>
                    {selectedBakugan.attribute}
                  </span>
                  <span className="season-badge">Season {selectedBakugan.season}</span>
                  <span className="type-badge">{selectedBakugan.type}</span>
                </div>
              </div>
            </div>
            
            <div className="details-body">
              <div className="stats-section">
                <h3>Stats</h3>
                <div className="stat-bar">
                  <span className="stat-label">G-Power</span>
                  <div className="stat-bar-container">
                    <div 
                      className="stat-bar-fill" 
                      style={{ width: `${(selectedBakugan.gPower / 600) * 100}%` }}
                    ></div>
                  </div>
                  <span className="stat-value">{selectedBakugan.gPower}</span>
                </div>
              </div>
              
              <div className="description-section">
                <h3>Description</h3>
                <p>{selectedBakugan.description}</p>
              </div>
              
              <div className="evolution-section">
                <h3>Evolution</h3>
                {selectedBakugan.evolution ? (
                  <p>Evolved from: <span className="evolution-name">{selectedBakugan.evolution}</span></p>
                ) : (
                  <p>Base form</p>
                )}
                
                {selectedBakugan.evolvesTo ? (
                  <p>Evolves to: <span className="evolution-name">{selectedBakugan.evolvesTo}</span></p>
                ) : (
                  <p>Final evolution</p>
                )}
              </div>
              
              <div className="abilities-section">
                <h3>Abilities</h3>
                <ul className="abilities-list">
                  {selectedBakugan.abilities.map((ability, index) => (
                    <li key={index} className="ability-item">{ability}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="details-footer">
              <button className="btn btn-primary">Add to Battle Team</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BakuganCollection;