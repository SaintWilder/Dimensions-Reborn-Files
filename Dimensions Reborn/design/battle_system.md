# Bakugan Dimensions Battle System

## Overview
The battle system in Bakugan Dimensions is turn-based and follows the core mechanics of the original Bakugan game, with adaptations for a web-based environment. Battles involve strategic use of Bakugan, Gate Cards, and Ability Cards to defeat opponents.

## Battle Flow

### 1. Pre-Battle Phase
1. Players select their team of 3 Bakugan
2. Players select 3 Gate Cards
3. Players select up to 3 Ability Cards for each Bakugan
4. System determines who goes first (random or based on player rank)

### 2. Gate Card Phase
1. Active player places a Gate Card on the field
2. Gate Card remains face down until a Bakugan lands on it

### 3. Roll Phase
1. Players take turns rolling their Bakugan onto the field
2. Roll success is determined by:
   - Base roll chance (70%)
   - Bakugan's level (adds 2% per level)
   - Player's skill rating (adds 0-10%)
3. If roll is successful, Bakugan stands on the Gate Card
4. If roll fails, Bakugan misses the Gate Card and is returned to the player

### 4. Battle Phase
1. When two Bakugan are on the same Gate Card, a battle begins
2. Gate Card is revealed and its effects are applied
3. Players take turns using Ability Cards
4. Each player can use up to 3 Ability Cards per battle
5. G-Power is calculated based on:
   - Bakugan's base G-Power
   - Gate Card effects
   - Ability Card effects
   - Attribute advantages/disadvantages
6. Bakugan with the highest G-Power wins the battle
7. Winner takes the Gate Card and both Bakugan return to their owners

### 5. Victory Conditions
1. Player who wins 3 Gate Cards first wins the battle
2. If all Bakugan are used and less than 3 Gate Cards are won, the player with more Gate Cards wins
3. In case of a tie, a sudden death round is played with one Bakugan each

## G-Power Calculation

### Base G-Power
- Each Bakugan has a base G-Power (typically 300-650 for Season 1-2 Bakugan)
- G-Power increases as Bakugan levels up (+10 G-Power per level)

### Attribute Advantages
- Pyrus (Fire) has advantage over Ventus (Wind): +50 G-Power
- Aquos (Water) has advantage over Pyrus (Fire): +50 G-Power
- Subterra (Earth) has advantage over Aquos (Water): +50 G-Power
- Haos (Light) has advantage over Darkus (Dark): +50 G-Power
- Darkus (Dark) has advantage over Subterra (Earth): +50 G-Power
- Ventus (Wind) has advantage over Haos (Light): +50 G-Power

### Gate Card Effects
- Attribute-specific boost: +50-200 G-Power for matching attribute
- Command effects: Various effects like doubling G-Power, nullifying abilities, etc.
- Character cards: Specific boosts for named Bakugan

### Ability Card Effects
- G-Power boost: +50-300 G-Power
- G-Power transfer: Take G-Power from opponent
- Nullify effects: Cancel Gate Card or other Ability Card effects
- Special effects: Change attributes, add extra Bakugan to battle, etc.

## Bakugan Traps
- Can be added to battle as support for main Bakugan
- Adds G-Power to the main Bakugan
- May have special combination effects with certain Bakugan
- Limited to one Trap per battle

## Battle Gear
- Can be equipped to compatible Bakugan
- Adds G-Power and special abilities
- Limited to one Battle Gear per Bakugan
- Some Battle Gear have compatibility bonuses with specific Bakugan

## Evolution
- Bakugan can evolve after gaining enough experience
- Evolution increases base G-Power and unlocks new abilities
- Evolution paths follow the anime/toy line progression
- Example: Dragonoid → Delta Dragonoid → Ultimate Dragonoid → Infinity Dragonoid

## Special Battle Mechanics

### Double Stand
- When two Bakugan from the same player land on the same Gate Card
- Combined G-Power of both Bakugan is used
- Only counts as one win if victorious

### Triple Stand
- When three Bakugan from the same player land on the same Gate Card
- Combined G-Power of all three Bakugan is used
- Counts as two wins if victorious

### Maxus Combinations
- Special combinations of compatible Bakugan and Traps
- Significantly higher G-Power
- Limited to specific Bakugan (Maxus Dragonoid, Maxus Helios)

## Battle Rewards
- Experience points for participating Bakugan
- Additional experience for winning Bakugan
- G-Power increases for winning Bakugan
- Rank points for the player
- Possible rare card or Bakugan drops