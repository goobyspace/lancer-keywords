import { CategoriesEnum } from '../utility/enums.js';

export const conditionKeywords = {
  immobilized: `$${CategoriesEnum.Condition}#immobilized$`,
  impaired: `$${CategoriesEnum.Condition}#impaired$`,
  jammed: `$${CategoriesEnum.Condition}#jammed$`,
  lock_on: `$${CategoriesEnum.Condition}#lock_on$`,
  shredded: `$${CategoriesEnum.Condition}#shredded$`,
  slowed: `$${CategoriesEnum.Condition}#slowed$`,
  stunned: `$${CategoriesEnum.Condition}#stunned$`,
};
