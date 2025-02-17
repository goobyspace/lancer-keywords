import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { attackKeywords } from './attackKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { otherActionKeywords } from './otherActionKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const harm: category = {
  keywords: {
    damage: {
      name: 'damage',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Every pilot hopes to avoid as much enemy fire as possible, but they know this truth: sooner or later someone's going to punch a few holes in your kit.
      \nThere are four types of damage pilots need to reckon with: ${harmKeywords.explosive}, ${harmKeywords.energy}, ${harmKeywords.kinetic}, and ${harmKeywords.burn}, each representing a different sort of weapon or projectile.
      \nWhen an attacker has succefully landed an ${combatKeywords.attack}, the total damage is calculated in the following order:
      \n1. The attacker rolls damage, and applies any relevant reductions or increases (such as the doubling from the ${statusKeywords.exposed} status).
      \n2. The target's ${harmKeywords.armor} is subtracted from the total.
      \n3. Any other deductions from the defender are subtracted from the remaining damage. This includes any reductions from ${harmKeywords.resistance}, and any relevant ${mechKeywords.systems}, ${pilotKeywords.talents}, or ${combatKeywords.reactions}.
      \n4. Remaining damage is subtracted from the target's ${mechKeywords.hp}.`,
    },
    armor: {
      name: 'armor',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Armor reduces all incoming ${harmKeywords.damage} from a single source by an equal amount to its rating, which goes from 1-4; however, ${gearKeywords.armor_piercing} ${altText(mechKeywords.weapon, 'weapons')} and ${harmKeywords.bonus_damage} ignore armor altogether.`,
    },
    resistance: {
      name: 'resistance',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Characters with resistance to a specific type of ${harmKeywords.damage} reduce all incoming damage of that type by half. Characters can only have reistance once per type of ${harmKeywords.damage} - it doesn't stack.`,
    },
    burn: {
      name: 'burn',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Pilots need to worry about more than just bullet holes on the battlefield. Some weapons deal ${harmKeywords.burn} (damage over time). Burn might represent flames, searing plasma, acid or something more insidious, like a swarm of greywash nanites.
      \nWhen characters take ${harmKeywords.burn}, it has two effects: first, they immediately take ${harmKeywords.burn} ${harmKeywords.damage}, ignoring ${harmKeywords.armor}, and then they mark down the ${harmKeywords.burn} they just took on their sheet. At the end of their turn, characters with ${harmKeywords.burn} must roll an ${pilotKeywords.engineering} check. On a success, they clear all burn currently marked; otherwise, they take ${harmKeywords.burn} ${harmKeywords.damage} equal to the amount of burn currently marked.
      \nBurn from additional sources adds to the total marked burn, so a character that is hit by two seperate 2 ${harmKeywords.burn} attacks first takes 4 ${harmKeywords.burn} ${harmKeywords.damage} (2 from each attack), then marks down 4 burn (again, 2 from each attack). At the end of their turn, that character makes an ${pilotKeywords.engineering} check, failing, and taking an additional 4 ${harmKeywords.burn} ${harmKeywords.damage}. 
      \nNext turn, the same character gets hit by a 2 ${harmKeywords.burn} attack. They take 2 ${harmKeywords.burn} ${harmKeywords.damage}, then mark the extra burn down (now it's 6!). At the end of their turn, they must succeed on another ${pilotKeywords.engineering} ${altText(combatKeywords.skill_check, 'check')} or take 6 ${harmKeywords.burn} ${harmKeywords.damage}.`,
    },
    explosive: {
      name: 'explosive',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Explosive is one of the ${harmKeywords.damage} types, representing the concussive force of a blast. Explosive damage is affected by ${harmKeywords.armor}.`,
    },
    energy: {
      name: 'energy',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Energy is one of the ${harmKeywords.damage} types, representing the searing heat of a laser or plasma weapon. Energy damage is affected by ${harmKeywords.armor}.`,
    },
    kinetic: {
      name: 'kinetic',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Kinetic is one of the ${harmKeywords.damage} types, representing the force of a solid projectile. Kinetic damage is affected by ${harmKeywords.armor}.`,
    },
    heat: {
      name: 'heat',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Heat is a special type of harm that doesn't count as damage and ignores ${harmKeywords.armor}, although it can be affected by ${harmKeywords.resistance}. It represents damage to a mech's internal systems and reactor. It's more often inflicted by ${combatKeywords.electronic_warfare}, but it is often generated by a mech's own ${mechKeywords.systems}.
      \nA mech that takes heat marks it on their sheet. When it reaches its ${mechKeywords.heat_cap}, any additional heat causes it to ${altText(harmKeywords.overheating, 'overheat')}.
      \nIf a character without a ${mechKeywords.heat_cap} (such as biological characters and ${altText(gearKeywords.drone, 'drones')}) would take heat, they instead take an equivelant of ${harmKeywords.energy} ${harmKeywords.damage}.`,
    },
    bonus_damage: {
      name: 'bonus damage',
      page: `${BooksEnum.Core}:[67]`,
      category: 'harm',
      text: `Some ${pilotKeywords.talents}, ${mechKeywords.systems} and ${altText(mechKeywords.weapon, 'weapons')} deal bonus damage. Bonus damage can only apply to ${altText(attackKeywords.melee_attack, 'melee')} and ${altText(attackKeywords.ranged_attack, 'ranged')} attacks, and is only every ${harmKeywords.kinetic}, ${harmKeywords.explosive}}, or ${harmKeywords.energy} ${harmKeywords.damage} (not ${harmKeywords.burn} or ${harmKeywords.heat}).
      \nIf no type is specified, bonus damage defaults to ${harmKeywords.kinetic} ${harmKeywords.damage}, or the attacker can choose a type from one of the same ${altText(weaponKeywords.type, 'types')} as the ${mechKeywords.weapon} that dealt it.
      \nIf an attack that targets more than one character deals bonus damage, the bonus damage is halved.`,
    },
    immunity: {
      name: 'immunity',
      page: `${BooksEnum.Core}:[68]`,
      category: 'harm',
      text: `Some characters and objects have immunity, and can't be affected by certain ${harmKeywords.damage} types, ${altText(combatKeywords.attack, 'attacks')}, or effects. Immunity goes beyond simply ignoring damage - effects or ${combatKeywords.actions} that a character has immunity to are completely ignored, and may as well have failed or not having taken place at all.
      \nFor example, a character with immunity to ${harmKeywords.burn} doesn't take any ${harmKeywords.burn} from attacks and never counts as having taken ${harmKeywords.burn} for the purpose of any other effects. 
      \nLikewise, a character with immunity to ${harmKeywords.damage} never takes damage (even 0 damage), and a character with immunity to ${attackKeywords.tech_attack} can't be affected by any tech attacks.`,
    },
    damaging_objects: {
      name: 'damaging objects',
      page: `${BooksEnum.Core}:[68]`,
      category: 'harm',
      text: `Unless specified otherwise, all objects (including ${movementKeywords.terrain}, ${combatKeywords.cover}, buildings and ${altText(gearKeywords.deployable, 'deployable items')}) have 5 ${mechKeywords.evasion} and 10 ${mechKeywords.hp}/${mechKeywords.size}. This means that a ${mechKeywords.size} 4 object has 40 ${mechKeywords.hp}.
      \nIf an object is more usefully thought of as a group of multiple sections, each ${mechKeywords.size} 1 section is independently destroyable and has 10 ${mechKeywords.hp}. If an objective is especially tough or hardy, like solid rock, it might have 1-2 ${harmKeywords.armor}; if it's fortified, like a bulkhead, bunker or starship hull, it might even have 3-4 ${harmKeywords.armor}.
      
      \nThe GM may waive this rule outside of mech combat or when it applies to objects not created by characters (such as the environment). For instance, if a group of players want to bust through a wall in their mechs to surprise their enemies, the GM might decide that they just need to make a ${pilotKeywords.hull} check.`,
    },
    overheating: {
      name: 'overheating',
      page: `${BooksEnum.Core}:[81]`,
      category: 'harm',
      text: `When a mech exceeds its ${mechKeywords.heat_cap}, it generally takes 1 ${mechKeywords.stress} damage, makes an overheating check, then clears all heat. To make an overheating check, roll 1d6 per point of stress damage taken. Choose the lowest result, and check the ${harmKeywords.overheating_table} to determine the outcome. Rolling multiple 1s in a row has an especially catastrophic result.`,
    },
    reactor_meltdown: {
      name: 'reactor meltdown',
      page: `${BooksEnum.Core}:[81]`,
      category: 'harm',
      text: `There are a few ways to trigger a reactor meltdown: ${harmKeywords.overheating} sometimes results in a reactor meltdown. This can take place immediately, or after a countdown, in which case the countdown is updated at the start of your ${combatKeywords.turn}, and the meltdown triggers when specified. 
      \nOr, a pilot can use ${otherActionKeywords.self_destruct} to trigger a reactor meltdown manually, either at the ${altText(combatKeywords.end_of_next_turn, 'end of their next turn')} or at the end of one of their ${altText(combatKeywords.turn, 'turns')} within the following two ${altText(combatKeywords.round, 'rounds')} (their choice). 
      \nWhen a reactor meltdown takes place, any pilot still inside is immediately killed and the mech is vaporized in a catastrophic eruption with a ${altText(weaponKeywords.patterns, 'burst 2')} area. The wreck is annihilated and all characters within the affected area must succeed on an agility ${altText(combatKeywords.saves, 'save')} or take 4d6 ${harmKeywords.explosive} ${harmKeywords.damage}. On a success, they take half damage.`,
    },
    cooling: {
      name: 'cooling',
      page: `${BooksEnum.Core}:[81]`,
      category: 'harm',
      text: `A mech's marked ${harmKeywords.heat} can be clared with ${fullActionKeywords.stabilize}, or by using certain ${mechKeywords.systems}. ${harmKeywords.heat} also resets when you rest or perform a ${mechKeywords.full_repair}.`,
    },
    overheating_table: {
      name: 'overheating table',
      page: `${BooksEnum.Core}:[81]`,
      category: 'harm',
      text: `5-6\nEmergency Shunt\nYour mech's cooling systems manage to contain the increasing ${harmKeywords.heat}; however, your mech becomes ${conditionKeywords.impaired} until the end of your next turn.
      \n2-4\nDestabilized Power Plant\nThe power plant becomes unstable, beginning to eject jets of plasma. Your mech becomes ${statusKeywords.exposed}, taking double ${harmKeywords.kinetic}, ${harmKeywords.explosive}, and ${harmKeywords.energy} damage until the status is cleared.
      \n1\nMeltdown\nThe results depends on your mech's remaining stress: 3+ stress, your mech becomes ${statusKeywords.exposed}. 2 stress: Roll an ${pilotKeywords.engineering} ${altText(combatKeywords.skill_check, 'check')}. On a success, your mech is ${statusKeywords.exposed}. On a failure, it suffers a ${harmKeywords.reactor_meltdown} after 1d6 of your turns (rolled by the GM). A reactor Meltdown can be prevented by retrying the ${pilotKeywords.engineering} ${altText(combatKeywords.skill_check, 'check')} as a free action. 1 stress: Your mech suffers a ${harmKeywords.reactor_meltdown} at the ${altText(combatKeywords.end_of_turn, 'end of your turn')}.
      \nMultiple 1s\nIrreversible Meltdown\nThe reactor goes critical - your mech suffers a ${harmKeywords.reactor_meltdown} at the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')}.`,
    },
    destroyed: {
      name: 'destroyed',
      page: `${BooksEnum.Core}:[82]`,
      category: 'harm',
      text: `Destroyed mechs become wreckage - objects on the battlefield that can be moved and dragged around, and which provide ${combatKeywords.hard_cover}. Any spaces occupied by wreckage are difficult ${movementKeywords.terrain}.
      \nIf the wreckage of a destroyed mech can be obtained (i.e., it didn't mealt in a ${harmKeywords.reactor_meltdown}), the mech can be restored to working order while resting with 4 ${altText(mechKeywords.repair, 'repairs')}. Anyone can contribute ${altText(mechKeywords.repair, 'repairs')} to do this, meaning that a wrecked mech can be restored even if it has insufficient ${altText(mechKeywords.repair, 'repairs')} remaining. This is the only time pilots can share ${altText(mechKeywords.repair, 'repairs')} like this.
      \nOnce repaired, the mech returns to 1 ${mechKeywords.structure}, 1 ${mechKeywords.stress} and full ${mechKeywords.hp}. Any destroyed ${altText(mechKeywords.weapon, 'weapons')} or ${mechKeywords.systems} remain unusable unless the damaged mech spends ${altText(mechKeywords.repair, 'repairs')} to fix them as normal.`,
    },
    printing: {
      name: 'printing',
      page: `${BooksEnum.Core}:[82]`,
      category: 'harm',
      text: `If a pilot has access to the proper facilities, they can also use a ${mechKeywords.full_repair} to rebuild a mech - or build an entirely new one. Pilots are only licensed to print one mech at a time. If they print a new one, any others immediately cease to function.`,
    },
  },
};
