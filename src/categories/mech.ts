import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { attacksKeywords } from './attacksKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords, mech as mechType } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const mech: mechType = {
  keywords: {
    e_defense: {
      name: 'E-DEFENSE',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `E-Defense is a mech’s ability to resist ${combatKeywords.electronic_warfare} as well as ${gearKeywords.smart} weapons. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 E-Defense for each point of ${pilotKeywords.systems}.`,
    },
    tech_attack: {
      name: 'TECH ATTACK',
      page: `${BooksEnum.Core}:[64]`,
      category: 'mech',
      text: `You add your mech’s ${mechKeywords.tech_attack} as a bonus instead of ${pilotKeywords.grit} when you conduct ${combatKeywords.electronic_warfare}, such as doing a ${attacksKeywords.tech_attack}. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 Tech Attack for each point of ${pilotKeywords.systems}.`,
    },
    sensors: {
      name: 'SENSORS',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Your mech's sensors is the maximum distance in spaces over which a mech can detect enemies, use tech ${mechKeywords.systems} and make ${altText(attacksKeywords.tech_attack, 'tech attacks')}. If a character is within your sensors and isn't ${statusKeywords.hidden}, you know they're there - even if they're not in ${combatKeywords.line_of_sight}.`,
    },
    frame: {
      name: 'frame',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `The basic structure and components of a mech - its chassis, ${harmKeywords.armor}, and ${mechKeywords.mounts} - is called its frame. A mech's frame determines its appearance, ${mechKeywords.size}, and function, defining it as anything from a heavy siege engine to an agile flier, or even a cloacking mech that specializes in electronic warfare.
      \nThese effects can be expressed by a frame's traits. Think about choosing a frame as (more or less) choosing the mech your character is going to pilot. But remember that you're not limited to just one frame - you can acquire new ones by unlocking ${altText(pilotKeywords.license_level, 'rank II licenses')}.
      \nIn game terms, a frame is a mech's modular base. It determines your mech's ${mechKeywords.size}, ${harmKeywords.armor} & other ${mechKeywords.mech_stats}, it's available ${mechKeywords.weapon} ${mechKeywords.mounts}, and capacity for additional ${mechKeywords.systems}.
      \nEach frame also comes with a unique core system, a powerful special ability that can typically only be used once per mission.`,
    },
    mech_stats: {
      name: 'mech stats',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Different ${altText(mechKeywords.frame, 'frames')} have different starting statistics, giving them unique roles in combat. These stats are:
      \n${mechKeywords.hp}
      \n${mechKeywords.structure}
      \n${mechKeywords.repair_cap}
      \n${mechKeywords.speed}
      \n${mechKeywords.evasion}
      \n${mechKeywords.sensors}
      \n${mechKeywords.tech_attack}
      \n${mechKeywords.e_defense}
      \n${mechKeywords.heat_cap}
      \n${mechKeywords.stress}
      \n${mechKeywords.save_target}
      \n\nOutside of the starting stats a ${mechKeywords.frame} provides, your ${pilotKeywords.mech_skills} also improve your mech's stats in the following ways:
      \nYour pilot's ${pilotKeywords.grit} is added to your mech's ${mechKeywords.hp} and ${mechKeywords.save_target}, as well as its ${mechKeywords.system_points} and ${combatKeywords.attack} rolls.
      \nYour mech gains +2 ${mechKeywords.hp} for each point of ${pilotKeywords.hull}, and +1 ${mechKeywords.repair_cap} for every two points of ${pilotKeywords.hull}.
      \nYour mech gains +1 ${mechKeywords.evasion} for each point of ${pilotKeywords.agility}, and +1 ${mechKeywords.speed} for every two points of ${pilotKeywords.agility}.
      \nYour mech gains +1 ${mechKeywords.e_defense} and +1 ${mechKeywords.tech_attack} for each point of ${pilotKeywords.systems}, and +1 ${mechKeywords.system_points} for every two points in ${pilotKeywords.systems}.
      \nYour mech gains +1 ${mechKeywords.heat_cap} for each point of ${pilotKeywords.engineering}, and +1 use for any ${(gearKeywords.limited_x, 'limited')} ${altText(mechKeywords.weapon, 'weapons')} or ${mechKeywords.systems} for every two points of ${pilotKeywords.engineering}.`,
    },
    speed: {
      name: 'SPEED',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Your mech's speed determines how far you can ${altText(combatKeywords.movement, 'move')} on your turn, in spaces when you make a standard ${altText(combatKeywords.movement, 'move')} or ${quickActionKeywords.boost}. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 speed for every two points of ${pilotKeywords.agility}.`,
    },
    structure: {
      name: 'STRUCTURE',
      page: `${BooksEnum.Core}:[80]`,
      category: 'mech',
      text: `Most mechs have 4 structure and are ${harmKeywords.destroyed} when they reach 0 structure. Mechs lose 1 structure every time they go to 0 ${mechKeywords.hp}, reset their HP back to full and make a structure damage check.
      \nTo make a structure damage check, roll a 1d6 for every point of structure damage taken so far, including the damage that has just been taken. Pick the lowest number and check the ${mechKeywords.structure_damage_table} to determine the outcome. Multiple 1s in a row have particularly catastrophic consequences.
      \nNext, they take any excess damage beyond what was required to reach 0 HP. This does make it possible for a mech to take several points of structure damage and make multiple structure damage checks in one turn.`,
    },
    structure_damage_table: {
      name: 'STRUCTURE DAMAGE TABLE',
      page: `${BooksEnum.Core}:[80]`,
      category: 'mech',
      text: `5-4\nGlancing Blow\nEmergency systems kick in and stabilize your mech, but it's ${conditionKeywords.impaired} until the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')}
      \n2-4\nSystem Trauma\nParts of your mech are torn off by the damage. Roll 1d6. On a 1-3: All ${altText(mechKeywords.weapon, 'weapons')} on one ${altText(mechKeywords.mounts, 'mount')} of  your choise are destroyed; on a 4-6, a ${altText(mechKeywords.systems, 'system')} of your choise is destroyed. ${(gearKeywords.limited_x, 'limited')} ${altText(mechKeywords.weapon, 'weapons')} or ${mechKeywords.systems} that are out of charges are not valid choices. If there are no valid choices remaining, this result becomes a direct hit instead.
      \n1\nDirect Hit\nThe result depends on your mech's remaining ${mechKeywords.structure}: 3+ ${mechKeywords.structure}: Your mech is ${conditionKeywords.stunned} until the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')}; 2 ${mechKeywords.structure}: Roll a ${pilotKeywords.hull} check. On a success, your mech is ${conditionKeywords.stunned} until the ${altText(combatKeywords.end_of_next_turn, 'end of your next turn')}. On a failure, your mech is ${harmKeywords.destroyed}; 1 ${mechKeywords.structure}: Your mech is ${harmKeywords.destroyed}.
      \nMultiple 1s\nCrushing Hit\nYour mech is damaged beyond repair - it is ${harmKeywords.destroyed}. You may still exit as normal.`,
    },
    evasion: {
      name: 'EVASION',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Evasion is how hard it is for ${altText(attacksKeywords.melee_attack, 'melee')} and ${altText(attacksKeywords.ranged_attack, 'ranged')} attacks to hit you. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 evasion for each point of ${pilotKeywords.agility}.`,
    },
    hp: {
      name: 'HP',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Like your ${altText(pilotKeywords.pilot_mech_stats, 'pilot')}, your mech has HP. When your mech takes damage, it loses HP. If it reaches 0 HP, it is not ${harmKeywords.destroyed} but rather takes 1 ${mechKeywords.structure} damage. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +2 HP for each point of ${pilotKeywords.hull} and +1 for each point of ${pilotKeywords.grit}.`,
    },
    repair_cap: {
      name: 'REPAIR CAP',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `${altText(mechKeywords.repair, 'repairs')} are a kind of currency that you can use to heal and repair your mech. If your mech runs out of ${altText(mechKeywords.repair, 'repairs')}, you can no longer regain ${mechKeywords.hp} or fix damaged ${mechKeywords.systems} in the field. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 repair cap for every two points of ${pilotKeywords.hull}.`,
    },
    heat_cap: {
      name: 'HEAT CAP',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Your mech can take some ${harmKeywords.heat} from ${altText(attacksKeywords.tech_attack, 'tech attacks')} and some of its own ${mechKeywords.systems}. If it takes more damage than its heat cap, it ${altText(harmKeywords.overheating, 'overheats')}. When a mech reaches above its heat cap, it takes 1 ${mechKeywords.stress} damage. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 heat cap for each point of ${pilotKeywords.engineering}.`,
    },
    stress: {
      name: 'STRESS',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `Most mechs have 4 stress and are ${harmKeywords.destroyed} when they reach 0 stress. Whenever a mech loses stress, it has to do an ${harmKeywords.overheating} check.`,
    },
    save_target: {
      name: 'SAVE TARGET',
      page: `${BooksEnum.Core}:[34]`,
      category: 'mech',
      text: `When you force another character to make a save, they must match or beat your mech's save target or take consequences. Outside of the amount given by a ${mechKeywords.frame}, a mech also gains +1 save target for each point of ${pilotKeywords.grit}.`,
    },
    weapon: {
      name: 'WEAPON',
      page: `${BooksEnum.Core}:[33]`,
      category: 'mech',
      text: `Mech weapons have three traits: ${weaponKeywords.size}, ${weaponKeywords.type}, and ${weaponKeywords.damage}. They can also have ${gearKeywords.tags} that give them additional special properties.`,
    },
    systems: {
      name: 'SYSTEMS',
      page: `${BooksEnum.Core}:[33]`,
      category: 'mech',
      text: `Every ${mechKeywords.frame} comes with a core system. These powerful abilities are ${gearKeywords.unique} to each ${mechKeywords.frame}, can't be transferred to other mechs, and in most cases can only be used once a mission by assumping ${mechKeywords.core_power}. Outside of these powerful frame-unique systems, every mech also has a set number of ${mechKeywords.system_points} that can be spent to add extra systems to your mech. Some heavier weapons require both ${mechKeywords.mounts} and ${mechKeywords.system_points}. You cannot add systems to your mech that would cause you to exceed your available ${mechKeywords.system_points}.`,
    },
    system_points: {
      name: 'SYSTEM POINTS',
      page: `${BooksEnum.Core}:[33]`,
      category: 'mech',
      text: `Every mech also has a set number of ${mechKeywords.system_points} that can be spent to add extra ${mechKeywords.systems} to your mech. Some heavier weapons require both ${mechKeywords.mounts} and ${mechKeywords.system_points}. You cannot add ${mechKeywords.systems} to your mech that would cause you to exceed your available ${mechKeywords.system_points}.
      
      Your pilot's ${pilotKeywords.grit}, equal to half their ${pilotKeywords.license_level}, is added to your total ${mechKeywords.system_points}, and you gain an additional +1 ${mechKeywords.system_points} for each point of ${pilotKeywords.systems}.`,
    },
    core_power: {
      name: 'CORE POWER',
      page: `${BooksEnum.Core}:[33]`,
      category: 'mech',
      text: `Mechs only have 1 core power, which is used to activate their ${mechKeywords.frame}'s core system. You have it or you don't, it can't be saved up but it does replenish when they perform a ${mechKeywords.full_repair}. Though sometimes a GM might grant additional core power as a powerful reward or boon.`,
    },
    size: {
      name: 'SIZE',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `All mechs, characters and ${altText(movementKeywords.obstruction, 'objects')} on the battlefield have a size that describes how large they are, in grid spaces, on each side (rounded up to 1 if smaller, so a size 1/2 and size 1 character occupy the same space). Size is an abstract measurement - it doesn't describe a precise height and width in meters, but the space a character controls around them. Humans and the smallest mechs are size 1/2. Most mechs are size 1, but some are as large as size 3.`,
    },
    repair: {
      name: 'REPAIR',
      page: `${BooksEnum.Core}:[82]`,
      category: 'mech',
      text: `As long as pilots have repairs available from their ${mechKeywords.repair_cap}, they can spend repairs in a variety of ways, in combat they do this via ${fullActionKeywords.stabilize} - regaining all ${mechKeywords.hp} - at the cop of 1 repair - as well as certain ${mechKeywords.systems}.
      \nPilots can also repair their mechs whilst ${altText(mechKeywords.rest, 'resting')}. `,
    },
    full_repair: {
      name: 'FULL REPAIR',
      page: `${BooksEnum.Core}:[82]`,
      category: 'mech',
      text: `When a character spends at least 10 hours relatively uninterrupted in a secure location, they can perform a full repair. A full repair allows them to:
      \nRestore all pilot HP and clear ${statusKeywords.down_and_out};
      \nRestore a mech to full ${mechKeywords.hp}, ${mechKeywords.stress}, and ${mechKeywords.structure}, as long as it's intact or the wreckage is accessible;
      \nClear all ${altText(combatKeywords.status, 'statuses')} and ${altText(combatKeywords.condition, 'conditions')};
      \nRepair any destroyed ${mechKeywords.weapon} or ${mechKeywords.systems}.
      \nRecover ${mechKeywords.core_power}, if used;
      \nRegain all ${mechKeywords.repair_cap} and uses of ${altText(gearKeywords.limited_x, 'limited')} weapons.
      \n${harmKeywords.printing} a new mech and equipment, with the proper facilities.`,
    },
    rest: {
      name: 'REST',
      page: `${BooksEnum.Core}:[82]`,
      category: 'mech',
      text: `To rest, pilots require at least an hour of interrupted downtime or light activity (e.g., making camp or performing routine maintenance). After resting, characters may:
      \nClear all ${harmKeywords.heat};\nClear any ${altText(combatKeywords.status, 'statuses')} and ${altText(combatKeywords.condition, 'conditions')} affecting their mech;\nRestore half of their pilot's HP and clear ${statusKeywords.down_and_out}.
      \nThey may also spend ${altText(mechKeywords.repair, 'repairs')} at the following costs:
      \n1 ${mechKeywords.repair}: Restore full ${mechKeywords.hp}, or repair a destroyed weapon or system;\n2 ${altText(mechKeywords.repair, 'repairs')}: restore 1 ${mechKeywords.structure} or 1 ${mechKeywords.stress};\n4 ${altText(mechKeywords.repair, 'repairs')}: Repair a ${harmKeywords.destroyed} mech.`,
    },
    mounts: {
      name: 'MOUNTS',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Mechs can only carry a limited number of ${altText(mechKeywords.weapon, 'weapons')}, determined by their ${mechKeywords.frame}. Each mech ${mechKeywords.frame} has a different number and types of mounts. To add a ${mechKeywords.weapon} to your mech, you need an available mount of the right type and size. You can, however, add smaller weapons to larger mounts.
      \nThe following mounts are available:
      ${mechKeywords.main_mount}\n${mechKeywords.heavy_mount}\n${mechKeywords.aux_aux_mount}\n${mechKeywords.main_aux_mount}\n${mechKeywords.flexible_mount}\n${mechKeywords.integrated_mount}\n${mechKeywords.superheavy_mount}
      \nWeapons mounted on a mech aren't neccesarily attached to the chassis, they can be slung in holsters, built into compartments, or held normally. You decide how your mech's weapons are mounted - it has no effect on the rules.`,
    },
    main_mount: {
      name: 'MAIN MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `A main ${altText(mechKeywords.mounts, 'mount')} can take one ${weaponKeywords.main} or ${weaponKeywords.auxiliary} ${mechKeywords.weapon}.`,
    },
    heavy_mount: {
      name: 'HEAVY MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Heavy ${mechKeywords.mounts} can take one ${weaponKeywords.heavy}, ${weaponKeywords.main}, or ${weaponKeywords.auxiliary} ${mechKeywords.weapon}.`,
    },
    aux_aux_mount: {
      name: 'AUX/AUX MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Aux/aux ${mechKeywords.mounts} can take up to two ${weaponKeywords.auxiliary} ${altText(mechKeywords.weapon, 'weapons')}.`,
    },
    main_aux_mount: {
      name: 'MAIN/AUX MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Main/aux ${mechKeywords.mounts} can take one ${weaponKeywords.main} ${mechKeywords.weapon} and one ${weaponKeywords.auxiliary} ${mechKeywords.weapon}, or two ${weaponKeywords.auxiliary} ${altText(mechKeywords.weapon, 'weapons')}.`,
    },
    flexible_mount: {
      name: 'FLEXIBLE MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Flexible ${mechKeywords.mounts} can take either one ${weaponKeywords.main} ${mechKeywords.weapon}, or up to two ${weaponKeywords.auxiliary} ${altText(mechKeywords.weapon, 'weapons')}`,
    },
    integrated_mount: {
      name: 'INTEGRATED MOUNT',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Integrated ${mechKeywords.mounts} are built around specific ${altText(mechKeywords.weapon, 'weapons')}, built into ${altText(mechKeywords.frame, 'frames')}. They automatically include the listed ${altText(mechKeywords.weapon, 'weapons')}, which cannot be destroyed, removed, replaced, or modified in any way.`,
    },
    superheavy_mount: {
      name: 'SUPERHEAVY WEAPONS',
      page: `${BooksEnum.Core}:[32]`,
      category: 'mech',
      text: `Superheavy ${altText(mechKeywords.weapon, 'weapons')}, which are especially large, require both a ${weaponKeywords.heavy} ${altText(mechKeywords.mounts, 'mount')} and one other ${altText(mechKeywords.mounts, 'mount')} of any size, rather than having their own ${altText(mechKeywords.mounts, 'mount')}.`,
    },
  },
};
