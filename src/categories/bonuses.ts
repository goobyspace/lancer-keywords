import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';

export const bonuses: category = {
  keywords: {
    bonuses: {
      name: 'BONUSES',
      page: `${BooksEnum.Core}:[13]`,
      category: 'bonuses',
      text: `There are three kinds of bonuses that can be applied to rolls in Lancer. ${bonusesKeywords.accuracy}, ${bonusesKeywords.difficulty} & ${bonusesKeywords.statistic_bonuses}.`,
    },
    accuracy: {
      name: 'ACCURACY',
      page: `${BooksEnum.Core}:[13]`,
      category: 'bonuses',
      text: `${bonusesKeywords.accuracy} and ${bonusesKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action. Each point of ${bonusesKeywords.accuracy} adds 1d6 to a roll, and is cancelled out by ${bonusesKeywords.difficulty} at a 1:1 basis. If you are lucky enough to be rolling several accuracy dice, you do not add them together but instead take the highest result.`,
    },
    difficulty: {
      name: 'DIFFICULTY',
      page: `${BooksEnum.Core}:[13]`,
      category: 'bonuses',
      text: `${bonusesKeywords.accuracy} and ${bonusesKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action. Each point of ${bonusesKeywords.difficulty} subtracts 1d6 from a roll, and is cancelled out by ${bonusesKeywords.accuracy} at a 1:1 basis.`,
    },
    statistic_bonuses: {
      name: 'STATISTIC BONUSES',
      page: `${BooksEnum.Core}:[13]`,
      category: 'bonuses',
      text: `Statistic Bonuses depend on the type of roll you are making, and come from three sources: your pilot's ${pilotKeywords.triggers}, your pilot's ${pilotKeywords.mech_skills} & their ${pilotKeywords.grit}. Each roll can only benefit from one of these at a time, and you'll find which one each roll uses in the description of the roll in question.`,
    },
  },
};
