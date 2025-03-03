import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { aiKeywords } from './aiKeywords.js';
import { attacksKeywords } from './attacksKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import {
  otherActionKeywords,
  otherAction as otherActionType,
} from './otherActionKeywords.js';
import { pilotGearKeywords } from './pilotGearKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { techActionKeywords } from './techActionKeywords.js';

export const otherAction: otherActionType = {
  keywords: {
    activate: {
      name: 'activate',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `When you activate, you use a ${altText(mechKeywords.systems, 'system')} or piece of ${pilotGearKeywords.gear} that requires either a ${altText(combatKeywords.quick_action, 'quick')} or ${altText(combatKeywords.full_action, 'full')} action. These systems have the ${combatKeywords.quick_action} or ${combatKeywords.full_action} ${gearKeywords.tags}. You can activate any number of times a ${combatKeywords.turn}, but can't active the same ${altText(mechKeywords.systems, 'system')} more than once unless you can do so as a ${combatKeywords.free_action}.`,
    },
    boot_up: {
      name: 'boot up',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `You can boot up a mech that you are piloting as a ${combatKeywords.full_action}, clearing ${statusKeywords.shut_down} and restoring your mech to a powered state.`,
    },
    mount: {
      name: 'mount',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `When you mount, you climb onto your mech. Mounting is a ${combatKeywords.full_action}, you must be ${(movementKeywords.adjacency, 'adjacent')} to your mech to mount. Additionally, you can also mount willing allied mechs or vehicles. When you do so, move into the same space and then move with them. See this as sitting in the passenger seat, or sitting on a mech's shoulders.
      \nMounting and ${altText(otherActionKeywords.dismount, 'dismounting')} are the preferred terms amongst most pilots. You don't "get in" or "climb aboard" - you mount. You're the cavalry, after all.`,
    },
    dismount: {
      name: 'dismount',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `When you dismount, you climb off your mech. Dismounting is a ${combatKeywords.full_action}. When you dismount, you are placed in an ${(movementKeywords.adjacency, 'adjacent')} space - if there are no free spaces, you cannot dismount. Additionally, dismounting is also how you get off allied mechs or vehicles you might be riding along with. Lastly, if you need to get off your mech quickly, you can always ${otherActionKeywords.eject}. 
      \n${altText(otherActionKeywords.mount, 'mounting')} and dismounting are the preferred terms amongst most pilots. You don't "get in" or "climb aboard" - you mount. You're the cavalry, after all.`,
    },
    eject: {
      name: 'eject',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `Ejecting is a ${combatKeywords.quick_action}, flying 6 spaces in the direction of your choice; however, this is a single-use system for emergency use only - it leaves your mech ${conditionKeywords.impaired}. Your mech remains ${conditionKeywords.impaired} and you cannot eject again until your next ${mechKeywords.full_repair}.`,
    },
    prepare: {
      name: 'prepare',
      page: `${BooksEnum.Core}:[71]`,
      category: 'otherAction',
      text: `When you prepare, you turn another ${combatKeywords.quick_action} into a ${altText(combatKeywords.reactions, 'reaction')}. As a ${combatKeywords.quick_action}, you can prepare any other ${combatKeywords.quick_action} and specify a trigger. Until the start of your next turn, when it is triggered, you can take this ${altText(combatKeywords.actions, 'action')} as a ${altText(combatKeywords.reactions, 'reaction')}.
      \nThe trigger for your prepared ${altText(combatKeywords.actions, 'action')} must be phrased as "When X, then Y" where X is a ${altText(combatKeywords.reactions, 'reaction')}, ${altText(combatKeywords.actions, 'action')}, or ${altText(combatKeywords.movement, 'move')} taken by a hostile or allied character and Y is your ${combatKeywords.quick_action}. For example, "When an allied character moves ${altText(movementKeywords.adjacency, 'adjacent')} to me, I want to ${altText(gearKeywords.thrown_x, 'throw')} a smoke ${gearKeywords.grenade}." or "When a hostile character moves ${altText(movementKeywords.adjacency, 'adjacent')} to me, I want to ${quickActionKeywords.ram} them."
      \nYour preparation counts as taking the action, so it follows all usual restrictions on that action and on taking multiple actions. You can't, for example, ${quickActionKeywords.skirmish} and then use prepare to ${quickActionKeywords.skirmish} again; you also can't ${altText(combatKeywords.movement, 'move')} and then prepare to ${quickActionKeywords.skirmish} with an ordnance weapon, which normally needs to be fired before moving or doing anything else on your turn.
      \nAdditionally, after you prepare an action, you can't ${altText(combatKeywords.movement, 'move')} or take any other ${altText(combatKeywords.actions, 'action')} or ${combatKeywords.reactions} until the start of your next turn or until your action has been triggered, whichever comes first.
      \nAlthough you can't take ${combatKeywords.reactions} while holding a prepared action, you can take them normally after it has been triggered. You can also drop your prepared action, allowing you to take ${combatKeywords.reactions} as usual. If the trigger condition isn't met, you lose your prepared action.
      \nWhen you prepare, it is visible to casual observers (e.g., you clearly take aim or cycle up systems).`,
    },
    self_destruct: {
      name: 'self-destruct',
      page: `${BooksEnum.Core}:[72]`,
      category: 'otherAction',
      text: `When you self-destruct, you overload your mech's react in a final, catastrophic play if there's no other option for escape or you deem your sacrifice necessary.
      \nYou can self-destruct as a ${combatKeywords.quick_action}, initiating a ${harmKeywords.reactor_meltdown}. At the ${altText(combatKeywords.end_of_next_turn, 'end of their your turn')} or at the end of one of your ${altText(combatKeywords.turn, 'turns')} within the following two ${altText(combatKeywords.round, 'rounds')} (your choice), your mech explodes as though it suffered a ${harmKeywords.reactor_meltdown}.`,
    },
    shut_down: {
      name: 'shut down',
      page: `${BooksEnum.Core}:[72]`,
      category: 'otherAction',
      text: `When you shut down, your mech powers completely off and enters a rest state. It's always risky to do in the field, but sometimes necessary to prevent a catastrophic systems ${altText(harmKeywords.overheating, 'overload')} or an ${aiKeywords.nhp} ${altText(aiKeywords.cascade, 'cascading')}.
      \nYou can shut down as a ${combatKeywords.quick_action}. Your mech takes the ${statusKeywords.shut_down}, with these effects:
      All ${harmKeywords.heat} is cleared, as is ${statusKeywords.exposed};
      Any ${altText(aiKeywords.cascade, 'cascading')} ${altText(aiKeywords.nhp, 'NHPs')} return to a normal state.;
      Any statuses or conditions affecting the mech caused by ${techActionKeywords.tech_actions}, such as ${conditionKeywords.lock_on}, immediately end;
      The mech gains ${harmKeywords.immunity} to all ${techActionKeywords.tech_actions} and ${altText(attacksKeywords.tech_attack, 'attacks')}, including any from allied characters;
      The mech is ${conditionKeywords.stunned} indefinitely. Nothing can prevent this ${combatKeywords.condition}, and it remains until the mech ceases to be ${statusKeywords.shut_down}.
      \nThe only way to remove the ${statusKeywords.shut_down} ${combatKeywords.status} is to ${otherActionKeywords.boot_up} the mech.`,
    },
    skill_check: {
      name: 'skill check',
      page: `${BooksEnum.Core}:[72]`,
      category: 'otherAction',
      text: `When you make a skill check, you undertake an activity that isn't covered by other ${combatKeywords.actions} but has a clear goal and is sufficient complex to require a roll. The parameters and outcomes of skill checks are up to the GM, but they must be involved enough to require a ${combatKeywords.full_action}. If you want to do something that can be done quickly, no action is required.
      \nBruja, on foot, wants to open a locked door. The GM asks her to make a skill check and decide that Bruja can get a bonus from her 'Hack or Fix' ${altText(pilotKeywords.triggers, 'trigger')}.
      Pan wants to jump a crevasse in his mech that's wider than he can normally manage with ${movementKeywords.jumping}. The GM decides to allow him to try it with ${pilotKeywords.agility}.
      Zaid wants to lift a heavy boulder with his mech, to clear a passage. The GM decides this is probably a full action and requires a skill check with ${pilotKeywords.hull}.
      \nSkill check as a term is also used for checks made as part of equipment or otherwise during play, these do not require a full action and are covered in ${combatKeywords.skill_check}.`,
    },
  },
};
