import { BooksEnum } from '../enums.js';
import { category } from '../types.js';
import { modifierKeywords } from './modifierKeywords.js';
import { statKeywords } from './statKeywords.js';
import { attackKeywords } from './attackKeywords.js';

export const attacks: category = {
  keywords: {
    tech_attack: {
      name: 'TECH ATTACK',
      page: `${BooksEnum.Core}:[64]`,
      category: 'attacks',
      text: `The attacker chooses a target within their ${statKeywords.sensors} and line of sight, then makes a tech attack roll: rolling 1d20, plus ${attackKeywords.tech_attack} and any ${modifierKeywords.accuracy} or ${modifierKeywords.difficulty}. To hit, they must match or beat the target’s ${statKeywords.e_defense}. \nTech attacks ignore cover.`,
    },
  },
};
