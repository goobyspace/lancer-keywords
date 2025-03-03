import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { aiKeywords } from './aiKeywords.js';
import { attacksKeywords } from './attacksKeywords.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { reactionKeywords } from './reactionKeywords.js';
import { statusKeywords, status as statusType } from './statusKeywords.js';
import { techActionKeywords } from './techActionKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const status: statusType = {
  keywords: {
    danger_zone: {
      name: 'brace',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `Characters are in danger_zone when half or more of their ${mechKeywords.heat_cap} is filled in. They're smoking hot, which enables some ${altText(combatKeywords.attack, 'attacks')}, ${pilotKeywords.talents}, and effects.`,
    },
    down_and_out: {
      name: 'down and out',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `Pilots that are down and out are unconscious and ${conditionKeywords.stunned} - if they take any more ${harmKeywords.damage}, they die. They'll regain consciousness and half of their ${mechKeywords.hp} when they ${mechKeywords.rest}.`,
    },
    engaged: {
      name: 'engaged',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `If a character moves ${altText(movementKeywords.adjacency, 'adjacent')} to a hostile character, they both gain the engaged ${combatKeywords.status} for as long as they remain ${altText(movementKeywords.adjacency, 'adjacent')} to one another. ${altText(attacksKeywords.ranged_attack, 'ranged attacks')} made by engaged characters receive +1 ${bonusesKeywords.difficulty}. Additionally, characters that become engaged by targets of equal or greater ${mechKeywords.size} during the course of a ${combatKeywords.movement} must stop moving immediately and lose any unused movement.`,
    },
    exposed: {
      name: 'exposed',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `Characters become exposed when they're dealing with runaway ${harmKeywords.heat} buildup - their armor is weakened by ${harmKeywords.overheating}, their vents are open, and their weapons are spinning down, proving plenty of weak points. All ${harmKeywords.kinetic}, ${harmKeywords.explosive}, or ${harmKeywords.energy} ${harmKeywords.damage} taken by exposed characters is doubled, before applying any reductions. A mech can clear exposed by taking the ${fullActionKeywords.stabilize} action.`,
    },
    hidden: {
      name: 'hidden',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `Hidden characters can't be targeted by hostile ${altText(combatKeywords.attack, 'attacks')} or ${combatKeywords.actions}, don't cause ${movementKeywords.engagement}, and enemies only know their approximate location. ${altText(combatKeywords.attack, 'attacking')}, forcing ${combatKeywords.saves}, taking ${combatKeywords.reactions}, using ${quickActionKeywords.boost}, and losing ${combatKeywords.cover} all remove hidden after they resolve. Characters can find hidden characters with ${quickActionKeywords.search} and hide with ${quickActionKeywords.hide}.`,
    },
    invisible: {
      name: 'invisible',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `All attacks against invisible characters, regardless of ${weaponKeywords.type}, have a 50 percent chance to miss outright, before an ${combatKeywords.attack} roll is made. Roll a dice or flip a coin to determine if the attack misses.
      \nAdditionally, invisible characters can always ${quickActionKeywords.hide}, even without ${combatKeywords.cover}.`,
    },
    prone: {
      name: 'prone',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `Attacks against prone targets receive +1 ${bonusesKeywords.accuracy}.
      \nAdditionally, prone characters are ${conditionKeywords.slowed} and count as moving in difficult ${movementKeywords.terrain}. Characters can remove prone by standing up instead of taking their standard ${altText(combatKeywords.movement, 'move')}, unless they're ${conditionKeywords.immobilized}. Standing up doesn't count as ${combatKeywords.movement}, so doesn't trigger ${reactionKeywords.overwatch} or other effects.`,
    },
    shut_down: {
      name: 'shut down',
      page: `${BooksEnum.Core}:[77]`,
      category: 'status',
      text: `When a mech is shut down:
      \nAll ${harmKeywords.heat} is cleared, as is ${statusKeywords.exposed};
      Any ${altText(aiKeywords.cascade, 'cascading')} ${altText(aiKeywords.nhp, 'NHPs')} return to a normal state.;
      Any statuses or conditions affecting the mech caused by ${techActionKeywords.tech_actions}, such as ${conditionKeywords.lock_on}, immediately end;
      The mech gains ${harmKeywords.immunity} to all ${techActionKeywords.tech_actions} and ${altText(attacksKeywords.tech_attack, 'attacks')}, including any from allied characters;
      The mech is ${conditionKeywords.stunned} indefinitely. Nothing can prevent this ${combatKeywords.condition}, and it remains until the mech ceases to be ${statusKeywords.shut_down}.
      \nThe only way to remove the ${statusKeywords.shut_down} ${combatKeywords.status} is to ${otherActionKeywords.boot_up} the mech.`,
    },
  },
};
