import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { attacksKeywords } from './attacksKeywords.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import {
  techActionKeywords,
  techAction as techActionType,
} from './techActionKeywords.js';

export const techAction: techActionType = {
  keywords: {
    bolster: {
      name: 'bolster',
      page: `${BooksEnum.Core}:[69]`,
      category: 'tech action',
      text: `When you Bolster, you use your mech's formidable processing power to enhance another character's ${mechKeywords.systems}.
      \nTo Bolster, choose a character within ${mechKeywords.sensors}. They receive +2 ${bonusesKeywords.accuracy} on the next ${combatKeywords.skill_check} or ${altText(combatKeywords.saves, 'save')} they make between now and the ${altText(combatKeywords.end_of_next_turn, 'end of their next turn')}.
      Characters can only benefit from one bolster at a time.`,
    },
    scan: {
      name: 'scan',
      page: `${BooksEnum.Core}:[70]`,
      category: 'tech action',
      text: `When you Scan, you use  your mech's powerful sensors to perform a deep scan on an enemy.
      \nTo Scan, choose a character within ${mechKeywords.sensors} and ${combatKeywords.line_of_sight}, then ask the GM for one of the following pieces of information, which they must answer honestly:
      Your target's weapons, systems, and full statistics (${mechKeywords.mech_stats}).
      One piece of hidden information about the target, such as confidential cargo or data, current mission, the identity of the pilot, and so on.
      Generic or public information about the target that can be pulled from an info bank or records, such as the model number of the mech.
      \nAny information gathered is only current at the time of the scan - if the target later takes damage, for instance, you don't receive an update.`,
    },
    lock_on: {
      name: 'lock on',
      page: `${BooksEnum.Core}:[70]`,
      category: 'tech action',
      text: `When you Lock On, you digitally mark a target, lighting them up for your teammates' targeting systems and exposing weak points.
      \nTo Lock On, choose a character within ${mechKeywords.sensors} and ${combatKeywords.line_of_sight}. They gain the ${conditionKeywords.lock_on} ${combatKeywords.condition}. Any character making an ${combatKeywords.attack} against a character with ${conditionKeywords.lock_on} may choose to gain +1 ${bonusesKeywords.accuracy} on that attack and then clear the ${conditionKeywords.lock_on} ${combatKeywords.condition} after that attack resolves. This is called consuming ${conditionKeywords.lock_on}.`,
    },
    invade: {
      name: 'invade',
      page: `${BooksEnum.Core}:[70]`,
      category: 'tech action',
      text: `When you Invade, you mount a direct electronic attack against a target. To Invade, make a ${attacksKeywords.tech_attack} against a characters within ${mechKeywords.sensors} and ${combatKeywords.line_of_sight}. On a success, your target takes ${harmKeywords.heat} and you choose one of the invasion options available to you.
      \nThe only invasion option available by default to all characters is ${techActionKeywords.fragment_signal}, other options are gained through ${mechKeywords.systems} and equipment.
      \nYou can also Invade willing allied characters to create certain effects. If your target is willing and allies, you are automatically succesful, it doesn't count as an ${combatKeywords.attack}, and your target doesn't take any ${harmKeywords.heat}.`,
    },
    fragment_signal: {
      name: 'fragment signal',
      page: `${BooksEnum.Core}:[70]`,
      category: 'tech action',
      text: `You feel false information, obscene messages or phantom signals to your target's computing core. They become ${conditionKeywords.impaired} and ${conditionKeywords.slowed} until the end of their next turn.`,
    },
    tech_actions: {
      name: 'tech actions',
      page: `${BooksEnum.Core}:[69]`,
      category: 'tech action',
      text: `The following tech actions are available to all characters by default:
      ${techActionKeywords.bolster}
      ${techActionKeywords.scan}
      ${techActionKeywords.lock_on}
      ${techActionKeywords.invade}
      \nYou can also take tech actions granted by pilot ${pilotKeywords.talents}, mech's ${mechKeywords.systems}, or equipment.`,
    },
  },
};
