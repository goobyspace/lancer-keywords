import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';

export const reaction: category = {
  keywords: {
    brace: {
      name: 'brace',
      page: `${BooksEnum.Core}:[73]`,
      category: 'reaction',
      text: `1/round
      \nTrigger: You are hit by an attack and damage has been rolled.
      \nEffect: You count as having ${harmKeywords.resistance} to all ${harmKeywords.damage}, ${harmKeywords.burn} and ${harmKeywords.heat} from the triggering attack, and until the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')}, all other attacks against you are made with +1 ${bonusesKeywords.difficulty}.
      Due to the stress of bracing, you cannot take ${combatKeywords.reactions} until the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')} and on that ${combatKeywords.turn}, you can only take one ${combatKeywords.quick_action} - you cannot ${combatKeywords.overcharge}, ${altText(combatKeywords.movement, 'move')} normally, take ${altText(combatKeywords.full_action, 'full actions')}, or take ${altText(combatKeywords.free_action, 'free actions')}.`,
    },
    overwatch: {
      name: 'overwatch',
      page: `${BooksEnum.Core}:[73]`,
      category: 'reaction',
      text: `1/round
      \nTrigger: A hostile character starts any ${combatKeywords.movement} (including ${quickActionKeywords.boost} and other ${combatKeywords.actions}) inside one of your ${altText(mechKeywords.weapon, 'weapons')} ${combatKeywords.threat}. Unless specified otherwise, all weapons default to 1 ${combatKeywords.threat}.
      \nEffect: Trigger Overwatch, immediately using that ${mechKeywords.weapon} to ${quickActionKeywords.skirmish} against that character as a ${altText(combatKeywords.reactions, 'reaction')}, before they move.`,
    },
  },
};
