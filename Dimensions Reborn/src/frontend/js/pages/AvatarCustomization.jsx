import React, { useState, useEffect } from 'react';
import '../css/pages/AvatarCustomization.css';

const AvatarCustomization = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState({
    body: 1,
    hair: 1,
    eyes: 1,
    mouth: 1,
    outfit: 1,
    accessory: 0
  });
  const [activeCategory, setActiveCategory] = useState('body');
  const [availableItems, setAvailableItems] = useState({});
  const [previewMode, setPreviewMode] = useState(false);
  const [savedAvatars, setSavedAvatars] = useState([]);
  const [avatarName, setAvatarName] = useState('');

  // Mock data for available customization items
  const mockItems = {
    body: [
      { id: 1, name: 'Default', unlocked: true },
      { id: 2, name: 'Tan', unlocked: true },
      { id: 3, name: 'Pale', unlocked: true },
      { id: 4, name: 'Dark', unlocked: true },
      { id: 5, name: 'Olive', unlocked: false }
    ],
    hair: [
      { id: 1, name: 'Short', unlocked: true },
      { id: 2, name: 'Long', unlocked: true },
      { id: 3, name: 'Curly', unlocked: true },
      { id: 4, name: 'Spiky', unlocked: false },
      { id: 5, name: 'Ponytail', unlocked: false }
    ],
    eyes: [
      { id: 1, name: 'Round', unlocked: true },
      { id: 2, name: 'Narrow', unlocked: true },
      { id: 3, name: 'Wide', unlocked: true },
      { id: 4, name: 'Anime', unlocked: false },
      { id: 5, name: 'Fierce', unlocked: false }
    ],
    mouth: [
      { id: 1, name: 'Smile', unlocked: true },
      { id: 2, name: 'Neutral', unlocked: true },
      { id: 3, name: 'Smirk', unlocked: true },
      { id: 4, name: 'Frown', unlocked: false },
      { id: 5, name: 'Open', unlocked: false }
    ],
    outfit: [
      { id: 1, name: 'Casual', unlocked: true },
      { id: 2, name: 'Sporty', unlocked: true },
      { id: 3, name: 'Formal', unlocked: true },
      { id: 4, name: 'Pyrus Style', unlocked: false },
      { id: 5, name: 'Aquos Style', unlocked: false },
      { id: 6, name: 'Subterra Style', unlocked: false },
      { id: 7, name: 'Haos Style', unlocked: false },
      { id: 8, name: 'Darkus Style', unlocked: false },
      { id: 9, name: 'Ventus Style', unlocked: false }
    ],
    accessory: [
      { id: 0, name: 'None', unlocked: true },
      { id: 1, name: 'Glasses', unlocked: true },
      { id: 2, name: 'Hat', unlocked: true },
      { id: 3, name: 'Scarf', unlocked: false },
      { id: 4, name: 'Bakugan Pendant', unlocked: false }
    ]
  };

  // Mock saved avatars
  const mockSavedAvatars = [
    { id: 1, name: 'Battle Ready', avatar: { body: 2, hair: 3, eyes: 2, mouth: 3, outfit: 4, accessory: 1 } },
    { id: 2, name: 'Casual Look', avatar: { body: 1, hair: 2, eyes: 1, mouth: 1, outfit: 1, accessory: 0 } }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setAvailableItems(mockItems);
      setSavedAvatars(mockSavedAvatars);
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleItemSelect = (itemId) => {
    setAvatar({
      ...avatar,
      [activeCategory]: itemId
    });
  };

  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };

  const saveAvatar = () => {
    if (!avatarName.trim()) {
      alert('Please enter a name for your avatar');
      return;
    }

    const newAvatar = {
      id: savedAvatars.length + 1,
      name: avatarName,
      avatar: { ...avatar }
    };

    setSavedAvatars([...savedAvatars, newAvatar]);
    setAvatarName('');
    alert('Avatar saved successfully!');
  };

  const loadAvatar = (savedAvatar) => {
    setAvatar(savedAvatar.avatar);
    setAvatarName(savedAvatar.name);
  };

  const randomizeAvatar = () => {
    const randomAvatar = {
      body: Math.floor(Math.random() * 4) + 1, // Only use unlocked items (1-4)
      hair: Math.floor(Math.random() * 3) + 1,
      eyes: Math.floor(Math.random() * 3) + 1,
      mouth: Math.floor(Math.random() * 3) + 1,
      outfit: Math.floor(Math.random() * 3) + 1,
      accessory: Math.floor(Math.random() * 3) // 0-2 (including None)
    };

    setAvatar(randomAvatar);
  };

  if (isLoading) {
    return (
      <div className="avatar-customization loading">
        <div className="loading-spinner"></div>
        <p>Loading Avatar Customization...</p>
      </div>
    );
  }

  return (
    <div className="avatar-customization">
      <h1 className="customization-title">Avatar Customization</h1>
      
      <div className="customization-container">
        <div className="avatar-preview">
          <div className={`avatar-display ${previewMode ? 'preview-mode' : ''}`}>
            <div className="avatar-figure">
              {/* This would be replaced with actual avatar rendering based on selected items */}
              <div className={`avatar-body body-${avatar.body}`}></div>
              <div className={`avatar-hair hair-${avatar.hair}`}></div>
              <div className={`avatar-eyes eyes-${avatar.eyes}`}></div>
              <div className={`avatar-mouth mouth-${avatar.mouth}`}></div>
              <div className={`avatar-outfit outfit-${avatar.outfit}`}></div>
              {avatar.accessory > 0 && (
                <div className={`avatar-accessory accessory-${avatar.accessory}`}></div>
              )}
            </div>
            
            <div className="preview-controls">
              <button 
                className="btn btn-secondary preview-toggle"
                onClick={togglePreviewMode}
              >
                {previewMode ? 'Exit Preview' : 'Preview Avatar'}
              </button>
              
              <button 
                className="btn btn-secondary randomize-btn"
                onClick={randomizeAvatar}
              >
                Randomize
              </button>
            </div>
            
            <div className="save-controls">
              <input
                type="text"
                placeholder="Avatar Name"
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
                className="avatar-name-input"
              />
              <button 
                className="btn btn-primary save-btn"
                onClick={saveAvatar}
                disabled={!avatarName.trim()}
              >
                Save Avatar
              </button>
            </div>
          </div>
          
          <div className="saved-avatars">
            <h3>Saved Avatars</h3>
            <div className="saved-avatars-list">
              {savedAvatars.map(saved => (
                <div 
                  key={saved.id} 
                  className="saved-avatar-item"
                  onClick={() => loadAvatar(saved)}
                >
                  <div className="saved-avatar-preview">
                    {/* Simplified avatar preview */}
                    <div className="mini-avatar"></div>
                  </div>
                  <span className="saved-avatar-name">{saved.name}</span>
                </div>
              ))}
              
              {savedAvatars.length === 0 && (
                <p className="no-saved-avatars">No saved avatars yet</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="customization-options">
          <div className="category-tabs">
            <button 
              className={`category-tab ${activeCategory === 'body' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('body')}
            >
              Body
            </button>
            <button 
              className={`category-tab ${activeCategory === 'hair' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('hair')}
            >
              Hair
            </button>
            <button 
              className={`category-tab ${activeCategory === 'eyes' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('eyes')}
            >
              Eyes
            </button>
            <button 
              className={`category-tab ${activeCategory === 'mouth' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('mouth')}
            >
              Mouth
            </button>
            <button 
              className={`category-tab ${activeCategory === 'outfit' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('outfit')}
            >
              Outfit
            </button>
            <button 
              className={`category-tab ${activeCategory === 'accessory' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('accessory')}
            >
              Accessory
            </button>
          </div>
          
          <div className="items-grid">
            {availableItems[activeCategory]?.map(item => (
              <div 
                key={item.id} 
                className={`item-option ${!item.unlocked ? 'locked' : ''} ${avatar[activeCategory] === item.id ? 'selected' : ''}`}
                onClick={() => item.unlocked && handleItemSelect(item.id)}
              >
                <div className="item-preview">
                  {/* This would show a preview of the specific item */}
                  <div className={`item-image ${activeCategory}-${item.id}`}></div>
                  {!item.unlocked && <div className="lock-overlay"><span className="lock-icon">🔒</span></div>}
                </div>
                <div className="item-name">{item.name}</div>
                {!item.unlocked && <div className="unlock-info">Unlock through battles</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="customization-tips">
        <h3>Customization Tips</h3>
        <ul>
          <li>Win battles to unlock more customization options</li>
          <li>Match your outfit with your favorite Bakugan attribute</li>
          <li>Save multiple avatars for different occasions</li>
          <li>Some special items can only be unlocked through events</li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarCustomization;