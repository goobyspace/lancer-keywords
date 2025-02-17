import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { attackKeywords } from './attackKeywords.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotGearKeywords } from './pilotGearKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { reactionKeywords } from './reactionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

// generic combat concepts go here
export const pilot: category = {
  keywords: {
    mech_skills: {
      name: 'MECH SKILLS',
      page: `${BooksEnum.Core}:[30]`,
      category: 'pilot',
      text: `Your lancer has four mech skills that represent their ability to build, pilot and fight with mechs:
      \n${pilotKeywords.hull}: describes your ability to build and pilot durable, structurally sound mechs that can take punches and keep going.
      ${pilotKeywords.agility}: describes your ability to build and pilot fast, evasive mechs.
      ${pilotKeywords.systems}: describes your ability to build and pilot advanced mechs with powerful ${combatKeywords.electronic_warfare} capabilities.
      ${pilotKeywords.engineering}: describes your ability to build and pilot mechs with effective reactors, supplies and support systems.
      \nMech skills go from +0 to +6 and are used when you make ${combatKeywords.skill_check} that utilize your mech. 
      In mech combat, for example when making ${combatKeywords.saves}.
      For additional bonuses when building mechs, see ${mechKeywords.mech_stats}.`,
    },
    pilot_mech_stats: {
      name: 'PILOT COMBAT STATS',
      page: `${BooksEnum.Core}:[28]`,
      category: 'pilot',
      text: `When in combat, pilots have a set of stats similar to mech stats that are used when playing a pilot in mech combat. They might need to bail out of their mech during a fight, or you might want to track your pilot's ${mechKeywords.hp} if they get injured during downtime.
      \nPilots have the following statistics:
      ${mechKeywords.hp}: 6 + ${pilotKeywords.grit}
      ${mechKeywords.size}: 1/2
      ${mechKeywords.evasion}: 10
      ${mechKeywords.e_defense}: 10
      ${mechKeywords.speed}: 4
      \nTheir statistics (especially their ${mechKeywords.hp}) might also change if they're wearing ${pilotGearKeywords.personal_armor}.`,
    },
    hull: {
      name: 'HULL',
      page: `${BooksEnum.Core}:[30]`,
      category: 'pilot',
      text: `Your mech gains +2 ${mechKeywords.hp} for each point of ${pilotKeywords.hull}, and +1 ${mechKeywords.repair_cap} for every two points of ${pilotKeywords.hull}.`,
    },
    agility: {
      name: 'AGILITY',
      page: `${BooksEnum.Core}:[30]`,
      category: 'pilot',
      text: `Your mech gains +1 ${mechKeywords.evasion} for each point of ${pilotKeywords.agility}, and +1 ${mechKeywords.speed} for every two points of ${pilotKeywords.agility}.`,
    },
    systems: {
      name: 'SYSTEMS',
      page: `${BooksEnum.Core}:[30]`,
      category: 'pilot',
      text: `Your mech gains +1 ${mechKeywords.e_defense} and +1 ${mechKeywords.tech_attack} for each point of ${pilotKeywords.systems}, and +1 ${mechKeywords.system_points} for every two points in ${pilotKeywords.systems}.`,
    },
    engineering: {
      name: 'ENGINEERING',
      page: `${BooksEnum.Core}:[30]`,
      category: 'pilot',
      text: `Your mech gains +1 ${mechKeywords.heat_cap} for each point of ${pilotKeywords.engineering}, and +1 use for any ${(gearKeywords.limited_x, 'limited')} ${altText(mechKeywords.weapon, 'weapons')} or ${mechKeywords.systems} for every two points of ${pilotKeywords.engineering}.`,
    },
    grit: {
      name: 'GRIT',
      page: `${BooksEnum.Core}:[14]`,
      category: 'pilot',
      text: `Pilots are lucky and unique individuals, multi-talented and resilient. Even so, brand-new pilots don’t measure up to tempered, battle-hardened veterans when push comes to shove. The benefits of experience are measured by GRIT, a bonus that reflects your pilot’s deep reservoirs of resolve and will to live. \nGRIT is half of your character’s ${pilotKeywords.license_level}, rounded up. It improves ${combatKeywords.attack} bonuses, ${mechKeywords.hp}, and ${altText(combatKeywords.saves, 'save')} targets for both your pilot and your mech.`,
    },
    talents: {
      name: 'TALENTS',
      page: `${BooksEnum.Core}:[35]`,
      category: 'pilot',
      text: `Talents are your pilot's personal ingenuity and experience piloting a mech. They give your pilot further abilities and benefits when playing with specific ${mechKeywords.weapon} ${altText(weaponKeywords.type, 'types')}, ${mechKeywords.systems}, or styles of play.
      \nTalents, like ${altText(pilotKeywords.license_level, 'licenses')} are measured in in ranks: from rank I to rank III. At ${altText(pilotKeywords.license_level, 'LL0')} you start with three rank I talents of your choice. When your pilot levels up, you can either increase a talent to the next rank, or choose a new talent at rank I. When you level up, you are also allowed to reshuffle all ranks from one talent.`,
    },
    triggers: {
      name: 'TRIGGERS',
      page: `${BooksEnum.Core}:[25]`,
      category: 'pilot',
      text: `During narrative play, your pilot will have moments in the story when their background, training or personality shine through. These moments are your pilot's triggers: short phrases that describe key decisions and actions like "Apply Fists to Faces" or "Get Somewhere Fast". Triggers are always accompanied by a bonus of +2, +4 or +6.
      \nWhen one of your character's triggers is relevant to a ${combatKeywords.skill_check}, you get a bonus to that roll. For example, if you have "+2 to Apply Fists to Faces" written on your sheet, any time your character acts in a way that could be construed as applying fists to faces, you get +2 to the ${combatKeywords.skill_check}. You can only receive a bonus from one trigger at a time.
      \nTriggers only apply to your pilot's actions, not your mech's. When taking actions that rely on a mech, ${pilotKeywords.mech_skills} are used instead.
      \nTriggers are fairly open-ended, allowing you to apply them in creative ways. That said, the GM is responsible for arbitrating outlandish claims. Be prepared to justify how your "Apply Fists to Faces" trigger helps you hack into an electronic network.
      \nYou can also create your own custom triggers, with GM approval. Custom triggers can be more specific than the ones in the core book, but they shouldn't be more general. They should always apply to specific circumstances or actions.`,
    },
    pilot_actions: {
      name: 'PILOT ACTIONS',
      page: `${BooksEnum.Core}:[74]`,
      category: 'pilot',
      text: `When a pilot is outside of a mech during mech combat, they follow the same pool of ${combatKeywords.actions} as mechs: one standard ${altText(combatKeywords.movement, 'move')}, and two ${altText(combatKeywords.quick_action, 'quick actions')} or one ${combatKeywords.full_action}. 
      \nYou can split your actions between pilot and mech, too, if you so choose. For example: Take a ${combatKeywords.quick_action} to ${quickActionKeywords.skirmish} with your mech, take a ${combatKeywords.quick_action} to ${otherActionKeywords.eject}. and then use your ${altText(combatKeywords.movement, 'move')} to run to cover on foot.
      \nPilots have access to the following normal actions: ${quickActionKeywords.boost}, ${quickActionKeywords.hide}, ${quickActionKeywords.search}, ${otherActionKeywords.activate}, ${otherActionKeywords.activate}, ${fullActionKeywords.disengage}, ${otherActionKeywords.prepare}, & ${otherActionKeywords.mount}. Pilots can also use the ${reactionKeywords.Overwatch} ${altText(combatKeywords.reactions, 'reaction')}, and use the ${pilotKeywords.fight} action when they do so.
      \nThey also have access to three special pilot actions: ${pilotKeywords.fight}, ${pilotKeywords.jockey}, & ${pilotKeywords.reload}.`,
    },
    fight: {
      name: 'FIGHT',
      page: `${BooksEnum.Core}:[74]`,
      category: 'pilot',
      text: `When you fight, you ${combatKeywords.attack} (${altText(attackKeywords.melee_attack, 'melee')} or ${altText(attackKeywords.ranged_attack, 'ranged')}) with one ${mechKeywords.weapon} as a ${combatKeywords.full_action}.
      \nTo fight, choose a ${mechKeywords.weapon} and attack a target within ${combatKeywords.range} or ${combatKeywords.threat} and ${combatKeywords.line_of_sight} as a ${combatKeywords.full_action}. ${altText(attackKeywords.ranged_attack, 'ranged attacks')} are affected by ${combatKeywords.cover} and receive +1 ${bonusesKeywords.difficulty} if you're ${statusKeywords.engaged}.`,
    },
    jockey: {
      name: 'JOCKEY',
      page: `${BooksEnum.Core}:[75]`,
      category: 'pilot',
      text: `When you Jockey, you aggressively attack an enemy mech while on foot. This is extremely dangerous. To Jockey, you must be ${altText(movementKeywords.adjacency, 'adjacent')} to a mech. As a ${combatKeywords.full_action}, make a ${combatKeywords.contested_skill_check} against the mech, using ${pilotKeywords.grit} (or a relevant ${altText(pilotKeywords.triggers, 'trigger')} at the GM's discretion). The mech contests with ${pilotKeywords.hull}. On a success, you manage to climb onto the mech, sharing its space and moving with it. The mech can attempt to shake you off by succeeding on another ${combatKeywords.contested_skill_check} as a ${combatKeywords.full_action}; alternatively, you can jump off as part of your ${combatKeywords.movement} on your turn.
      \nWhen you succeed Jockey, choose one of the following options:
      Distract: the mech is ${conditionKeywords.impaired} and ${conditionKeywords.slowed} until the end of its next turn.
      Shred: Deal 2 ${harmKeywords.heat} to the mech by ripping at wiring, paneling, and so on.
      Damage: Deal 4 ${harmKeywords.kinetic} ${harmKeywords.damage} to the mech by attacking joints, hatches, and so on.
      \nOn each of your subsequent turns, you can continue to choose from the options above as ${altText(combatKeywords.full_action, 'full actions')}, as long as you don't stop jockeying (or get thrown off).`,
    },
    reload: {
      name: 'RELOAD',
      page: `${BooksEnum.Core}:[75]`,
      category: 'pilot',
      text: `When you reload with a ${combatKeywords.quick_action}, you reload one ${altText(pilotGearKeywords.gear, 'pilot weapon')} with the ${gearKeywords.loading} ${altText(gearKeywords.tags, 'tag')}, making it usable again.`,
    },
    license_level: {
      name: 'LICENSE LEVEL',
      page: `${BooksEnum.Core}:[18]`,
      category: 'pilot',
      text: `License levels are the equivelant of character levels in Lancer. The total amount of licenses you have obtained are your license level (LL). A new pilot typically starts at LL0, and levels up to LL1 after their first mission, then again after each subsequent missino to a maximum of LL12. You spend these license levels to gain licenses with various manufacturers for mech gear, ${altText(mechKeywords.weapon, 'weapons')}, ${mechKeywords.systems}, and ${altText(mechKeywords.frame, 'frames')}.
      \nOutside of the licenses, levelling up also lets your pilot improve their ${pilotKeywords.triggers}, ${pilotKeywords.mech_skills}, and ${pilotKeywords.grit}, and lets you choose ${pilotKeywords.talents} to further customize your play.
      \nEvery time your LL increases, you also have the option to choose one:
      Reallocate all ranks from one of your ${pilotKeywords.talents} to any other ${altText(pilotKeywords.talents, 'talent')}.
      Reallocate all ranks from one of your licenses to any other license.
      Replace one ${altText(pilotKeywords.core_bonuses, 'core bonus')} with another ${altText(pilotKeywords.core_bonuses, 'core bonus')} for which your pilot qualifies.
      \nIf reallocating ranks from one license to another means your pilot no longer qualifies for a ${altText(pilotKeywords.core_bonuses, 'core bonus')}, you must replace that ${altText(pilotKeywords.core_bonuses, 'core bonus')} with one you now qualify for.`,
    },
    core_bonuses: {
      name: 'CORE BONUSES',
      page: `${BooksEnum.Core}:[35]`,
      category: 'pilot',
      text: `As your pilot acquires more ${altText(pilotKeywords.license_level, 'licenses')}, they gain knowledge and skills specific to individual manufacturers and their design philosophies. Core bonuses are permanent improvements you that apply to any ${mechKeywords.frame} your pilot uses. You cannot choose the same core bonus more than once, but as your pilot progresses you will be able to choose a range of different bonuses.
      \nYour pilot gets a new core bonus every three ${altText(pilotKeywords.license_level, 'LLs')}. You can always choose core bonuses from the GMS list, but for each core bonus you choose from another manufacturer, you first need to have three license ranks with that manufacturer. For example, to choose a core bonus from IPS-Northstar (IPS-N), you would need at least three ranks in IPS-N licenses; if you wanted to choose a second IPS-N bonus, you would need at least six ranks in licenses.
      \nThese ranks can be in any combination - for example, you might have the rank I and rank II licenses for one mech, and then three different rank I licenses, equaling six in total.`,
    },
  },
};
