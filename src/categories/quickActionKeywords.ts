import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const quickActionKeywords = {
  boost: `$${CategoriesEnum['Quick Action']}#boost$`,
  grapple: `$${CategoriesEnum['Quick Action']}#grapple$`,
  hide: `$${CategoriesEnum['Quick Action']}#hide$`,
  quick_tech: `$${CategoriesEnum['Quick Action']}#quick_tech$`,
  ram: `$${CategoriesEnum['Quick Action']}#ram$`,
  search: `$${CategoriesEnum['Quick Action']}#search$`,
  skirmish: `$${CategoriesEnum['Quick Action']}#skirmish$`,
};

export interface quickAction extends category {
  keywords: {
    boost: keyword;
    grapple: keyword;
    hide: keyword;
    quick_tech: keyword;
    ram: keyword;
    search: keyword;
    skirmish: keyword;
  };
}
