import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const conditionKeywords = {
  immobilized: `$${CategoriesEnum.Condition}#immobilized$`,
  impaired: `$${CategoriesEnum.Condition}#impaired$`,
  jammed: `$${CategoriesEnum.Condition}#jammed$`,
  lock_on: `$${CategoriesEnum.Condition}#lock_on$`,
  shredded: `$${CategoriesEnum.Condition}#shredded$`,
  slowed: `$${CategoriesEnum.Condition}#slowed$`,
  stunned: `$${CategoriesEnum.Condition}#stunned$`,
};

export interface condition extends category {
  keywords: {
    immobilized: keyword;
    impaired: keyword;
    jammed: keyword;
    lock_on: keyword;
    shredded: keyword;
    slowed: keyword;
    stunned: keyword;
  };
}
