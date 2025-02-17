import { CategoriesEnum } from '../utility/enums.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const techActionKeywords = {
  bolster: `$${CategoriesEnum['Tech Action']}#bolster$`,
  scan: `$${CategoriesEnum['Tech Action']}#scan$`,
  lock_on: `$${CategoriesEnum['Tech Action']}#lock_on$`,
  invade: `$${CategoriesEnum['Tech Action']}#invade$`,
  // this isnt quite a quick tech action, but idk where else to put it unless im gonna include every possible invade option
  fragment_signal: `$${CategoriesEnum['Tech Action']}#fragment_signal$`,
  tech_actions: `$${CategoriesEnum['Tech Action']}#tech_actions$`,
};
