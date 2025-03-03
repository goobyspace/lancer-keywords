import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { techActionKeywords } from './techActionKeywords.js';
import { condition as conditionType } from './conditionKeywords.js';

export const condition: conditionType = {
  keywords: {
    immobilized: {
      name: 'immobilized',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Immobilized characters cannot make any ${altText(combatKeywords.movement, 'voluntary movement')}, although involuntary movements (such as being ${quickActionKeywords.ram}) are unaffected.`,
    },
    impaired: {
      name: 'impaired',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Impared characters receive a +1 ${bonusesKeywords.difficulty} on all ${altText(combatKeywords.attack, 'attacks')}, ${combatKeywords.saves}, and ${altText(combatKeywords.skill_check, 'skill checks')}.`,
    },
    jammed: {
      name: 'jammed',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Jammed character's can't:
      \nUse comms to talk to other characters;
      \nMake ${altText(combatKeywords.attack, 'attacks')}, other than ${fullActionKeywords.improvised_attack}, ${quickActionKeywords.grapple}, and ${quickActionKeywords.ram};
      \nTake ${combatKeywords.reactions}, or take or benefit from ${techActionKeywords.tech_actions}.`,
    },
    lock_on: {
      name: 'lock on',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Hostile characters can choose to consume a character's Lock On ${combatKeywords.condition} in exchange for +1 ${bonusesKeywords.accuracy} on their next ${combatKeywords.attack} against that character.
      \nLock On is also required to use some ${pilotKeywords.talents} & ${mechKeywords.systems}.`,
    },
    shredded: {
      name: 'shredded',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Shredded characters don't benefit from ${harmKeywords.armor} or ${harmKeywords.resistance}.`,
    },
    slowed: {
      name: 'slowed',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `The only move slowed characters can make is their standard ${altText(combatKeywords.movement, 'move')}, on their own turn - they can't ${quickActionKeywords.boost} or make special moves granted by ${pilotKeywords.talents}, ${mechKeywords.systems}, or ${altText(mechKeywords.weapon, 'weapons')}.`,
    },
    stunned: {
      name: 'stunned',
      page: `${BooksEnum.Core}:[78]`,
      category: 'condition',
      text: `Stunned mechs cannot ${combatKeywords.overcharge}, ${altText(combatKeywords.movement, 'move')} or take any ${combatKeywords.actions} - including ${altText(combatKeywords.free_action, 'free actions')} and ${combatKeywords.reactions}. Pilots can still ${otherActionKeywords.mount}, ${otherActionKeywords.dismount}, and ${otherActionKeywords.eject} from mechs and can take actions normally.
      \nStunned mechs have a maximum of 5 ${mechKeywords.evasion}, and automatically fail all ${pilotKeywords.hull} and ${pilotKeywords.agility} ${altText(combatKeywords.skill_check, 'checks')} and ${combatKeywords.saves}.`,
    },
  },
};
