import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const weaponKeywords = {
  size: `$${CategoriesEnum.Weapon}#size$`,
  type: `$${CategoriesEnum.Weapon}#type$`,
  damage: `$${CategoriesEnum.Weapon}#damage$`,
  auxiliary: `$${CategoriesEnum.Weapon}#auxiliary$`,
  superheavy: `$${CategoriesEnum.Weapon}#superheavy$`,
  main: `$${CategoriesEnum.Weapon}#main$`,
  heavy: `$${CategoriesEnum.Weapon}#heavy$`,
  melee: `$${CategoriesEnum.Weapon}#melee$`,
  cqb: `$${CategoriesEnum.Weapon}#cqb$`,
  rifle: `$${CategoriesEnum.Weapon}#rifle$`,
  launcher: `$${CategoriesEnum.Weapon}#launcher$`,
  cannon: `$${CategoriesEnum.Weapon}#cannon$`,
  nexus: `$${CategoriesEnum.Weapon}#nexus$`,
  patterns: `$${CategoriesEnum.Weapon}#patterns$`,
};

export interface weapon extends category {
  keywords: {
    size: keyword;
    type: keyword;
    damage: keyword;
    auxiliary: keyword;
    superheavy: keyword;
    main: keyword;
    heavy: keyword;
    melee: keyword;
    cqb: keyword;
    rifle: keyword;
    launcher: keyword;
    cannon: keyword;
    nexus: keyword;
    patterns: keyword;
  };
}
