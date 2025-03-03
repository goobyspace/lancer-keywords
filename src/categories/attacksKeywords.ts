import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';
// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const attacksKeywords = {
  melee_attack: `$${CategoriesEnum.Attacks}#melee_attack$`,
  ranged_attack: `$${CategoriesEnum.Attacks}#ranged_attack$`,
  tech_attack: `$${CategoriesEnum.Attacks}#tech_attack$`,
};

export interface attacks extends category {
  keywords: {
    melee_attack: keyword;
    ranged_attack: keyword;
    tech_attack: keyword;
  };
}
