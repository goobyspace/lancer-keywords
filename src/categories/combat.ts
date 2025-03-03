import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { attacksKeywords } from './attacksKeywords.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords, combat as combatType } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { reactionKeywords } from './reactionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

// generic combat concepts go here
export const combat: combatType = {
  keywords: {
    movement: {
      name: 'movement',
      page: `${BooksEnum.Core}:[62]`,
      category: 'combat',
      text: `On their turn, characters can always move spaces equal to their ${mechKeywords.speed}, in addition to any other ${combatKeywords.actions} including ${movementKeywords.splitting_movement}. This is called a standard move to distinguish it from movement granted by ${mechKeywords.systems} or ${pilotKeywords.talents}.\nA character only counts as moving if they move 1 or more spaces. Characters can move into any adjacent space, even diagonally, as long as the space isn’t occupied by an ${movementKeywords.obstruction} (and is one that they would be able to move in – characters can't move straight up unless they can use ${movementKeywords.flight}, for example).`,
    },
    critical_hits: {
      name: 'critical hits',
      page: `${BooksEnum.Core}:[64]`,
      category: 'combat',
      text: `A 20+ on a melee or ranged attack causes a ${altText(combatKeywords.critical_hits, 'critical hit')}. On a critical hit, all damage dice are rolled twice (Including bonus damage) and the highest result from each source of ${harmKeywords.damage} is used.\nFor example, if a player got a critical hit on an attack that would normally deal 2d6 ${harmKeywords.damage}, they would instead roll 4d6 and pick the two highest results.`,
    },
    range: {
      name: 'range',
      page: `${BooksEnum.Core}:[64]`,
      category: 'combat',
      text: `Range is measured from any edge of the attacking character. Target must be inside the range to be valid targets. Some weapons have ${altText(weaponKeywords.patterns, 'attack patterns')}, which will supersede range unless the weapon also has a range.\nIf the weapon has a ${altText(weaponKeywords.patterns, 'attack pattern')} & a range, the attack's origin point can be drawn from any point within the specified range & ${combatKeywords.line_of_sight}`,
    },
    threat: {
      name: 'threat',
      page: `${BooksEnum.Core}:[64]`,
      category: 'combat',
      text: `Threat is the maximum range at which a ${altText(weaponKeywords.melee, 'melee weapon')} can be used, and at which both melee and ranged weapons can be used for ${reactionKeywords.overwatch}.\n${combatKeywords.threat}, like ${combatKeywords.range}, is measured from the edge of a character, so larger mechs cover slightly more area than smaller mechs.\nUnless noted otherwise, all weapons default to 1 threat, which can be increased with some talents and gear.`,
    },
    line_of_sight: {
      name: 'line of sight',
      page: `${BooksEnum.Core}:[65]`,
      category: 'combat',
      text: `Characters can only ${combatKeywords.attack} or take ${altText(combatKeywords.actions, 'action')} against targets that they can see, at least partially. If it's not possible to trace a line to some part of the target - perhaps because it's completely blocked by ${combatKeywords.cover} or ${movementKeywords.terrain} - then they can't be attacked.\nLine of sight doesn't imply visibility alone, but also a clear path for your attack. Even if you can somehow see a target behind a solid wall (using a remote drone, for example), you can't attack targets within. Weapons with the ${gearKeywords.arcing} or ${gearKeywords.seeking} ${gearKeywords.tags} offer ways around this.`,
    },
    cover: {
      name: 'cover',
      page: `${BooksEnum.Core}:[66]`,
      category: 'combat',
      text: `Two types of cover are always relevant in combat: ${combatKeywords.soft_cover} & ${combatKeywords.hard_cover}.\nCharacters can only benefit from one type of cover at a time, their benefits don't stack. Unless specified, characters never grant cover to objects or other characters. Some mechs have abilities that allow them to provide cover, such as the guardian trait.\nCharacters can shoot over cover or objects smaller or the same ${mechKeywords.size} as themselves without difficulty. Objects can also be ${altText(harmKeywords.damaging_objects, 'destroyed')} to remove their cover.`,
    },
    soft_cover: {
      name: 'soft cover',
      page: `${BooksEnum.Core}:[66]`,
      category: 'combat',
      text: `Soft cover includes smoke, foliage, trees, blinding light, dust clouds, low hills, and low walls. Anything that isn't reliable to block enemy fire, but does provide visual interference or profile reduction sufficient to make aiming difficult. Any time a target is obscured or obstructed somehow, it has soft cover, adding +1 ${bonusesKeywords.difficulty} to any ranged attacks. If the cover is the same ${mechKeywords.size} as them, they can still shoot over, through or around it without penalty.`,
    },
    hard_cover: {
      name: 'hard cover',
      page: `${BooksEnum.Core}:[66]`,
      category: 'combat',
      text: `Hard cover includes ruined buildings, tall walls, bulkheads, reinforced emplacements and ${harmKeywords.destroyed} mechs and vehicles. Hard cover is solid enough to block shots and hide behind and adds +2 ${bonusesKeywords.difficulty} to any ranged attacks. Characters can only benefit from hard cover if they are ${altText(movementKeywords.adjacency, 'adjacent')} to whatever they are hiding behind, and are the same ${mechKeywords.size} or smaller. If the cover is the same ${mechKeywords.size} as them, they can still shoot over, through or around it without penalty.`,
    },
    invisibility: {
      name: 'invisibility',
      page: `${BooksEnum.Core}:[65]`,
      category: 'combat',
      text: `Some characters can turn invisible. Invisible characters can still be seen or detected by heat patterns and some visual artifacts, but they are extremely hard to target. All attacks, regardless of ${weaponKeywords.type} have a 50% chance to miss outright, before an attack roll is made. Flip a coin or roll a die to determine if the attack misses.\nAdditionally, invisible characters can always ${quickActionKeywords.hide}, even without cover.`,
    },
    actions: {
      name: 'actions',
      page: `${BooksEnum.Core}:[68]`,
      category: 'combat',
      text: `Characters can take two ${altText(combatKeywords.quick_action, 'quick actions')} or one ${combatKeywords.full_action} on their turn.\nCharacters cannot perform the same action more than once in a ${combatKeywords.turn}, except as a ${combatKeywords.free_action} or ${altText(combatKeywords.reactions, 'reaction')}. For example, if a character gains ${quickActionKeywords.boost} as a free action from one of their ${mechKeywords.systems}, they could ${quickActionKeywords.boost} as their normal ${combatKeywords.quick_action} and then ${quickActionKeywords.boost} again as a ${combatKeywords.free_action}. Alternatively, a character could also ${combatKeywords.overcharge} to gain a second ${quickActionKeywords.boost} as a free action.\nSee also ${combatKeywords.action_resolution} for how to clear up any confusion about when an action resolves.`,
    },
    full_action: {
      name: 'full action',
      page: `${BooksEnum.Core}:[61]`,
      category: 'combat',
      text: `${combatKeywords.actions} that require full attention, e.g. firing a complex weapon. Characters have the following full actions available:
      \n${fullActionKeywords.barrage}
      \n${fullActionKeywords.disengage}
      \n${fullActionKeywords.full_tech}
      \n${fullActionKeywords.improvised_attack}
      \n${fullActionKeywords.stabilize}`,
    },
    quick_action: {
      name: 'quick action',
      page: `${BooksEnum.Core}:[61]`,
      category: 'combat',
      text: `Actions that take a few moments, such as quickly firing a weapon, activating a system, or moving further. Characters have the following quick actions available:
      \n${quickActionKeywords.boost}
      \n${quickActionKeywords.grapple}
      \n${quickActionKeywords.hide}
      \n${quickActionKeywords.quick_tech}
      \n${quickActionKeywords.ram}
      \n${quickActionKeywords.search}
      \n${quickActionKeywords.skirmish}`,
    },
    other_action: {
      name: 'other action',
      page: `${BooksEnum.Core}:[71]`,
      category: 'combat',
      text: `Actions that are either not directly applicable to combat, or otherwise uncommonly used. Characters have the following other actions available:
      \n${otherActionKeywords.activate}
      \n${otherActionKeywords.boot_up}
      \n${otherActionKeywords.mount}
      \n${otherActionKeywords.dismount}
      \n${otherActionKeywords.eject}
      \n${otherActionKeywords.prepare}
      \n${otherActionKeywords.self_destruct}
      \n${otherActionKeywords.shut_down}
      \n${otherActionKeywords.skill_check}`,
    },
    turn: {
      name: 'turn',
      page: `${BooksEnum.Core}:[60]`,
      category: 'combat',
      text: `Mech combat is divided into turns and ${altText(combatKeywords.round, 'rounds')}. Each character takes one turn per ${combatKeywords.round} unless otherwise specified. Turns represent activity, not the passing of time. Even though characters act in a certain order, the turns in each ${combatKeywords.round} are assumed to occur narratively at roughly the same time.\nTurn order is decided alternatively by players & the GM. The players collectively decide which player or ally goes first, then the GM decides which enemy goes next, then the last player decides which player or ally goes next, and so on. The side with characters remaining take their turns in an order decided by the GM or players, as relevant.\nSee also:
      \n${combatKeywords.end_of_turn}
      \n${combatKeywords.end_of_next_turn}`,
    },
    round: {
      name: 'round',
      page: `${BooksEnum.Core}:[60]`,
      category: 'combat',
      text: `Mech combat is divided into ${altText(combatKeywords.turn, 'turns')} and rounds. Players will always take the first turn in the first round, but in subsequent rounds whoever goes first is the opposite of who took the last ${combatKeywords.turn} in the previous round. If the last ${combatKeywords.turn} was a friendly mech, the next round will be started by an enemy combatant.`,
    },
    scene: {
      name: 'scene',
      page: `${BooksEnum.Core}:[14]`,
      category: 'combat',
      text: `A scene is a period of continuous dialogue, action, or activity that has a discrete starting and stopping point. This is called a scene because it's helpful to think about it in cinematic terms: as long as the focus (or 'camera') is on the players and their action, a scene is happening. When the focus cuts away from the current scene, or the current action naturally ends, that's when the scene should end too.
      \nIn practical terms, when a ${mechKeywords.weapon}, ${altText(mechKeywords.systems, 'system')}, or ${pilotKeywords.talents} say they can be used 1/scene, that generally means they can be used once per combat. If a scene ends and a new combat scene starts, the character can use that weapon, system, or talent again.`,
    },
    action_resolution: {
      name: 'action resolution',
      page: `${BooksEnum.Core}:[68]`,
      category: 'combat',
      text: `If there's any uncertainty about when certain ${combatKeywords.actions} or effects take place or resolve, effects caused by other characters always resolve first during a character's ${combatKeywords.turn}. If, for example, a character starts their ${combatKeywords.turn} in a zone created by another character that causes them to take ${harmKeywords.damage} - this resolves before any other effects or ${combatKeywords.actions} take place.\nOtherwise, characters can always choose the resolution order of actions or effects that they take on their ${combatKeywords.turn}. If there were, in the above example, two zones, the player gets to pick the order. If there's still uncertainty, the GM has the final say.`,
    },
    end_of_turn: {
      name: 'end of turn',
      page: `${BooksEnum.Core}:[68]`,
      category: 'combat',
      text: `Effects and activities that take place at the end of a character's ${combatKeywords.turn} occur after any standard ${altText(combatKeywords.movement, 'moves')} and ${combatKeywords.actions} (including ${altText(combatKeywords.free_action, 'free actions')} and ${combatKeywords.overcharge}) have resolved, but before the next character starts their ${combatKeywords.turn}.\nIf a character is using multiple effects that take place at the end of their ${combatKeywords.turn}, their player chooses the order in which they trigger.`,
    },
    end_of_next_turn: {
      name: 'end of next turn',
      page: `${BooksEnum.Core}:[68]`,
      category: 'combat',
      text: `Effects that last until the end of a character's next ${combatKeywords.turn} persist until the next ${combatKeywords.turn} they have in the ${combatKeywords.turn}, not the current ${combatKeywords.turn} - even if it is their ${combatKeywords.turn} when they receive the effect.`,
    },
    overcharge: {
      name: 'overcharge',
      page: `${BooksEnum.Core}:[73]`,
      category: 'combat',
      text: `Once per ${combatKeywords.turn} you can overcharge your mech, allowing you to make any ${combatKeywords.quick_action} as if it were a ${combatKeywords.free_action} - even ${combatKeywords.actions} you have already taken this ${combatKeywords.turn}.\nThe first time you overcharge, take 1 ${harmKeywords.heat} ${harmKeywords.damage}. \nThe second time, you take 1d3 ${harmKeywords.heat} ${harmKeywords.damage}.\nThe third time, you take 1d6 ${harmKeywords.heat} ${harmKeywords.damage}, and any subsequent times you take 1d6+4 ${harmKeywords.heat} ${harmKeywords.damage}.\nA ${mechKeywords.full_repair} resets this counter.`,
    },
    reactions: {
      name: 'reactions',
      page: `${BooksEnum.Core}:[61]`,
      category: 'combat',
      text: `Reactions are special ${combatKeywords.actions} that can be made outside of the usual ${combatKeywords.turn} order as responses to incoming ${altText(combatKeywords.attack, 'attacks')}, enemy ${combatKeywords.movement}, and other events. \nEach reaction can only be used a certain number of times per round, and a character can take only one reaction per ${combatKeywords.turn} (Their ${combatKeywords.turn} or that of another character), but there is no limit to how many reactions can be taken, overall.
      \nOutside of reactions provided by ${mechKeywords.systems}, ${pilotKeywords.talents}, ${altText(mechKeywords.weapon, 'weapons')} or other sources, each mech has access to two default reactions:
      \n${reactionKeywords.brace}
      \n${reactionKeywords.overwatch}
      \nAs well as the ability to create reactions via the ${otherActionKeywords.prepare} ${combatKeywords.quick_action}.
      \nUnless specified otherwise, reactions resolve after the activity that triggered them.`,
    },
    free_action: {
      name: 'free action',
      page: `${BooksEnum.Core}:[61]`,
      category: 'combat',
      text: `Free actions are special ${combatKeywords.actions} granted by character traits, like mech ${mechKeywords.systems} or pilot ${pilotKeywords.talents}. Characters can take free actions at any point during their ${combatKeywords.turn}, and they don't count towards the number of ${altText(combatKeywords.quick_action, 'quick')} or ${altText(combatKeywords.full_action, 'full')} actions they take.\nThey can also be used to take ${combatKeywords.actions} more than once per ${combatKeywords.turn}. For example, if a character can ${quickActionKeywords.boost} as a free action, they can do so even if they have already used ${quickActionKeywords.boost} in the same turn.`,
    },
    attack: {
      name: 'attack',
      page: `${BooksEnum.Core}:[64]`,
      category: 'combat',
      text: `Mechs can attack using the ${quickActionKeywords.skirmish}, ${fullActionKeywords.barrage}, ${quickActionKeywords.quick_tech}, ${fullActionKeywords.full_tech} and ${fullActionKeywords.improvised_attack} ${combatKeywords.actions}. Characters on foot attack using the ${pilotKeywords.fight} action. Whichever action is taken, the details of the attack are determined by the ${mechKeywords.weapon} or ${mechKeywords.systems} that are used.
      \nThere are three types of attack in mech combat:
      \n${altText(attacksKeywords.melee_attack, 'melee')}, ${altText(attacksKeywords.ranged_attack, 'ranged')}, and ${altText(attacksKeywords.tech_attack, 'tech')}.`,
    },
    status: {
      name: 'status',
      page: `${BooksEnum.Core}:[77]`,
      category: 'combat',
      text: `During combat, characters often inflict and receive statuses and ${altText(combatKeywords.condition, 'conditions')}Statuses are usually effects that can't easily be cleared. ${combatKeywords.actions}, ${pilotKeywords.talents}, ${mechKeywords.systems} and other effects can all inflict statuses. The source descriptions indicate how long they last. If a status says it lasts until the ${combatKeywords.end_of_next_turn} but is inflicted during a character's ${combatKeywords.turn}, it lasts until the end of their next ${combatKeywords.turn}.
      \nNot every status is negative, some are entirely beneficial.
      \nThe following statuses exist:
      \n${statusKeywords.danger_zone}
      \n${statusKeywords.down_and_out}
      \n${statusKeywords.engaged}
      \n${statusKeywords.exposed}
      \n${statusKeywords.hidden}
      \n${statusKeywords.invisible}
      \n${statusKeywords.prone}
      \n${statusKeywords.shut_down}`,
    },
    condition: {
      name: 'condition',
      page: `${BooksEnum.Core}:[77]`,
      category: 'combat',
      text: `During combat, characters often inflict and receive ${altText(combatKeywords.status, 'statuses')} and conditions. Conditions are generally temporary effects caused by things like ${harmKeywords.damage} & ${combatKeywords.electronic_warfare}. ${combatKeywords.actions}, ${pilotKeywords.talents}, ${mechKeywords.systems} and other effects can all inflict conditions. The source descriptions indicate how long they last. If a condition says it lasts until the ${combatKeywords.end_of_next_turn} but is inflicted during a character's ${combatKeywords.turn}, it lasts until the end of their next ${combatKeywords.turn}.
      \n${fullActionKeywords.stabilize} clears many of these condition.
      \nThe following conditions exist:
      \n${conditionKeywords.immobilized}
      \n${conditionKeywords.impaired}
      \n${conditionKeywords.jammed}
      \n${conditionKeywords.lock_on}
      \n${conditionKeywords.shredded}
      \n${conditionKeywords.slowed}
      \n${conditionKeywords.stunned}`,
    },
    electronic_warfare: {
      name: 'electronic warfare',
      page: `${BooksEnum.Core}:[-]`,
      category: 'combat',
      text: `Although electronic warfare is not a keyword, it is a common term within the core book. Electronic warfare generally means any ${altText(combatKeywords.actions, 'action')} taken that results in a ${attacksKeywords.tech_attack} or otherwise impairs a mech's ${mechKeywords.systems}. Mechs attempting to hack and take down other mechs systems.\nSee also ${fullActionKeywords.full_tech}, ${quickActionKeywords.quick_tech}, ${statusKeywords.exposed} & ${conditionKeywords.jammed}.`,
    },

    skill_check: {
      name: 'skill check',
      page: `${BooksEnum.Core}:[13]`,
      category: 'combat',
      text: `When the book calls for a skill check, such as by calling for a ${pilotKeywords.agility} check, you roll a d20, add the relevant ${altText(pilotKeywords.mech_skills, 'skill')} modifier as well as any modifiers if the skill check is difficult or risky and see if the result is a 10 or higher. On 10+, you succeed, on 9 or less, you fail. Outside of built-in skill checks, there is also the ${otherActionKeywords.skill_check} ${combatKeywords.full_action}, if you want to do an action in mech combat that might not have a ${combatKeywords.actions} equivelant.
      \nAnd remember, you are always allowed to skip the dice and choose to fail!`,
    },
    saves: {
      name: 'saves',
      page: `${BooksEnum.Core}:[13]`,
      category: 'combat',
      text: `Saves are rolls made to avoid or resist negative effects in mech combat. To save, roll a d20 and add any bonuses (such as from your ${pilotKeywords.mech_skills}), then compare the result to the target number. This target number will differ depending on the source of the save, if you equal or exceed this number, you succeed; if your roll is lower, you fail.`,
    },
    contested_skill_check: {
      name: 'contested skill check',
      page: `${BooksEnum.Core}:[13]`,
      category: 'combat',
      text: `In a contested check, both sides roll a ${combatKeywords.skill_check} and add any bonuses. Whoever has the highest results win. If the result is a tie, the attacker - the one who initiated the contest - wins.
      \nYou might make contested checks in both narrative play and mech combat.`,
    },
  },
};
