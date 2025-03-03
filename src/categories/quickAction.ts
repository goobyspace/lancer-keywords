import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { attacksKeywords } from './attacksKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import {
  quickActionKeywords,
  quickAction as quickActionType,
} from './quickActionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { techActionKeywords } from './techActionKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const quickAction: quickActionType = {
  keywords: {
    boost: {
      name: 'barrage',
      page: `${BooksEnum.Core}:[69]`,
      category: 'quick action',
      text: `When you boost, you move at least 1 space, up to your speed. This allows you to make an extra ${combatKeywords.movement}, on top of your standard ${altText(combatKeywords.movement, 'move')}. Certain ${pilotKeywords.talents} and ${mechKeywords.systems} can only be used when you boost, not when you make a standard ${altText(combatKeywords.movement, 'move')}.`,
    },
    grapple: {
      name: 'grapple',
      page: `${BooksEnum.Core}:[69]`,
      category: 'quick action',
      text: `When you grapple, you try to grab hold of a target and overpower them - disarming, subduing, or damaging them so they can't do the same to you.
      \nTo grapple, choose an ${altText(movementKeywords.adjacency, 'adjacent')} character and make a ${attacksKeywords.melee_attack}. On a hit:
      \nBoth characters become ${statusKeywords.engaged};
      Neither character can ${quickActionKeywords.boost} or take ${combatKeywords.reactions} for the duration of the grapple;
      The smaller character becomes ${conditionKeywords.immobilized} but moves when the larger party moves, mirroring their ${combatKeywords.movement}. If both parties are the same ${mechKeywords.size}, either can make ${altText(combatKeywords.contested_skill_check, 'contested')} ${pilotKeywords.hull} checks at the start of their turn: the winner counts as larger than the loser until the contest is repeated.
      \nA grapple ends when:
      \nEither character breaks ${movementKeywords.adjacency}, such as if they are ${altText(gearKeywords.knockback, 'knocked back')} by another effect;
      The attacker chooses to end the grapple as a ${combatKeywords.free_action};
      The defender breaks free by succeeding on a ${altText(combatKeywords.contested_skill_check, 'contested')} ${pilotKeywords.hull} check as a ${combatKeywords.quick_action}.
      \nIf a grapple involves more than two characters, the same rules apply, but when counting ${mechKeywords.size}, add together the ${mechKeywords.size} of all characters on each side. For example, if two ${mechKeywords.size} 1 allied characters are grapping a single ${mechKeywords.size} 2 enemy, the allied characters count as a combined ${mechKeywords.size} 2 and the same size for the purpose of grapple.`,
    },
    hide: {
      name: 'hide',
      page: `${BooksEnum.Core}:[69]`,
      category: 'quick action',
      text: `When you hide, you obscure the position of your mech in order to reposition, avoid incoming fire, ${mechKeywords.repair}, or ambush.
      \nTo hide, you must not be ${statusKeywords.engaged} and you must either be outside of any enemies' ${combatKeywords.line_of_sight}, obscured by sufficient ${combatKeywords.cover}, or ${altText(combatKeywords.invisibility, 'invisible')}. If you hide while meeting one of those criteria, you gain the ${statusKeywords.hidden} ${combatKeywords.status}.
      \n${combatKeywords.hard_cover} is sufficient to hide as long as it is large enough to totally conceal you, but ${combatKeywords.soft_cover} is only sufficient if you are completely inside an area or zone that grants ${combatKeywords.soft_cover} - many ${mechKeywords.systems} and ${pilotKeywords.talents} that grain ${combatKeywords.soft_cover} or plain old obscurement just don't provide enough to hide behind!
      \nIf you are ${altText(combatKeywords.invisibility, 'invisible')}, you can always hide, regardless of ${combatKeywords.cover}, unless you're ${statusKeywords.engaged}.
      \nThe exact location of hidden targets cannot be identified and they cannot be targeted directly by attacks or hostile actions, but they can still be hit by attacks that affect an area. Although NPCs cannot perfectly locate a hidden character, they might still know an approximate location. Thus, an NPC could flush an area with a flamethrower, even if they don't know exactly where a hidden player is lurking.
      \nAdditionally, other characters ignore ${movementKeywords.engagement} with you while you are ${statusKeywords.hidden} - it's assumed you're trying to stay stealthy.
      \nYou cease to be ${statusKeywords.hidden} if you make an ${combatKeywords.attack}, (${altText(attacksKeywords.melee_attack, 'melee')}, ${altText(attacksKeywords.ranged_attack, 'ranged')}, or ${altText(attacksKeywords.tech_attack, 'tech')}) or if your mech takes a hostile action (such as forcing a target to make a ${altText(combatKeywords.saves, 'save')}). Using ${quickActionKeywords.boost} or taking ${combatKeywords.reactions} with your mech also causes you to lose ${statusKeywords.hidden}. Other actions can be taken as normal.
      \nYou also immediately lose ${statusKeywords.hidden} if your ${combatKeywords.cover} disappears or is destroyed, or if you lose ${combatKeywords.cover} due to ${combatKeywords.line_of_sight} (e.g., if a mech ${altText(movementKeywords.jumping, 'jumps')} over a wall and can now draw an unbroken line of ${combatKeywords.line_of_sight} to you). If you're ${statusKeywords.hidden} while ${statusKeywords.invisible}, you lose ${statusKeywords.hidden} when you cease to be ${statusKeywords.invisible} unless you are in ${combatKeywords.cover}.`,
    },
    quick_tech: {
      name: 'quick tech',
      page: `${BooksEnum.Core}:[69]`,
      category: 'quick action',
      text: `When you use quick tech, you engage in ${combatKeywords.electronic_warfare}, countermeasures, and other technical actions, often aided by a mech's powerful computing and simulation cores.
      \nEach time you take this action, you choose an option from the ${altText(techActionKeywords.tech_actions, 'quick tech list')}. All mechs have access to these options, but some systems enhance them or make new options available.
      \nUnlike other actions, quick tech can be taken more than once per turn; however, a different option must be chosen every time, unless specified otherwise or granted as a ${combatKeywords.free_action}.`,
    },
    ram: {
      name: 'ram',
      page: `${BooksEnum.Core}:[70]`,
      category: 'quick action',
      text: `When you ram, you make a ${attacksKeywords.melee_attack} with the aim of knocking a target down or back.
      \nTo ram, make a ${attacksKeywords.melee_attack} against an ${altText(movementKeywords.adjacency, 'adjacent')} character the same ${mechKeywords.size} or smaller than you. On a success, your target is knocked ${statusKeywords.prone} and you may also choose to knock them back by one space, directly away from you.`,
    },
    search: {
      name: 'search',
      page: `${BooksEnum.Core}:[70]`,
      category: 'quick action',
      text: `When you search, you attempt to identify ${statusKeywords.hidden} characters. To search in a mech, choose a character within your ${mechKeywords.sensors} that you suspect is ${statusKeywords.hidden} and make a ${altText(combatKeywords.contested_skill_check, 'contested')} ${pilotKeywords.systems} check against their ${pilotKeywords.agility}.
      \nTo search as a pilot on foot, make a ${combatKeywords.contested_skill_check}, adding bonuses from triggers as normal. This can be used to reveal characters within ${combatKeywords.range} 5.
      \nOnce a ${statusKeywords.hidden} character has been found using search, they immmediately lose ${statusKeywords.hidden} and can be located again by any character.`,
    },
    skirmish: {
      name: 'skirmish',
      page: `${BooksEnum.Core}:[70]`,
      category: 'quick action',
      text: `When you skirmish, you attack with a single ${mechKeywords.weapon}.
      \nTo skirmish, choose a ${mechKeywords.weapon} and a valid target within ${combatKeywords.range} (or ${combatKeywords.threat}) then make an ${combatKeywords.attack}.
      \nIn addition to your primary attack, you may also attack with a different ${weaponKeywords.auxiliary} ${mechKeywords.weapon} on the same ${altText(mechKeywords.mounts, 'mount')}. That weapon doesn't deal bonus damage.
      \n${weaponKeywords.superheavy} ${altText(mechKeywords.weapon, 'weapons')} are too cumbersome to use in a skirmish, and can only be fired as part of a ${fullActionKeywords.barrage}.`,
    },
  },
};
