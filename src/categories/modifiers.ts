import { Books, CategoriesEnum } from '../enums.js';
import { category } from '../types.js';

export const modifierKeywords = {
  accuracy: `$${CategoriesEnum.Modifiers}/accuracy$`,
  difficulty: `$${CategoriesEnum.Modifiers}/difficulty$`,
};

export const modifiers: category = {
  keywords: {
    accuracy: {
      name: 'ACCURACY',
      page: `${Books.Core}:[13]`,
      category: 'modifiers',
      text: `${modifierKeywords.accuracy} and ${modifierKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
    },
    difficulty: {
      name: 'DIFFICULTY',
      page: `${Books.Core}:[13]`,
      category: 'modifiers',
      text: `${modifierKeywords.accuracy} and ${modifierKeywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
    },
  },
};
