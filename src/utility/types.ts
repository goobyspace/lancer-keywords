import { ai } from '../categories/aiKeywords.js';
import { attacks } from '../categories/attacksKeywords.js';
import { bonuses } from '../categories/bonusesKeywords.js';
import { combat } from '../categories/combatKeywords.js';
import { condition } from '../categories/conditionKeywords.js';
import { fullAction } from '../categories/fullActionKeywords.js';
import { gear } from '../categories/gearKeywords.js';
import { harm } from '../categories/harmKeywords.js';
import { mech } from '../categories/mechKeywords.js';
import { movement } from '../categories/movementKeywords.js';
import { otherAction } from '../categories/otherActionKeywords.js';
import { pilot } from '../categories/pilotKeywords.js';
import { pilotGear } from '../categories/pilotGearKeywords.js';
import { quickAction } from '../categories/quickActionKeywords.js';
import { reaction } from '../categories/reactionKeywords.js';
import { status } from '../categories/statusKeywords.js';
import { techAction } from '../categories/techActionKeywords.js';
import { weapon } from '../categories/weaponKeywords.js';
// tldr category is stuff like attacks
// then a single keyword has a name, which would be for example 'tech attack'
// and then a text which would be the explanation of what a tech attack is
// each keyword also has a page and a category, this is so it can find itself again
// pages follow the following format: single letter for the book it came from, colon, bracket open, page number, bracket close
// e.g. C:[123]
// the book notation can be found in the books enum in enums.ts
// each individual category can be found in the [category]Keywords.ts files in the categories folder

export interface keyword {
  name: string;
  text: string;
  page: string;
  category: string;
}

export interface category {
  keywords: { [key: string]: keyword };
}

export interface categories {
  [key: string]: category;
}

export interface setCategories extends categories {
  ai: ai;
  attacks: attacks;
  bonuses: bonuses;
  combat: combat;
  condition: condition;
  fullAction: fullAction;
  gear: gear;
  harm: harm;
  mech: mech;
  movement: movement;
  otherAction: otherAction;
  pilot: pilot;
  pilotGear: pilotGear;
  quickAction: quickAction;
  reaction: reaction;
  status: status;
  techAction: techAction;
  weapon: weapon;
}
