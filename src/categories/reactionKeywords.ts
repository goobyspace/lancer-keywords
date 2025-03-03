import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const reactionKeywords = {
  brace: `$${CategoriesEnum.Reaction}#brace$`,
  overwatch: `$${CategoriesEnum.Reaction}#overwatch$`,
};

export interface reaction extends category {
  keywords: {
    brace: keyword;
    overwatch: keyword;
  };
}
