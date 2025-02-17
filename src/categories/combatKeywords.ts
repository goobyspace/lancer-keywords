import { CategoriesEnum } from '../utility/enums.js';

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $#category/keyword$
// we split the text on the $ sign and then filter on the # to see what is a keyword and what isnt
export const combatKeywords = {
  movement: `$${CategoriesEnum.Combat}#movement$`,
  critical_hits: `$${CategoriesEnum.Combat}#critical_hits$`,
  range: `$${CategoriesEnum.Combat}#range$`,
  threat: `$${CategoriesEnum.Combat}#threat$`,
  line_of_sight: `$${CategoriesEnum.Combat}#line_of_sight$`,
  cover: `$${CategoriesEnum.Combat}#cover$`,
  soft_cover: `$${CategoriesEnum.Combat}#soft_cover$`,
  hard_cover: `$${CategoriesEnum.Combat}#hard_cover$`,
  invisibility: `$${CategoriesEnum.Combat}#invisibility$`,
  actions: `$${CategoriesEnum.Combat}#actions$`,
  full_action: `$${CategoriesEnum.Combat}#full_action$`,
  quick_action: `$${CategoriesEnum.Combat}#quick_action$`,
  other_action: `$${CategoriesEnum.Combat}#other_action$`,
  turn: `$${CategoriesEnum.Combat}#turn$`,
  round: `$${CategoriesEnum.Combat}#round$`,
  scene: `$${CategoriesEnum.Combat}#scene$`,
  action_resolution: `$${CategoriesEnum.Combat}#action_resolution$`,
  end_of_turn: `$${CategoriesEnum.Combat}#end_of_turn$`,
  end_of_next_turn: `$${CategoriesEnum.Combat}#end_of_next_turn$`,
  overcharge: `$${CategoriesEnum.Combat}#overcharge$`,
  reactions: `$${CategoriesEnum.Combat}#reactions$`,
  free_action: `$${CategoriesEnum.Combat}#free_action$`,
  attack: `$${CategoriesEnum.Combat}#attack$`,
  status: `$${CategoriesEnum.Combat}#status$`,
  condition: `$${CategoriesEnum.Combat}#condition$`,
  electronic_warfare: `$${CategoriesEnum.Combat}#electronic_warfare$`, // not a keyword in core, but a common term anyway
  skill_check: `$${CategoriesEnum.Combat}#skill_check$`,
  saves: `$${CategoriesEnum.Combat}#saves$`,
  contested_skill_check: `$${CategoriesEnum.Combat}#contested_skill_check$`,
};
