import React, { useState, useEffect } from 'react';
import '../../css/pages/BattleArena.css';

const BattleArena = () => {
  const [battleState, setBattleState] = useState('preparation'); // preparation, gateCard, roll, battle, result
  const [selectedBakugan, setSelectedBakugan] = useState([]);
  const [selectedGateCards, setSelectedGateCards] = useState([]);
  const [selectedAbilityCards, setSelectedAbilityCards] = useState([]);
  const [opponent, setOpponent] = useState(null);
  const [activeGateCard, setActiveGateCard] = useState(null);
  const [activeBakugan, setActiveBakugan] = useState(null);
  const [opponentBakugan, setOpponentBakugan] = useState(null);
  const [battleResult, setBattleResult] = useState(null);
  const [gateCardWins, setGateCardWins] = useState({ player: 0, opponent: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for testing
  const mockBakugan = [
    { id: 1, name: 'Dragonoid', attribute: 'pyrus', gPower: 340, image: '/assets/images/bakugan/dragonoid.png' },
    { id: 2, name: 'Tigrerra', attribute: 'haos', gPower: 330, image: '/assets/images/bakugan/tigrerra.png' },
    { id: 3, name: 'Preyas', attribute: 'aquos', gPower: 310, image: '/assets/images/bakugan/preyas.png' }
  ];

  const mockGateCards = [
    { id: 1, name: 'Energize', type: 'gold', effect: 'Add 100 G-Power to your Bakugan', image: '/assets/images/cards/gate/energize.png' },
    { id: 2, name: 'Character', type: 'silver', effect: 'Double the G-Power of Pyrus Bakugan', image: '/assets/images/cards/gate/character.png' },
    { id: 3, name: 'Quicksand', type: 'bronze', effect: 'Subtract 100 G-Power from opponent', image: '/assets/images/cards/gate/quicksand.png' }
  ];

  const mockAbilityCards = [
    { id: 1, name: 'Fire Tornado', type: 'red', attribute: 'pyrus', effect: 'Add 100 G-Power to your Pyrus Bakugan', image: '/assets/images/cards/ability/fire_tornado.png' },
    { id: 2, name: 'Lightning Shield', type: 'green', attribute: 'haos', effect: 'Nullify opponent\'s ability card', image: '/assets/images/cards/ability/lightning_shield.png' },
    { id: 3, name: 'Aqua Cyclone', type: 'blue', attribute: 'aquos', effect: 'Subtract 50 G-Power from opponent', image: '/assets/images/cards/ability/aqua_cyclone.png' }
  ];

  const mockOpponents = [
    { id: 1, name: 'Dan', avatar: '/assets/images/avatars/dan.png', bakugan: [{ id: 4, name: 'Neo Dragonoid', attribute: 'pyrus', gPower: 400, image: '/assets/images/bakugan/neo_dragonoid.png' }] },
    { id: 2, name: 'Shun', avatar: '/assets/images/avatars/shun.png', bakugan: [{ id: 5, name: 'Skyress', attribute: 'ventus', gPower: 380, image: '/assets/images/bakugan/skyress.png' }] },
    { id: 3, name: 'Marucho', avatar: '/assets/images/avatars/marucho.png', bakugan: [{ id: 6, name: 'Angelo Preyas', attribute: 'aquos', gPower: 350, image: '/assets/images/bakugan/angelo_preyas.png' }] }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleBakuganSelect = (bakugan) => {
    if (selectedBakugan.find(b => b.id === bakugan.id)) {
      setSelectedBakugan(selectedBakugan.filter(b => b.id !== bakugan.id));
    } else if (selectedBakugan.length < 3) {
      setSelectedBakugan([...selectedBakugan, bakugan]);
    }
  };

  const handleGateCardSelect = (card) => {
    if (selectedGateCards.find(c => c.id === card.id)) {
      setSelectedGateCards(selectedGateCards.filter(c => c.id !== card.id));
    } else if (selectedGateCards.length < 3) {
      setSelectedGateCards([...selectedGateCards, card]);
    }
  };

  const handleAbilityCardSelect = (card) => {
    if (selectedAbilityCards.find(c => c.id === card.id)) {
      setSelectedAbilityCards(selectedAbilityCards.filter(c => c.id !== card.id));
    } else if (selectedAbilityCards.length < 3) {
      setSelectedAbilityCards([...selectedAbilityCards, card]);
    }
  };

  const handleOpponentSelect = (opponent) => {
    setOpponent(opponent);
  };

  const startBattle = () => {
    if (selectedBakugan.length === 3 && selectedGateCards.length === 3 && selectedAbilityCards.length === 3 && opponent) {
      setBattleState('gateCard');
    }
  };

  const placeGateCard = (card) => {
    setActiveGateCard(card);
    setBattleState('roll');
  };

  const rollBakugan = (bakugan) => {
    setActiveBakugan(bakugan);
    
    // Simulate opponent's roll
    const randomIndex = Math.floor(Math.random() * opponent.bakugan.length);
    setOpponentBakugan(opponent.bakugan[randomIndex]);
    
    setBattleState('battle');
    
    // Simulate battle calculation
    setTimeout(() => {
      const playerGPower = bakugan.gPower;
      const opponentGPower = opponent.bakugan[randomIndex].gPower;
      
      if (playerGPower > opponentGPower) {
        setBattleResult('win');
        setGateCardWins({ ...gateCardWins, player: gateCardWins.player + 1 });
      } else if (playerGPower < opponentGPower) {
        setBattleResult('lose');
        setGateCardWins({ ...gateCardWins, opponent: gateCardWins.opponent + 1 });
      } else {
        setBattleResult('draw');
      }
      
      // Check if the battle is over
      setTimeout(() => {
        if (gateCardWins.player === 2) {
          setBattleState('result');
          setBattleResult('victory');
        } else if (gateCardWins.opponent === 2) {
          setBattleState('result');
          setBattleResult('defeat');
        } else {
          // Reset for next round
          setBattleState('gateCard');
          setActiveGateCard(null);
          setActiveBakugan(null);
          setOpponentBakugan(null);
        }
      }, 2000);
    }, 2000);
  };

  const resetBattle = () => {
    setBattleState('preparation');
    setSelectedBakugan([]);
    setSelectedGateCards([]);
    setSelectedAbilityCards([]);
    setOpponent(null);
    setActiveGateCard(null);
    setActiveBakugan(null);
    setOpponentBakugan(null);
    setBattleResult(null);
    setGateCardWins({ player: 0, opponent: 0 });
  };

  if (isLoading) {
    return (
      <div className="battle-arena loading">
        <div className="loading-spinner"></div>
        <p>Loading Battle Arena...</p>
      </div>
    );
  }

  return (
    <div className="battle-arena">
      <h1 className="battle-title">Battle Arena</h1>
      
      {battleState === 'preparation' && (
        <div className="battle-preparation">
          <h2 className="section-title">Prepare for Battle</h2>
          
          <div className="preparation-section">
            <h3>Select Your Bakugan (3)</h3>
            <div className="selection-grid">
              {mockBakugan.map(bakugan => (
                <div 
                  key={bakugan.id} 
                  className={`selection-item bakugan-item ${bakugan.attribute} ${selectedBakugan.find(b => b.id === bakugan.id) ? 'selected' : ''}`}
                  onClick={() => handleBakuganSelect(bakugan)}
                >
                  <div className="item-image">
                    <div className="bakugan-sphere"></div>
                  </div>
                  <div className="item-details">
                    <h4>{bakugan.name}</h4>
                    <p className="attribute-label">{bakugan.attribute}</p>
                    <p className="g-power">{bakugan.gPower} G</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="preparation-section">
            <h3>Select Gate Cards (3)</h3>
            <div className="selection-grid">
              {mockGateCards.map(card => (
                <div 
                  key={card.id} 
                  className={`selection-item card-item gate-card ${card.type} ${selectedGateCards.find(c => c.id === card.id) ? 'selected' : ''}`}
                  onClick={() => handleGateCardSelect(card)}
                >
                  <div className="item-image">
                    <div className="card-placeholder"></div>
                  </div>
                  <div className="item-details">
                    <h4>{card.name}</h4>
                    <p className="card-type">{card.type}</p>
                    <p className="card-effect">{card.effect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="preparation-section">
            <h3>Select Ability Cards (3)</h3>
            <div className="selection-grid">
              {mockAbilityCards.map(card => (
                <div 
                  key={card.id} 
                  className={`selection-item card-item ability-card ${card.type} ${selectedAbilityCards.find(c => c.id === card.id) ? 'selected' : ''}`}
                  onClick={() => handleAbilityCardSelect(card)}
                >
                  <div className="item-image">
                    <div className="card-placeholder"></div>
                  </div>
                  <div className="item-details">
                    <h4>{card.name}</h4>
                    <p className="card-type">{card.type} - {card.attribute}</p>
                    <p className="card-effect">{card.effect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="preparation-section">
            <h3>Select Opponent</h3>
            <div className="selection-grid opponents-grid">
              {mockOpponents.map(opp => (
                <div 
                  key={opp.id} 
                  className={`selection-item opponent-item ${opponent && opponent.id === opp.id ? 'selected' : ''}`}
                  onClick={() => handleOpponentSelect(opp)}
                >
                  <div className="item-image">
                    <div className="avatar-placeholder"></div>
                  </div>
                  <div className="item-details">
                    <h4>{opp.name}</h4>
                    <p>Bakugan: {opp.bakugan.map(b => b.name).join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="battle-actions">
            <button 
              className="btn btn-primary start-battle-btn"
              disabled={!(selectedBakugan.length === 3 && selectedGateCards.length === 3 && selectedAbilityCards.length === 3 && opponent)}
              onClick={startBattle}
            >
              Start Battle
            </button>
          </div>
        </div>
      )}
      
      {battleState === 'gateCard' && (
        <div className="battle-gate-card">
          <h2 className="section-title">Place Gate Card</h2>
          
          <div className="battle-status">
            <div className="player-status">
              <h3>You</h3>
              <p>Gate Cards Won: {gateCardWins.player}</p>
            </div>
            <div className="vs-indicator">VS</div>
            <div className="opponent-status">
              <h3>{opponent.name}</h3>
              <p>Gate Cards Won: {gateCardWins.opponent}</p>
            </div>
          </div>
          
          <div className="gate-card-selection">
            {selectedGateCards.map(card => (
              <div 
                key={card.id} 
                className={`gate-card-option ${card.type}`}
                onClick={() => placeGateCard(card)}
              >
                <div className="card-placeholder"></div>
                <h4>{card.name}</h4>
                <p>{card.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {battleState === 'roll' && (
        <div className="battle-roll">
          <h2 className="section-title">Roll Your Bakugan</h2>
          
          <div className="active-gate-card">
            <div className={`gate-card-display ${activeGateCard.type}`}>
              <h3>{activeGateCard.name}</h3>
              <p>{activeGateCard.effect}</p>
            </div>
          </div>
          
          <div className="bakugan-selection">
            {selectedBakugan.map(bakugan => (
              <div 
                key={bakugan.id} 
                className={`bakugan-option ${bakugan.attribute}`}
                onClick={() => rollBakugan(bakugan)}
              >
                <div className="bakugan-sphere"></div>
                <h4>{bakugan.name}</h4>
                <p>{bakugan.gPower} G</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {battleState === 'battle' && (
        <div className="battle-phase">
          <h2 className="section-title">Battle Phase</h2>
          
          <div className="active-gate-card">
            <div className={`gate-card-display ${activeGateCard.type}`}>
              <h3>{activeGateCard.name}</h3>
              <p>{activeGateCard.effect}</p>
            </div>
          </div>
          
          <div className="battle-field">
            <div className="player-side">
              <div className={`bakugan-battle ${activeBakugan.attribute}`}>
                <div className="bakugan-model"></div>
                <h3>{activeBakugan.name}</h3>
                <div className="g-power-display">{activeBakugan.gPower} G</div>
              </div>
            </div>
            
            <div className="battle-indicator">
              {!battleResult && <div className="battle-animation"></div>}
              {battleResult === 'win' && <div className="battle-result win">You Win!</div>}
              {battleResult === 'lose' && <div className="battle-result lose">You Lose!</div>}
              {battleResult === 'draw' && <div className="battle-result draw">Draw!</div>}
            </div>
            
            <div className="opponent-side">
              <div className={`bakugan-battle ${opponentBakugan.attribute}`}>
                <div className="bakugan-model"></div>
                <h3>{opponentBakugan.name}</h3>
                <div className="g-power-display">{opponentBakugan.gPower} G</div>
              </div>
            </div>
          </div>
          
          <div className="ability-cards">
            <h3>Ability Cards</h3>
            <div className="ability-card-selection">
              {selectedAbilityCards.map(card => (
                <div 
                  key={card.id} 
                  className={`ability-card-option ${card.type}`}
                >
                  <div className="card-placeholder"></div>
                  <h4>{card.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {battleState === 'result' && (
        <div className="battle-result-screen">
          <h2 className="section-title">Battle Result</h2>
          
          <div className={`result-display ${battleResult}`}>
            {battleResult === 'victory' && (
              <>
                <h2 className="victory-text">Victory!</h2>
                <p>You defeated {opponent.name}!</p>
              </>
            )}
            
            {battleResult === 'defeat' && (
              <>
                <h2 className="defeat-text">Defeat!</h2>
                <p>You were defeated by {opponent.name}!</p>
              </>
            )}
          </div>
          
          <div className="battle-summary">
            <h3>Battle Summary</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-label">Gate Cards Won:</span>
                <span className="stat-value">{gateCardWins.player}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Gate Cards Lost:</span>
                <span className="stat-value">{gateCardWins.opponent}</span>
              </div>
            </div>
          </div>
          
          <div className="result-actions">
            <button className="btn btn-primary" onClick={resetBattle}>
              New Battle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BattleArena;