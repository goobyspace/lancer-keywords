import { Books, CategoriesEnum } from '../enums.js';
import { category } from '../types.js';
import { attackKeywords } from './attacks.js';

export const statKeywords = {
  e_defense: `$${CategoriesEnum.Stats}/e_defense$`,
  tech_attack: `$${CategoriesEnum.Stats}/tech_attack$`,
  grit: `$${CategoriesEnum.Stats}/grit$`,
  sensors: `$${CategoriesEnum.Stats}/sensors$`,
};

export const stats: category = {
  keywords: {
    e_defense: {
      name: 'E-DEFENSE',
      page: `${Books.Core}:[13]`,
      category: 'stats',
      text: `E-Defense is a mech’s ability to resist electronic warfare attacks. It’s used to resist ${attackKeywords.tech_attack}.`,
    },
    tech_attack: {
      name: 'TECH ATTACK',
      page: `${Books.Core}:[64]`,
      category: 'stats',
      text: `You add your mech’s ${statKeywords.tech_attack} as a bonus instead of GRIT when you conduct electronic warfare.`,
    },
    grit: {
      name: 'GRIT',
      page: `${Books.Core}:[13]`,
      category: 'stats',
      text: `Pilots are lucky and unique individuals, multi-talented and resilient. Even so, brand-new pilots don’t measure up to tempered, battle-hardened veterans when push comes to shove. The benefits of experience are measured by GRIT, a bonus that reflects your pilot’s deep reservoirs of resolve and will to live. \nGRIT is half of your character’s license level, rounded up. It improves attack bonuses, hit points, and save targets for both your pilot and your mech.`,
    },
    sensors: {
      name: 'SENSORS',
      page: `${Books.Core}:[13]`,
      category: 'stats',
      text: `Sensors are a mech’s ability to detect and track targets. A mech’s sensor range is the maximum distance at which it can detect a target. Sensors are also used to do ${attackKeywords.tech_attack}.`,
    },
  },
};
