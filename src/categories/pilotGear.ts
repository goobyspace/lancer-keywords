import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { combatKeywords } from './combatKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';

export const pilotGear: category = {
  keywords: {
    archaic: {
      name: 'archaic',
      page: `${BooksEnum.Core}:[106]`,
      category: 'pilot gear',
      text: `This weapon is old-fashioned and can't harm mechs.`,
    },
    personal_armor: {
      name: 'personal armor',
      page: `${BooksEnum.Core}:[106]`,
      category: 'pilot gear',
      text: `This gear offers protection in combat, but it is obvious to observers and can't be hidden. Only one piece of personal armor can be worn at a time. Putting on personal armor takes 10-20 minutes, and while wearing it, pilots have restricted mobility and dexterity. Nobody wears armor unless they're expecting to go into a warzone.`,
    },
    gear: {
      name: 'gear',
      page: `${BooksEnum.Core}:[106]`,
      category: 'pilot gear',
      text: `This is a tool, piece of equipment, or another item. Pilots can have up to three of these at a time.`,
    },
    sidearm: {
      name: 'sidearm',
      page: `${BooksEnum.Core}:[106]`,
      category: 'pilot gear',
      text: `This weapon can be used to ${pilotKeywords.fight} as a ${combatKeywords.quick_action} instead of a ${combatKeywords.full_action}.`,
    },
  },
};
