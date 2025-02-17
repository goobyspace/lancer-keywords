import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { aiKeywords } from './aiKeywords.js';
import { attackKeywords } from './attackKeywords.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { reactionKeywords } from './reactionKeywords.js';
import { statusKeywords } from './statusKeywords.js';
import { weaponKeywords } from './weaponKeywords.js';

export const gear: category = {
  keywords: {
    accurate: {
      name: 'accurate',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `${altText(combatKeywords.attack, 'Attacks')} made with this ${mechKeywords.weapon} receive +1 ${bonusesKeywords.accuracy}.`,
    },
    arcing: {
      name: 'arcing',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} can be fired over ${(movementKeywords.obstruction, 'obstacles')}, usually by lobbing a projectile in an arc. ${altText(combatKeywords.attack, 'Attacks')} made with this ${mechKeywords.weapon} don't require ${combatKeywords.line_of_sight}, as long as it's possible to to trace a path to the target; however, they are still affected by ${combatKeywords.cover}.`,
    },
    armor_piercing: {
      name: 'armor piercing',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `Damage dealt by this ${mechKeywords.weapon} ignores ${harmKeywords.armor}.`,
    },
    inaccurate: {
      name: 'inaccurate',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `Attacks made with this weapon receive +1 ${bonusesKeywords.difficulty}.`,
    },
    knockback: {
      name: 'knockback',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `On a hit, the user may choose to knock their target X spaces in a straight line directly away from the point of origin. (e.g. the attacking mech, or the center of a ${altText(weaponKeywords.patterns, 'blast')})). Multiple knockback effects stack with each other. This means that an ${combatKeywords.attack} made with a knockback 1 ${mechKeywords.weapon} and a ${altText(pilotKeywords.talents, 'talent')} that grants knockback 1 counts as having knockback 2.`,
    },
    loading: {
      name: 'loading',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} must be reloaded after each use. Mechs can reload with ${fullActionKeywords.stabilize} and some ${mechKeywords.systems}.`,
    },
    ordnance: {
      name: 'ordnance',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} can only be fired before the user ${altText(combatKeywords.movement, 'moves')} or takes any other ${combatKeywords.actions} on their turn, excepting ${altText(gearKeywords.protocol, 'protocols')}. The user can still act and ${altText(combatKeywords.movement, 'moves')} normally after attacking. Additionally, because of its size, this ${mechKeywords.weapon} can't be used against targets in ${movementKeywords.engagement} with the user's mech, and cannot be used for ${reactionKeywords.Overwatch}.`,
    },
    overkill: {
      name: 'overkill',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `When rolling for damage with this ${mechKeywords.weapon}, any damage dice that land on a 1 cause the attacker to take 1 ${harmKeywords.heat}, and are then rerolled. Additional 1s continue to trigger this effect.`,
    },
    overshield: {
      name: 'overshield',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${altText(mechKeywords.systems, 'system')} provides ${mechKeywords.hp} that disappears at the end of the ${combatKeywords.scene} or when a specified condition is met. The user only retains the highest value of overshield applied - it does not stack.
      \nFor example, if a ${altText(mechKeywords.systems, 'system')} provides overshield 5 and the user gains another effect that provides overshield 7, they would gain overshield 7. Damage is dealt to overshield first, then ${mechKeywords.hp}. \nOvershield can push a character past their maximum ${mechKeywords.hp}. It can't benefit from any ${altText(mechKeywords.repair, 'healing')} but otherwise benefits normally from anything that would affect ${mechKeywords.hp} and ${harmKeywords.damage} (i.e., ${harmKeywords.resistance}, ${harmKeywords.armor}, etc).`,
    },
    reliable_x: {
      name: 'reliable x',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} has some degree of self-correction or is simply powerful enough to cause ${harmKeywords.damage} when with a glancing blow. It always does X ${harmKeywords.damage}, even if it misses its target or rolls less ${harmKeywords.damage}. Reliable ${harmKeywords.damage} inherits other ${gearKeywords.tags} (such as ${gearKeywords.armor_piercing}) and base ${harmKeywords.damage} ${weaponKeywords.type} but not ${gearKeywords.tags} that require a hit, such as ${gearKeywords.knockback}.`,
    },
    seeking: {
      name: 'seeking',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} has a limited form of self-guidance and internal propulsion, allowing it to follow complicated paths to its target. As long as it's possible to draw a path to its target, this ${mechKeywords.weapon} ignores ${combatKeywords.cover} and doesn't require ${combatKeywords.line_of_sight}.`,
    },
    smart: {
      name: 'smart',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} has a self-guidance system, self-propelled projectiles, or even nanorobotic ammunition. These systems are effective enough that its attacks can't simply be dodged - they must be scrambled or jammed. Because of this, all attacks with this weapon - including ${altText(attackKeywords.melee_attack, 'melee')} and ${altText(attackKeywords.ranged_attack, 'ranged')} attacks - use the target's ${mechKeywords.e_defense} instead of ${mechKeywords.evasion}. Targets with no ${mechKeywords.e_defense} count as having 8 ${mechKeywords.e_defense}.`,
    },
    threat_x: {
      name: 'threat x',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} can be used to make ${reactionKeywords.Overwatch} within X spaces. If it's a ${weaponKeywords.melee} ${mechKeywords.weapon}, it can be used to make ${altText(attackKeywords.melee_attack, 'melee attacks')} within X spaces.`,
    },
    thrown_x: {
      name: 'thrown x',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${weaponKeywords.melee} ${mechKeywords.weapon} can be thrown at targets within X spaces. Thrown attacks follow the rules for ${altText(attackKeywords.melee_attack, 'melee attacks')} but are affected by ${combatKeywords.cover}; additionally, a thrown ${mechKeywords.weapon} comes to rest in an adjacent space to its target and must be retrieved as a ${combatKeywords.free_action} while adjacent to that ${mechKeywords.weapon} before it can be used again.`,
    },
    deployable: {
      name: 'deployable',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This system is an object that can be deployed on the field. Unless otherwise specified, it can be deployed in adjacent, free and valis space as a ${combatKeywords.quick_action}, and has 5 ${mechKeywords.evasion} and 10 ${mechKeywords.hp} per ${mechKeywords.size}.`,
    },
    drone: {
      name: 'drone',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This is a self-propelled, semi-autonomous unit with rudimentary intelligence. Unless otherwise specified, drones are ${mechKeywords.size} 1/2 characters that are allied to the user and have 10 ${mechKeywords.evasion}, 5 ${mechKeywords.hp} and 0 ${harmKeywords.armor}.
      \nTo be used, they must be deployed to a free, valid space within ${mechKeywords.sensors} and ${combatKeywords.line_of_sight}, typically as a ${combatKeywords.quick_action}. Once deployed, they can be recalled with the same action used to deploy them (${combatKeywords.quick_action} or ${combatKeywords.full_action}, etc.), rejoining with your mech.
      \nBy default, drones can't take ${combatKeywords.actions} or ${altText(combatKeywords.movement, 'move')}; if they do have ${combatKeywords.actions} or ${combatKeywords.movement}, they act on their user's turn. They benefit from ${combatKeywords.cover} and other defenses as usual, and make all mech ${altText(combatKeywords.skill_check, 'skill checks')} and ${combatKeywords.saves} at +0.
      \nIf a drone reaches 0 ${mechKeywords.hp} it is destroyed and must be repaired before it can be used again - like any system. As long as the drone hasn't been destroyed, it is restored to full ${mechKeywords.hp} when the user rests or performs a ${mechKeywords.full_repair}. Deployed drones persist for the rest of the full ${combatKeywords.scene}, until destroyed or until otherwise specified.`,
    },
    grenade: {
      name: 'grenade',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `As a ${combatKeywords.quick_action}, this explosive or other device can be thrown to a space within ${combatKeywords.line_of_sight} and the specified ${combatKeywords.range}.`,
    },
    mine: {
      name: 'mine',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `As a ${combatKeywords.quick_action}, this device can be planted in an adjacent, free and valid space on any surface, but not adjacent to any other mines. Upon deployment, it arms at the ${altText(combatKeywords.end_of_turn, "end of the deploying character's turn")} and - unless otherwise specified - is triggered when any character enters an adjacent space. Characters leaving an adjacent space will not trigger a mine. 
      \nOnce triggered, a mine creates a ${altText(weaponKeywords.patterns, 'burst')} attack starting from the space in which it was placed. Mines within a character's ${mechKeywords.sensors} can be detected by making a successful ${pilotKeywords.systems} ${altText(combatKeywords.skill_check, 'check')} as a ${combatKeywords.quick_action}, otherwise they are ${statusKeywords.hidden} and can't be targeted. 
      \nDetected mines can be disarmed from adjacent spaces by making a succesful ${pilotKeywords.systems} ${altText(combatKeywords.skill_check, 'check')} as a ${combatKeywords.quick_action}; the attempt takes place before the mine detonates, and on a failure, the mine detonates as normal.`,
    },
    mod: {
      name: 'mod',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `This modification can be applied to a ${mechKeywords.weapon}. Each ${mechKeywords.weapon} can only have one mod at a time, and cannot have more than one of the same mod. Mods are applied when the user builds their mech, or during a ${mechKeywords.full_repair}`,
    },
    protocol: {
      name: 'protocol',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `This ${altText(mechKeywords.systems, 'system')} can be activated as a ${combatKeywords.free_action}, but only at the start of the user's ${combatKeywords.turn}. Another ${altText(combatKeywords.actions, 'action')} might be needed to deactivate it.`,
    },
    shield: {
      name: 'shield',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `This ${altText(mechKeywords.systems, 'system')} is an energy shield of some kind.`,
    },
    unique: {
      name: 'unique',
      page: `${BooksEnum.Core}:[106]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} or ${altText(mechKeywords.systems, 'system')} cannot be duplicated - each character can only have one copy of it installed at a time.`,
    },
    ai: {
      name: 'ai',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `A mech can only have one ${altText(mechKeywords.systems, 'system')} with this ${altText(gearKeywords.tags, 'tag')} installed at a time. Some AI ${mechKeywords.systems} grant the ${altText(gearKeywords.tags, 'tag')} tag to the mech. \nA mech with the AI ${altText(gearKeywords.tags, 'tag')} has an ${aiKeywords.nhp} or ${aiKeywords.comp_con} unit installed that can act somewhat autonomously. A pilot can choose to ${altText(aiKeywords.ai_control, 'hand over the controls')} to their AI or take control back as a ${gearKeywords.protocol}.
      \nTheir mech gains its own set of ${combatKeywords.actions} and ${combatKeywords.reactions} when controlled by an AI, but the pilot can't take any ${combatKeywords.actions} or ${combatKeywords.reactions} with it until the start of their next turn. AIs can't benefit from ${pilotKeywords.talents}, and have a small chance of ${altText(aiKeywords.cascade, 'cascading')} when they take ${mechKeywords.structure} ${harmKeywords.damage} or ${mechKeywords.stress} ${harmKeywords.damage}.`,
    },
    tags: {
      name: 'tags',
      page: `${BooksEnum.Core}:[104]`,
      category: 'gear',
      text: `Tags are a specific term that describe how a piece of gear functions and what sort of rules are attached to it.
      \nWhere a tag of any type is followed by X, X is the relevant quantity (e.g., ${harmKeywords.armor}, ${harmKeywords.damage}, ${combatKeywords.range}, etc).
      \nRemember that specific rules override general rules. That means that if a ${altText(mechKeywords.systems, 'system')} has different rules to what the general rules say, you should use the specific rules given for that ${altText(mechKeywords.systems, 'system')}.`,
    },
    limited_x: {
      name: 'limited x',
      page: `${BooksEnum.Core}:[105]`,
      category: 'gear',
      text: `This ${mechKeywords.weapon} or ${altText(mechKeywords.systems, 'system')} can only be used X times before it requires a ${mechKeywords.full_repair}. Some limited ${mechKeywords.systems}, like ${altText(gearKeywords.grenade, 'grenades')}, describe these uses as "charges". To use the system, the user expends a charge.`,
    },
  },
};
