import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const mechKeywords = {
  frame: `$${CategoriesEnum.Mech}#frame$`,
  mech_stats: `$${CategoriesEnum.Mech}#mech_stats$`,
  hp: `$${CategoriesEnum.Mech}#hp$`,
  structure: `$${CategoriesEnum.Mech}#structure$`,
  structure_damage_table: `$${CategoriesEnum.Mech}#structure_damage_table$`,
  repair_cap: `$${CategoriesEnum.Mech}#repair_cap$`,
  speed: `$${CategoriesEnum.Mech}#speed$`,
  evasion: `$${CategoriesEnum.Mech}#evasion$`,
  sensors: `$${CategoriesEnum.Mech}#sensors$`,
  tech_attack: `$${CategoriesEnum.Mech}#tech_attack$`,
  e_defense: `$${CategoriesEnum.Mech}#e_defense$`,
  heat_cap: `$${CategoriesEnum.Mech}#heat_cap$`,
  stress: `$${CategoriesEnum.Mech}#stress$`,
  save_target: `$${CategoriesEnum.Mech}#save_target$`,
  weapon: `$${CategoriesEnum.Mech}#weapon$`,
  systems: `$${CategoriesEnum.Mech}#systems$`,
  system_points: `$${CategoriesEnum.Mech}#system_points$`,
  core_power: `$${CategoriesEnum.Mech}#core_power$`,
  size: `$${CategoriesEnum.Mech}#size$`,
  repair: `$${CategoriesEnum.Mech}#repair$`,
  full_repair: `$${CategoriesEnum.Mech}#full_repair$`,
  rest: `$${CategoriesEnum.Mech}#rest$`,
  mounts: `$${CategoriesEnum.Mech}#mounts$`,
  main_mount: `$${CategoriesEnum.Mech}#main_mount$`,
  heavy_mount: `$${CategoriesEnum.Mech}#heavy_mount$`,
  aux_aux_mount: `$${CategoriesEnum.Mech}#aux_aux_mount$`,
  main_aux_mount: `$${CategoriesEnum.Mech}#main_aux_mount$`,
  flexible_mount: `$${CategoriesEnum.Mech}#flexible_mount$`,
  integrated_mount: `$${CategoriesEnum.Mech}#integrated_mount$`,
  superheavy_mount: `$${CategoriesEnum.Mech}#superheavy_mount$`,
};

export interface mech extends category {
  keywords: {
    frame: keyword;
    mech_stats: keyword;
    hp: keyword;
    structure: keyword;
    structure_damage_table: keyword;
    repair_cap: keyword;
    speed: keyword;
    evasion: keyword;
    sensors: keyword;
    tech_attack: keyword;
    e_defense: keyword;
    heat_cap: keyword;
    stress: keyword;
    save_target: keyword;
    weapon: keyword;
    systems: keyword;
    system_points: keyword;
    core_power: keyword;
    size: keyword;
    repair: keyword;
    full_repair: keyword;
    rest: keyword;
    mounts: keyword;
    main_mount: keyword;
    heavy_mount: keyword;
    aux_aux_mount: keyword;
    main_aux_mount: keyword;
    flexible_mount: keyword;
    integrated_mount: keyword;
    superheavy_mount: keyword;
  };
}
