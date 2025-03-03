import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const bonusesKeywords = {
  bonuses: `$${CategoriesEnum.Bonuses}#bonuses$`,
  accuracy: `$${CategoriesEnum.Bonuses}#accuracy$`,
  difficulty: `$${CategoriesEnum.Bonuses}#difficulty$`,
  statistic_bonuses: `$${CategoriesEnum.Bonuses}#statistic_bonuses$`,
};

export interface bonuses extends category {
  keywords: {
    bonuses: keyword;
    accuracy: keyword;
    difficulty: keyword;
    statistic_bonuses: keyword;
  };
}
