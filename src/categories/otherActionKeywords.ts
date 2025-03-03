import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const otherActionKeywords = {
  activate: `$${CategoriesEnum['Other Action']}#activate$`,
  boot_up: `$${CategoriesEnum['Other Action']}#boot_up$`,
  mount: `$${CategoriesEnum['Other Action']}#mount$`,
  dismount: `$${CategoriesEnum['Other Action']}#dismount$`,
  eject: `$${CategoriesEnum['Other Action']}#eject$`,
  prepare: `$${CategoriesEnum['Other Action']}#prepare$`,
  self_destruct: `$${CategoriesEnum['Other Action']}#self_destruct$`,
  shut_down: `$${CategoriesEnum['Other Action']}#shut_down$`,
  skill_check: `$${CategoriesEnum['Other Action']}#skill_check$`,
};

export interface otherAction extends category {
  keywords: {
    activate: keyword;
    boot_up: keyword;
    mount: keyword;
    dismount: keyword;
    eject: keyword;
    prepare: keyword;
    self_destruct: keyword;
    shut_down: keyword;
    skill_check: keyword;
  };
}
