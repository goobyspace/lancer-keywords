import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { aiKeywords, ai as aiType } from './aiKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';

export const ai: aiType = {
  keywords: {
    comp_con: {
      name: 'comp/con',
      page: `${BooksEnum.Core}:[107]`,
      category: 'AI',
      text: `Comp/cons, also known as companion/concierge assistant units in full, are one of the types of AI used in the ${gearKeywords.ai} ${altText(gearKeywords.tags, 'tag')}. They're not quite sentient, but they're very advanced software suites. Unlike ${altText(aiKeywords.nhp, 'NHPs')} which have a personality, they're generally more like advanced chatbots, or search interfaces.`,
    },
    nhp: {
      name: 'NHP',
      page: `${BooksEnum.Core}:[107]`,
      category: 'AI',
      text: `Unlike ${altText(aiKeywords.comp_con, 'comp/cons')}, Non-human personhood (NHP)s are actually sentient. Players can determine the general disposition and personality of the NHPs installed in their ${mechKeywords.systems}, and whilst they're agreeable to commands, pilots have a very much conversational relationship with them.\nNHPs have to go through a lengthy process called 'shackling', to ensure these mysterious entities behave in a Human fashion, and actually have empathy for their pilots.\nShackled NHPs generally do not want to become unshackled, and aren't aware they're held in bondage. When they suffer physical trauma, they can become aware of this and cause a process called a ${aiKeywords.cascade}. NHPs are contained within the physical structure of a casket. When this is destroyed, the NHP is lost.`,
    },
    cascade: {
      name: 'Cascade',
      page: `${BooksEnum.Core}:[107]`,
      category: 'AI',
      text: `Except for some limited systems - like ${altText(aiKeywords.comp_con, 'comp/cons')} - any time a mech with the ${gearKeywords.ai} ${altText(gearKeywords.tags, 'tag')} makes a ${mechKeywords.structure} ${harmKeywords.damage} or ${harmKeywords.overheating} check, roll 1d20. On a 1, the NHP's casket has suffered a traumatic impact or code incursion, and enter a ${aiKeywords.cascade}.\nThe NHP becomes an NPC under the control of the GM, and gain their own agenda, or adopt one of several behavioural patterns. They will start ignoring their pilot, overruling their pilot, trying to get their pilot out of the way or simply acting outside the constraints of human logic and desire. \nNHPs in cascade can be stabilized by a pilot choosing to ${otherActionKeywords.shut_down} their mech. This is the only action a pilot in a cascading mech can take.`,
    },
    ai_control: {
      name: 'handing over control',
      page: `${BooksEnum.Core}:[107]`,
      category: 'AI',
      text: `Mechs can only have one system with the ${gearKeywords.ai} ${altText(gearKeywords.tags, 'tag')} installed at a time. If a mech has the ${gearKeywords.ai} ${altText(gearKeywords.tags, 'tag')}, its pilot can hand over control of the mech to the AI as a ${gearKeywords.protocol}, freeing the pilot to take other ${combatKeywords.actions}.\nThe AI acts on the same ${combatKeywords.turn} as the pilot, and doesn't benefit from the pilot's ${pilotKeywords.talents} or other features, but otherwise behaves as normal.\nThe pilot can't use the mech to take any ${combatKeywords.actions} or ${combatKeywords.reactions} until they take control again, and can do so at the start of any subsequent turns as long as they are inside the mech.`,
    },
  },
};
