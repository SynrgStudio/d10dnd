# Complete d10 System Conversion Reference for D&D 5e

## Comprehensive Guide to Mechanics, Conversions, and Gameplay

This document serves as the definitive reference for converting D&D 5e content and gameplay to the d10 dice pool system. It consolidates all conversion rules, mechanics, and examples from the final clean version of the project.

---

## CORE MECHANICS

### Fundamental Principles

The d10 system replaces the traditional d20+modifier mechanic with dice pools using d10s. Players roll multiple d10s and count successes to determine the outcome of actions.

### Attributes (Six Ability Scores)

D&D 5e's six ability scores (Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma) are maintained but expressed in a "dot" system representing competency levels:

- **0 dots**: Poor (8-9 in D&D 5e) [-1 modifier]
- **1 dot**: Average (10-11 in D&D 5e) [+0 modifier]
- **2 dots**: Good (12-13 in D&D 5e) [+1 modifier]
- **3 dots**: Great (14-15 in D&D 5e) [+2 modifier]
- **4 dots**: Exceptional (16-17 in D&D 5e) [+3 modifier]
- **5 dots**: Legendary (18+ in D&D 5e) [+4 modifier, +1 dot per 2 points above 18]

**Conversion Table**:
| Score Range | Dots |
|-------------|------|
| 0–9         | 0    |
| 10–11       | 1    |
| 12–13       | 2    |
| 14–15       | 3    |
| 16–17       | 4    |
| 18+         | 5 + 1 additional dot per 2 points above 18 |

### Dice Pool System

- **Base Pool Calculation**: Attribute dots + Skill/Proficiency dots
- **Rolling**: Roll a number of d10s equal to the base pool.
- **Success**: Each die showing a 6 or higher counts as one success.
- **Difficulty**: Defined by the number of successes needed (1-5).
- **Automatic Failure (Botch)**: If more 1s are rolled than successes, and it's a failure, it's a critical failure or botch.

### Determining Difficulty

Difficulty is expressed as the number of successes needed to succeed, replacing traditional Difficulty Classes (DCs):

- **Trivial/Easy**: 1 success (equivalent to DC 5-10 in D&D 5e)
- **Medium**: 2 successes (equivalent to DC 11-15)
- **Hard**: 3 successes (equivalent to DC 16-20)
- **Very Hard**: 4 successes (equivalent to DC 21-25)
- **Nearly Impossible**: 5+ successes (equivalent to DC 26+)

### Modifiers

Modifiers in the d10 system typically affect the number of dice rolled:

- **Advantage**: +2 dice added to the pool.
- **Disadvantage**: -2 dice subtracted from the pool.
- **Proficiency**: Grants +2 dice to the pool for proficient skills or saves.
- **Expertise**: Grants +4 dice to the pool (double proficiency).
- **Guidance Spell/Effect**: +1 die added to the pool.

Multiple instances of Advantage or Disadvantage do not stack; only the maximum bonus or penalty applies.

---

## CHARACTER CREATION

### Ability Scores

Players can use one of two methods to determine their character's ability scores:

1.  **Point Buy (27 points)**: Start with 1 dot in each attribute. Spend points to increase:
    - 2nd dot: 2 points
    - 3rd dot: 3 points
    - 4th dot: 4 points
    - Maximum starting value is 4 dots before racial adjustments.
2.  **Standard Array**: Assign scores of 4, 3, and 2 dots to your three attributes of choice.

### Races

Each race provides specific bonuses to attributes and unique traits:

- **Humans (Variant)**: +1 to two different attributes, extra skill, extra feat, extra language.
- **Elves (High)**: +2 Dexterity, +1 Intelligence, Darkvision, Keen Senses, Fey Ancestry, Trance, Elf Weapon Training, Cantrip, Extra Language.
- **Dwarves (Mountain)**: +2 Strength, +2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Tool Proficiency, Stonecunning, Dwarven Armor Training.
- **Halflings (Lightfoot)**: +2 Dexterity, +1 Charisma, Lucky, Brave, Halfling Nimbleness, Naturally Stealthy.

All racial traits are converted to use the d10 system, e.g., saves and skill checks use dot-based bonuses.

---

## SKILLS AND PROFICIENCIES

### Skill List

Skills are linked to specific ability scores:

- **Strength**: Athletics
- **Dexterity**: Acrobatics, Sleight of Hand, Stealth
- **Intelligence**: Arcana, History, Investigation, Nature, Religion
- **Wisdom**: Animal Handling, Insight, Medicine, Perception, Survival
- **Charisma**: Deception, Intimidation, Performance, Persuasion

### Skill Dots

Characters gain proficiency dots in skills:

- **0 dots**: Untrained (attribute dots only)
- **1 dot**: Novice (+1 die)
- **2 dots**: Apprentice (+2 dice)
- **3 dots**: Journeyman (+3 dice)
- **4 dots**: Expert (+4 dice)
- **5 dots**: Master (+5 dice)

### Proficiency and Expertise

- **Proficiency Bonus**: Adds +2 dice to relevant skill or saving throw pools.
- **Expertise**: Doubles the proficiency bonus (+4 dice) for specific skills or tools.

---

## COMBAT SYSTEM

### Initiative

- Roll Physical attribute + Dexterity skills against a Difficulty of 0. The number of successes determines turn order (more successes = earlier turn). Ties go to the character with the higher Dexterity score.

### Actions

On their turn, a character can typically take:

- **One Action**: Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, or Use an Object.
- **One Bonus Action**: A limited action granted by class features, spells, or other abilities.
- **One Reaction**: An instant response to a specific trigger, usable once per round.
- **Movement**: Up to their speed, which can be split before and after other actions.

### Attack Resolution

- **Melee/Ranged/Spell Attack**: Roll an attribute + relevant skill dice pool vs. the target's Defense.
- **Defense**: Calculated as 10 + Dexterity modifier + armor bonus. This directly converts from D&D 5e AC.
- **Damage**: Weapon damage dice + relevant ability modifier. On a critical hit (rolling 5 or more successes on the attack, or rolling all 10s if the pool is >5 dice), damage dice are doubled.

### Saving Throws

Saving throws use the same dice pool system:

- Roll the relevant ability attribute + proficiency (if proficient) vs. a set difficulty representing the effect's potency.

---

## MAGIC SYSTEM

### Mana Points

Instead of traditional spell slots, spellcasters use a Mana Point system:

**Mana Cost by Spell Level:**
- Cantrips: 1 mana
- 1st level: 2 mana
- 2nd level: 3 mana
- 3rd level: 5 mana
- 4th level: 6 mana
- 5th level: 8 mana
- 6th level: 10 mana
- 7th level: 12 mana
- 8th level: 15 mana
- 9th level: 18 mana

### Spellcasting Mechanics

- **Spell Attack Rolls**: Use Mental attribute (Intelligence, Wisdom, or Charisma) + Proficiency vs. target's Defense.
- **Spell Save DC**: 8 + Mental attribute + Proficiency bonus.
- **Casting Time/Range/Components**: Remain unchanged from D&D 5e.

### Mana Recovery

- **Short Rest**: Recover 1/3 of maximum mana (rounded up).
- **Long Rest**: Recover all mana points.

---

## MONSTERS

### Threat Level Conversion

Monsters are assigned a Threat Level which corresponds to their D&D 5e Challenge Rating (CR) to provide a standardized benchmark:

- **Threat Level 1**: CR 0
- **Threat Level 2**: CR 1/8 - 1/4
- **Threat Level 3**: CR 1/2
- **Threat Level 4**: CR 1
- **Threat Level 5**: CR 2 - 3
- **Threat Level 6**: CR 4 - 5
- **Threat Level 7**: CR 6 - 8
- **Threat Level 8**: CR 9 - 12
- **Threat Level 9**: CR 13 - 16
- **Threat Level 10**: CR 17+

### Monster Stats

Monster stat blocks are updated to reflect the d10 system, showing attribute scores as dots and using Defense instead of AC. Skills and saving throws are also converted to dot ratings.

---

## EQUIPMENT

### Armor and Weapons

- **Armor**: Provides a bonus to Defense, directly converting from D&D 5e AC bonus.
- **Weapons**: Use the same damage dice, with the attack roll using the d10 system.

**Common Armor Bonuses:**
| Armor Type        | AC Bonus (D&D 5e) | Defense Bonus (d10) |
| :---------------- | :---------------- | :------------------ |
| Padded            | +1                | +1                  |
| Leather           | +1                | +1                  |
| Studded Leather   | +2                | +2                  |
| Hide              | +2                | +2                  |
| Chain Shirt       | +3                | +3                  |
| Scale Mail        | +4                | +4                  |
| Breastplate       | +4                | +4                  |
| Half Plate        | +5                | +5                  |
| Ring Mail         | +4                | +4                  |
| Chain Mail        | +6                | +6                  |
| Splint            | +7                | +7                  |
| Plate             | +8                | +8                  |
| Shield            | +2                | +2                  |

*Note: Armor properties like Stealth Disadvantage or Strength requirements remain the same as in D&D 5e.*

### Magic Items

Magic items function identically, with activation DCs converted to the required number of successes.

---

## QUICK CONVERSION REFERENCES

### Converting Bonuses to Dots

Any static bonus from D&D 5e (skill, save, passive score) can be converted to a dot rating:

- 1-4 bonus = 1 dot
- 5-8 bonus = 2 dots
- 9-12 bonus = 3 dots
- 13-17 bonus = 4 dots
- 18-22 bonus = 5 dots
- 23-27 bonus = 6 dots
- 28-32 bonus = 7 dots
- 33-37 bonus = 8 dots
- 38-42 bonus = 9 dots
- 43+ bonus = 10 dots

### Difficulty Class Conversion

D&D 5e DCs translate to the number of successes needed in the d10 system:

- DC 5-10 = 1 success
- DC 11-15 = 2 successes
- DC 16-20 = 3 successes
- DC 21-25 = 4 successes
- DC 26+ = 5 successes

---

## DESIGN PHILOSOPHY

The d10 conversion aims to:

1.  **Maintain D&D 5e Feel**: Preserve the core gameplay experience, balance, and flavor.
2.  **Streamline Mechanics**: Simplify calculations using a unified dice pool mechanism.
3.  **Enhance Gameplay**: Offer more nuanced outcomes and tactical decisions in dice management.

This system is designed for immediate use with any existing D&D 5e content, providing a fresh mechanical approach while respecting the foundational design of the original game.