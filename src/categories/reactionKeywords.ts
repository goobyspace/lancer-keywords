import { CategoriesEnum } from '../utility/enums.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const reactionKeywords = {
  Brace: `$${CategoriesEnum.Reaction}#Brace$`,
  Overwatch: `$${CategoriesEnum.Reaction}#Overwatch$`,
};
