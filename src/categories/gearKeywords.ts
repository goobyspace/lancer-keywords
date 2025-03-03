import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const gearKeywords = {
  accurate: `$${CategoriesEnum.Gear}#accurate$`,
  arcing: `$${CategoriesEnum.Gear}#arcing$`,
  armor_piercing: `$${CategoriesEnum.Gear}#armor_piercing$`,
  inaccurate: `$${CategoriesEnum.Gear}#inaccurate$`,
  knockback: `$${CategoriesEnum.Gear}#knockback$`,
  loading: `$${CategoriesEnum.Gear}#loading$`,
  ordnance: `$${CategoriesEnum.Gear}#ordnance$`,
  overkill: `$${CategoriesEnum.Gear}#overkill$`,
  overshield: `$${CategoriesEnum.Gear}#overshield$`,
  reliable_x: `$${CategoriesEnum.Gear}#reliable$`,
  seeking: `$${CategoriesEnum.Gear}#seeking$`,
  smart: `$${CategoriesEnum.Gear}#smart$`,
  threat_x: `$${CategoriesEnum.Gear}#threat_x$`,
  thrown_x: `$${CategoriesEnum.Gear}#thrown_x$`,
  deployable: `$${CategoriesEnum.Gear}#deployable$`,
  drone: `$${CategoriesEnum.Gear}#drone$`,
  grenade: `$${CategoriesEnum.Gear}#grenade$`,
  mine: `$${CategoriesEnum.Gear}#mine$`,
  mod: `$${CategoriesEnum.Gear}#mod$`,
  protocol: `$${CategoriesEnum.Gear}#protocol$`,
  shield: `$${CategoriesEnum.Gear}#shield$`,
  unique: `$${CategoriesEnum.Gear}#unique$`,
  ai: `$${CategoriesEnum.Gear}#ai$`,
  tags: `$${CategoriesEnum.Gear}#tags$`,
  limited_x: `$${CategoriesEnum.Gear}#limited_x$`,
};

export interface gear extends category {
  keywords: {
    accurate: keyword;
    arcing: keyword;
    armor_piercing: keyword;
    inaccurate: keyword;
    knockback: keyword;
    loading: keyword;
    ordnance: keyword;
    overkill: keyword;
    overshield: keyword;
    reliable_x: keyword;
    seeking: keyword;
    smart: keyword;
    threat_x: keyword;
    thrown_x: keyword;
    deployable: keyword;
    drone: keyword;
    grenade: keyword;
    mine: keyword;
    mod: keyword;
    protocol: keyword;
    shield: keyword;
    unique: keyword;
    ai: keyword;
    tags: keyword;
    limited_x: keyword;
  };
}
