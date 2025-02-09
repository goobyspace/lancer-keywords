// 99% of info is gonna come from core but just adding this incase
// most of the other info will be lore, mech frames, weapons, etc and although i'm a little scared of lore
// weapons and mechs and talents and stuff could be handy
// just a question of the whole "can someone see it if they dont have the book"
// i think the answer is yes, but i'm not sure

import { categories } from './types.js';

// eslint-disable-next-line no-shadow
enum Books {
  // core
  'Core' = 'C',
  // narratives
  'No Room for a Wallflower' = 'NRfaW',
  'Operation Winter Scar' = 'OWS',
  'Operation Solstice Rain' = 'OSR',
  'Dustgrave' = 'DG',
  "Siren's Song: A Mountain's Remorse" = 'SS:AMR',
  'Shadow of the Wolf' = 'SotW',
  // settings
  'The Long Rim' = 'TLR',
  'The Karrakin Trade Baronies' = 'TKTB',
}

// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $category/keyword$ and filter that out in the keyword component
// might make this an object yet so we can nest stuff but for now this is fine
// probably needed though if we get 100s of keywords
// eslint-disable-next-line no-shadow
export const Keywords = {
  // attacks
  techAttackAttacks: '$attacks/tech_attack$',
  // modifiers
  accuracy: '$modifiers/accuracy$',
  difficulty: '$modifiers/difficulty$',
  // stats
  eDefense: '$stats/e_defense$',
  techAttackStat: '$stats/tech_attack$',
  grit: '$stats/grit$',
  sensors: '$stats/sensors$',
};

// current ones arent done yet these are just quick copy pastes
// for example all the stat ones should mention where you get the stat from, and maybe a link to default stats? or at least the concept of stats
export const Categories: categories = {
  attacks: {
    keywords: {
      tech_attack: {
        name: 'TECH ATTACK',
        page: `${Books.Core}:[64]`,
        category: 'attacks',
        colour: 'red',
        text: `The attacker chooses a target within their ${Keywords.sensors} and line of sight, then makes a tech attack roll - rolling 1d20, plus ${Keywords.techAttackStat} and any ${Keywords.accuracy} or ${Keywords.difficulty}. To hit, they must match or beat the target’s ${Keywords.eDefense}. \nTech attacks ignore cover.`,
      },
    },
  },
  modifiers: {
    keywords: {
      accuracy: {
        name: 'ACCURACY',
        page: `${Books.Core}:[13]`,
        category: 'modifiers',
        colour: 'blue',
        text: `${Keywords.accuracy} and ${Keywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
      },
      difficulty: {
        name: 'DIFFICULTY',
        page: `${Books.Core}:[13]`,
        category: 'modifiers',
        colour: 'blue',
        text: `${Keywords.accuracy} and ${Keywords.difficulty} are temporary modifiers gained and lost in rapid, chaotic moments of action'`,
      },
    },
  },
  stats: {
    keywords: {
      e_defense: {
        name: 'E-DEFENSE',
        page: `${Books.Core}:[13]`,
        category: 'stats',
        colour: 'gray',
        text: `E-Defense is a mech’s ability to resist electronic warfare attacks. It’s used to resist ${Keywords.techAttackAttacks}.`,
      },
      tech_attack: {
        name: 'TECH ATTACK',
        page: `${Books.Core}:[64]`,
        category: 'stats',
        colour: 'gray',
        text: `You add your mech’s ${Keywords.techAttackStat} as a bonus instead of GRIT when you conduct electronic warfare.`,
      },
      grit: {
        name: 'GRIT',
        page: `${Books.Core}:[13]`,
        category: 'stats',
        colour: 'gray',
        text: `Pilots are lucky and unique individuals, multi-talented and resilient. Even so, brand-new pilots don’t measure up to tempered, battle-hardened veterans when push comes to shove. The benefits of experience are measured by GRIT, a bonus that reflects your pilot’s deep reservoirs of resolve and will to live. \nGRIT is half of your character’s license level, rounded up. It improves attack bonuses, hit points, and save targets for both your pilot and your mech.`,
      },
      sensors: {
        name: 'SENSORS',
        page: `${Books.Core}:[13]`,
        category: 'stats',
        colour: 'gray',
        text: `Sensors are a mech’s ability to detect and track targets. A mech’s sensor range is the maximum distance at which it can detect a target. Sensors are also used to do ${Keywords.techAttackAttacks}.`,
      },
    },
  },
};
