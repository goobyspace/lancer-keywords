import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const pilotGearKeywords = {
  archaic: `$${CategoriesEnum['Pilot Gear']}#archaic$`,
  personal_armor: `$${CategoriesEnum['Pilot Gear']}#personal_armor$`,
  gear: `$${CategoriesEnum['Pilot Gear']}#gear$`,
  sidearm: `$${CategoriesEnum['Pilot Gear']}#sidearm$`,
};

export interface pilotGear extends category {
  keywords: {
    archaic: keyword;
    personal_armor: keyword;
    gear: keyword;
    sidearm: keyword;
  };
}
