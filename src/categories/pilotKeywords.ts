import { CategoriesEnum } from '../utility/enums.js';
import { category, keyword } from '../utility/types.js';

export const pilotKeywords = {
  mech_skills: `$${CategoriesEnum.Pilot}#mech_skills$`,
  pilot_mech_stats: `$${CategoriesEnum.Pilot}#pilot_mech_stats$`, // these are the mech stats pilots have in combat aka when out of mech
  hull: `$${CategoriesEnum.Pilot}#hull$`,
  agility: `$${CategoriesEnum.Pilot}#agility$`,
  systems: `$${CategoriesEnum.Pilot}#systems$`,
  engineering: `$${CategoriesEnum.Pilot}#engineering$`,
  grit: `$${CategoriesEnum.Pilot}#grit$`,
  talents: `$${CategoriesEnum.Pilot}#talents$`,
  triggers: `$${CategoriesEnum.Pilot}#triggers$`,
  pilot_actions: `$${CategoriesEnum.Pilot}#pilot_actions$`,
  fight: `$${CategoriesEnum.Pilot}#fight$`,
  jockey: `$${CategoriesEnum.Pilot}#jockey$`,
  reload: `$${CategoriesEnum.Pilot}#reload$`,
  license_level: `$${CategoriesEnum.Pilot}#license_level$`,
  core_bonuses: `$${CategoriesEnum.Pilot}#core_bonuses$`,
};

export interface pilot extends category {
  keywords: {
    mech_skills: keyword;
    pilot_mech_stats: keyword;
    hull: keyword;
    agility: keyword;
    systems: keyword;
    engineering: keyword;
    grit: keyword;
    talents: keyword;
    triggers: keyword;
    pilot_actions: keyword;
    fight: keyword;
    jockey: keyword;
    reload: keyword;
    license_level: keyword;
    core_bonuses: keyword;
  };
}
