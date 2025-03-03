import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const aiKeywords = {
  comp_con: `$${CategoriesEnum.AI}#comp_con$`,
  nhp: `$${CategoriesEnum.AI}#nhp$`,
  cascade: `$${CategoriesEnum.AI}#cascade$`,
  ai_control: `$${CategoriesEnum.AI}#ai_control$`,
};

export interface ai extends category {
  keywords: {
    comp_con: keyword;
    nhp: keyword;
    cascade: keyword;
    ai_control: keyword;
  };
}
