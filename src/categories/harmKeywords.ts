import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const harmKeywords = {
  damage: `$${CategoriesEnum.Harm}#damage$`, // this should mention calculating damage
  armor: `$${CategoriesEnum.Harm}#armor$`,
  resistance: `$${CategoriesEnum.Harm}#resistance$`,
  burn: `$${CategoriesEnum.Harm}#burn$`,
  explosive: `$${CategoriesEnum.Harm}#explosive$`,
  energy: `$${CategoriesEnum.Harm}#energy$`,
  kinetic: `$${CategoriesEnum.Harm}#kinetic$`,
  heat: `$${CategoriesEnum.Harm}#heat$`,
  bonus_damage: `$${CategoriesEnum.Harm}#bonus_damage$`,
  immunity: `$${CategoriesEnum.Harm}#immunity$`,
  damaging_objects: `$${CategoriesEnum.Harm}#damaging_objects$`,
  overheating: `$${CategoriesEnum.Harm}#overheating$`,
  reactor_meltdown: `$${CategoriesEnum.Harm}#reactor_meltdown$`,
  cooling: `$${CategoriesEnum.Harm}#cooling$`,
  overheating_table: `$${CategoriesEnum.Harm}#overheating_table$`,
  destroyed: `$${CategoriesEnum.Harm}#destroyed$`,
  printing: `$${CategoriesEnum.Harm}#printing$`,
};

export interface harm extends category {
  keywords: {
    damage: keyword;
    armor: keyword;
    resistance: keyword;
    burn: keyword;
    explosive: keyword;
    energy: keyword;
    kinetic: keyword;
    heat: keyword;
    bonus_damage: keyword;
    immunity: keyword;
    damaging_objects: keyword;
    overheating: keyword;
    reactor_meltdown: keyword;
    cooling: keyword;
    overheating_table: keyword;
    destroyed: keyword;
    printing: keyword;
  };
}
