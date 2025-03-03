import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const movementKeywords = {
  obstruction: `$${CategoriesEnum.Combat}#obstruction$`,
  adjacency: `$${CategoriesEnum.Combat}#adjacency$`,
  splitting_movement: `$${CategoriesEnum.Combat}#splitting_movement$`,
  engagement: `$${CategoriesEnum.Combat}#engagement$`,
  terrain: `$${CategoriesEnum.Combat}#terrain$`,
  lifting: `$${CategoriesEnum.Combat}#lifting$`,
  dragging: `$${CategoriesEnum.Combat}#dragging$`,
  jumping: `$${CategoriesEnum.Combat}#jumping$`,
  climbing: `$${CategoriesEnum.Combat}#climbing$`,
  falling: `$${CategoriesEnum.Combat}#falling$`,
  gravity: `$${CategoriesEnum.Combat}#gravity$`,
  flight: `$${CategoriesEnum.Combat}#flight$`,
  teleportation: `$${CategoriesEnum.Combat}#teleportation$`,
};

export interface movement extends category {
  keywords: {
    obstruction: keyword;
    adjacency: keyword;
    splitting_movement: keyword;
    engagement: keyword;
    terrain: keyword;
    lifting: keyword;
    dragging: keyword;
    jumping: keyword;
    climbing: keyword;
    falling: keyword;
    gravity: keyword;
    flight: keyword;
    teleportation: keyword;
  };
}
