import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { attackKeywords } from './attackKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { techActionKeywords } from './techActionKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const fullAction: category = {
  keywords: {
    barrage: {
      name: 'barrage',
      page: `${BooksEnum.Core}:[71]`,
      category: 'full action',
      text: `When you barrage, you ${combatKeywords.attack} with two ${altText(mechKeywords.weapon, 'weapons')}, or with one ${weaponKeywords.superheavy} ${mechKeywords.weapon}.
      \nTo barrage, choose your ${mechKeywords.weapon} and either one target or different targets - within ${combatKeywords.range} - then make an ${combatKeywords.attack} with each ${mechKeywords.weapon}.
      \nIn addition to your primary ${altText(combatKeywords.attack, 'attacks')}, you may also attack with an ${weaponKeywords.auxiliary} ${mechKeywords.weapon} on each mount that was fired, so long as the ${weaponKeywords.auxiliary} ${mechKeywords.weapon} hasn't yet been fired this ${altText(combatKeywords.actions, 'action')}.
      \n${weaponKeywords.superheavy} ${altText(mechKeywords.weapon, 'weapons')} can only be fired as part of a barrage.`,
    },
    disengage: {
      name: 'disengage',
      page: `${BooksEnum.Core}:[71]`,
      category: 'full action',
      text: `When you disengage, you attempt to extricate yourself safely from a dangerous situation, make a steady and measured retreat, or rely on your mech's agility to slip in and out of threat ranges faster than an enemy can strike.
      \nUntil the end of your current ${combatKeywords.turn}, you ignore ${movementKeywords.engagement} and your ${combatKeywords.movement} does not provoke ${combatKeywords.reactions}.`,
    },
    full_tech: {
      name: 'full tech',
      page: `${BooksEnum.Core}:[71]`,
      category: 'full action',
      text: `When you use full tech, you perform multiple ${techActionKeywords.tech_actions} or a single, more complex action.
      \nTo use full tech, choose two ${quickActionKeywords.quick_tech} options or a single ${altText(mechKeywords.systems, 'system')} or tech option that requires full tech to activate. If you choose two ${quickActionKeywords.quick_tech} options, you can choose the same option multiple times.`,
    },
    improvised_attack: {
      name: 'improvised attack',
      page: `${BooksEnum.Core}:[71]`,
      category: 'full action',
      text: `When you make an improvised attack, you attack with a rifle butt, fist, or another improvised melee weapon. You can use anything from the butt of a ${mechKeywords.weapon} to a slab of concrete or a length of hull plating - the flavor of the attack is up to you!
      \nTo make an improvised attack, make a ${attackKeywords.melee_attack} against an ${altText(movementKeywords.adjacency, 'adjacent')} target. On success they take 1d6 ${harmKeywords.kinetic} ${harmKeywords.damage}.`,
    },
    stabilize: {
      name: 'stabilize',
      page: `${BooksEnum.Core}:[71]`,
      category: 'full action',
      text: `When you stabilize, you enact emergency protocols to purge your mech's ${mechKeywords.systems} of excess ${harmKeywords.heat}, ${mechKeywords.repair} your chassic where you can, or eliminate hostile code.
      \nTo stabilize, choose one of the following:
      \nCool your mech, clearing all ${harmKeywords.heat} and ${statusKeywords.exposed}.
      \nMark 1 ${mechKeywords.repair} to restore all ${mechKeywords.hp}.
      \nAdditionally, choose one of the following:
      \nReload all ${gearKeywords.loading} ${altText(mechKeywords.weapon, 'weapons')}.
      \nClear any ${harmKeywords.burn} currently affecting your mech.
      \nClear a ${combatKeywords.condition} that wasn't caused by your own ${mechKeywords.systems}, ${pilotKeywords.talents}, etc.
      \nClear an ${altText(movementKeywords.adjacency, 'adjacent')} allied character's ${combatKeywords.condition} that wasn't caused by one of their own ${mechKeywords.systems}, ${pilotKeywords.talents}, etc.`,
    },
  },
};
