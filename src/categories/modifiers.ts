import { BooksEnum } from '../enums.js';
import { category } from '../types.js';
import { modifierKeywords } from './modifierKeywords.js';

export const modifiers: category = {
  keywords: {
    accuracy: {
      name: 'ACCURACY',
      page: `${BooksEnum.Core}:[13]`,
      category: 'modifiers',
      text: `${modifierKeywords.accuracy} and ${modifierKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
    },
    difficulty: {
      name: 'DIFFICULTY',
      page: `${BooksEnum.Core}:[13]`,
      category: 'modifiers',
      text: `${modifierKeywords.accuracy} and ${modifierKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
    },
  },
};
