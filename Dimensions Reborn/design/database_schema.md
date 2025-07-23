# Bakugan Dimensions Database Schema

## User Collection
```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  avatar: {
    body: String,
    hair: String,
    eyes: String,
    outfit: String,
    accessories: [String]
  },
  stats: {
    rank: String,
    experience: Number,
    wins: Number,
    losses: Number,
    draws: Number
  },
  inventory: {
    bakugan: [ObjectId], // References to Bakugan collection
    gateCards: [ObjectId], // References to GateCard collection
    abilityCards: [ObjectId] // References to AbilityCard collection
  },
  activeDeck: {
    bakugan: [ObjectId], // Max 3 Bakugan
    gateCards: [ObjectId], // Max 3 Gate Cards
    abilityCards: [ObjectId] // Max 3 Ability Cards per Bakugan
  },
  friends: [ObjectId], // References to User collection
  createdAt: Date,
  lastLogin: Date
}
```

## Bakugan Collection
```
{
  _id: ObjectId,
  name: String,
  attribute: String, // Pyrus, Aquos, Subterra, Haos, Darkus, Ventus
  season: Number, // 1 or 2
  baseGPower: Number,
  currentGPower: Number,
  level: Number,
  experience: Number,
  evolution: {
    stage: Number,
    nextEvolution: String, // Name of next evolution
    previousEvolution: String // Name of previous evolution
  },
  abilities: [String], // Default abilities
  specialAbilities: [String], // Special abilities
  model: {
    ballForm: String, // URL to ball form image
    openForm: String // URL to open form image
  },
  description: String,
  isTrapped: Boolean, // For Bakugan Trap
  owner: ObjectId // Reference to User collection
}
```

## Gate Card Collection
```
{
  _id: ObjectId,
  name: String,
  type: String, // Gold, Silver, Bronze
  attribute: String, // Attribute it boosts
  season: Number, // 1 or 2
  effects: [{
    condition: String,
    effect: String,
    value: Number
  }],
  description: String,
  image: String, // URL to card image
  rarity: String // Common, Rare, Ultra Rare
}
```

## Ability Card Collection
```
{
  _id: ObjectId,
  name: String,
  type: String, // Green, Blue, Red
  attribute: String, // Associated attribute
  season: Number, // 1 or 2
  timing: String, // before rolling, after rolling, start of battle, during battle, etc.
  effects: [{
    target: String, // self, opponent, all
    effect: String, // boost G-Power, nullify gate, etc.
    value: Number
  }],
  compatibleBakugan: [String], // List of compatible Bakugan names
  description: String,
  image: String, // URL to card image
  rarity: String // Common, Rare, Ultra Rare
}
```

## Battle Collection
```
{
  _id: ObjectId,
  players: [{
    userId: ObjectId, // Reference to User collection
    bakugan: [ObjectId], // References to Bakugan collection
    gateCards: [ObjectId], // References to GateCard collection
    abilityCards: [ObjectId] // References to AbilityCard collection
  }],
  turns: [{
    player: ObjectId,
    action: String,
    bakuganUsed: ObjectId,
    cardUsed: ObjectId,
    gPower: Number,
    timestamp: Date
  }],
  winner: ObjectId, // Reference to User collection
  loser: ObjectId, // Reference to User collection
  isDraw: Boolean,
  rewardExp: Number,
  timestamp: Date
}
```

## NPC Collection
```
{
  _id: ObjectId,
  name: String,
  type: String, // Regular, Boss, Shopkeeper
  location: String, // Area in the game
  dialogue: [{
    condition: String,
    text: String
  }],
  bakugan: [ObjectId], // References to Bakugan collection
  difficulty: Number,
  rewards: {
    experience: Number,
    items: [String]
  },
  image: String // URL to NPC image
}
```

## Location Collection
```
{
  _id: ObjectId,
  name: String,
  description: String,
  connections: [String], // Names of connected locations
  npcs: [ObjectId], // References to NPC collection
  backgroundImage: String, // URL to background image
  music: String, // URL to background music
  availableActions: [String] // List of actions available in this location
}
```

## Item Collection
```
{
  _id: ObjectId,
  name: String,
  type: String, // Accessory, Power-up, Evolution item
  effects: [{
    target: String,
    effect: String,
    value: Number
  }],
  description: String,
  image: String, // URL to item image
  price: Number,
  rarity: String // Common, Rare, Ultra Rare
}
```

## Achievement Collection
```
{
  _id: ObjectId,
  name: String,
  description: String,
  criteria: {
    type: String, // Wins, Bakugan collected, etc.
    value: Number
  },
  rewards: {
    experience: Number,
    items: [String]
  },
  image: String // URL to achievement image
}
```