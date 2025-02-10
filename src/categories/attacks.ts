import { Books, CategoriesEnum } from '../enums.js';
import { category } from '../types.js';
import { modifierKeywords } from './modifiers.js';
import { statKeywords } from './stats.js';

export const attackKeywords = {
  tech_attack: `$${CategoriesEnum.Attacks}/tech_attack$`,
};

export const attacks: category = {
  keywords: {
    tech_attack: {
      name: 'TECH ATTACK',
      page: `${Books.Core}:[64]`,
      category: 'attacks',
      text: `The attacker chooses a target within their ${statKeywords.sensors} and line of sight, then makes a tech attack roll: rolling 1d20, plus ${attackKeywords.tech_attack} and any ${modifierKeywords.accuracy} or ${modifierKeywords.difficulty}. To hit, they must match or beat the target’s ${statKeywords.e_defense}. \nTech attacks ignore cover.`,
    },
  },
};
