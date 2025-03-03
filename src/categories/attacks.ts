import { BooksEnum } from '../utility/enums.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { attacksKeywords, attacks as attacksType } from './attacksKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { altText } from '../utility/altText.js';
import { movementKeywords } from './movementKeywords.js';
import { statusKeywords } from './statusKeywords.js';

export const attacks: attacksType = {
  keywords: {
    tech_attack: {
      name: 'TECH ATTACK',
      page: `${BooksEnum.Core}:[64]`,
      category: 'attacks',
      text: `The attacker chooses a target within their ${mechKeywords.sensors} and ${combatKeywords.line_of_sight}, then makes a tech attack roll: rolling 1d20, plus ${attacksKeywords.tech_attack} and any ${bonusesKeywords.accuracy} or ${bonusesKeywords.difficulty}. To hit, they must match or beat the target’s ${mechKeywords.e_defense}. \nTech attacks ignore ${combatKeywords.cover}.`,
    },
    melee_attack: {
      name: 'MELEE ATTACK',
      page: `${BooksEnum.Core}:[64]`,
      category: 'attacks',
      text: `The attacker chooses a target within weapon ${combatKeywords.threat} and ${combatKeywords.line_of_sight}, then makes a melee attack roll: rolling 1d20 plus ${pilotKeywords.grit} and any ${bonusesKeywords.accuracy} or ${bonusesKeywords.difficulty}. To hit, they must match or beat the target’s ${mechKeywords.evasion}\nMelee attacks ignore ${combatKeywords.cover}.`,
    },
    ranged_attack: {
      name: 'RANGED ATTACK',
      page: `${BooksEnum.Core}:[64]`,
      category: 'attacks',
      text: `The attacker chooses a target within their weapon ${combatKeywords.range} and ${combatKeywords.line_of_sight}, then makes a ranged attack roll: rolling 1d20, plus ${pilotKeywords.grit} and any ${bonusesKeywords.accuracy} or ${bonusesKeywords.difficulty}. To hit, they must match or beat the target’s ${mechKeywords.evasion}. \nCharacters that are ${altText(movementKeywords.adjacency, 'adjacent')} to hostile targets (and thus ${statusKeywords.engaged}) take +1 ${bonusesKeywords.difficulty} on all ranged attacks.\nWhen firing at targets in ${combatKeywords.soft_cover}, characters take +1 ${bonusesKeywords.difficulty} on ranged attacks; ${combatKeywords.hard_cover} imposes +2 ${bonusesKeywords.difficulty}.`,
    },
  },
};
