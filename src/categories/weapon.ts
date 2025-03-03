import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { combatKeywords } from './combatKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { weaponKeywords, weapon as weaponType } from './weaponKeywords.js';

export const weapon: weaponType = {
  keywords: {
    size: {
      name: 'size',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `${altText(mechKeywords.weapon, 'weapons')} come in different sizes, which determine how they can be used and which ${mechKeywords.mounts} they fit in. ${altText(mechKeywords.weapon, 'weapons')} can have the following sizes:
      \n${weaponKeywords.auxiliary}
      ${weaponKeywords.main}
      ${weaponKeywords.heavy}
      ${weaponKeywords.superheavy}`,
    },
    type: {
      name: 'type',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `There are six types of weapon which describe their general ${combatKeywords.range} and combat function. These types are:
      \n${weaponKeywords.melee}
      ${weaponKeywords.cqb}
      ${weaponKeywords.rifle}
      ${weaponKeywords.launcher}
      ${weaponKeywords.cannon}
      ${weaponKeywords.nexus}`,
    },
    damage: {
      name: 'damage',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Most ${altText(mechKeywords.weapon, 'weapons')} deal one of three kinds of ${harmKeywords.damage}: ${harmKeywords.kinetic}, ${harmKeywords.explosive}, or ${harmKeywords.energy}. Some special ${altText(mechKeywords.weapon, 'weapons')} also deal ${harmKeywords.burn} (damage over time) or ${harmKeywords.heat} (harm to a mech's internal systems).`,
    },
    auxiliary: {
      name: 'auxiliary',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Auxiliary ${altText(mechKeywords.weapon, 'weapons')} are the smallest ${weaponKeywords.size} mech ${altText(mechKeywords.weapon, 'weapons')}, light enough to use alongside larger ${altText(mechKeywords.weapon, 'weapons')}.`,
    },
    superheavy: {
      name: 'superheavy',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Superheavy ${altText(mechKeywords.weapon, 'weapons')} are very large ${weaponKeywords.size} ${altText(mechKeywords.weapon, 'weapons')} with high power requirements; they often take up multiple ${mechKeywords.mounts} They are usually rare or highly advanced.`,
    },
    main: {
      name: 'main',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Main ${altText(mechKeywords.weapon, 'weapons')} are the standard ${weaponKeywords.size} for mech ${altText(mechKeywords.weapon, 'weapons')}.`,
    },
    heavy: {
      name: 'heavy',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Heavy ${altText(mechKeywords.weapon, 'weapons')} are heavier, larger ${weaponKeywords.size} ${altText(mechKeywords.weapon, 'weapons')}, used to inflict massive damage.`,
    },
    melee: {
      name: 'melee',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Melee ${altText(mechKeywords.weapon, 'weapons')} are mech-scale swords, axes, power tools and other hand-to-hand ${altText(mechKeywords.weapon, 'weapons')}. A mech's raw strength can turn even crude tools into forces to be reckoned with.`,
    },
    cqb: {
      name: 'QCB',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `QCB (Close Quarters Battle) ${altText(mechKeywords.weapon, 'weapons')} are those designed for close-range combat, including pistols, shotguns, flamethrowers, and more exotic ${altText(mechKeywords.weapon, 'weapons')} like nailguns. They usually have short range, but are better for reacting quickly to emergent threats.`,
    },
    rifle: {
      name: 'rifle',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Rifles are sturdy ${altText(mechKeywords.weapon, 'weapons')} with good range and stopping power.`,
    },
    launcher: {
      name: 'launcher',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Launchers are ${altText(mechKeywords.weapon, 'weapons')} that fire missiles, grenades or other projectiles.`,
    },
    cannon: {
      name: 'cannon',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Cannons are high-caliber ${altText(mechKeywords.weapon, 'weapons')} useful for inflicting heavy damage on enemies. What they lack in precision, they usually make up for in power.`,
    },
    nexus: {
      name: 'nexus',
      page: `${BooksEnum.Core}:[33]`,
      category: 'weapon',
      text: `Nexus ${altText(mechKeywords.weapon, 'weapons')} are resevoirs and projectors for swarms of self-propelled, armed drones.`,
    },
    patterns: {
      name: 'patterns',
      page: `${BooksEnum.Core}:[64]`,
      category: 'weapon',
      text: `Some ${altText(mechKeywords.weapon, 'weapons')} and ${mechKeywords.systems} have special ${combatKeywords.attack} patterns. These ${combatKeywords.attack} affect all targets within a defined area. A seperate ${combatKeywords.attack} roll is made for each target, but ${harmKeywords.damage} is only rolled once and bonus ${harmKeywords.damage} is halved if there are multiple characters affected. For any ability or effect calling for you to choose a target or targets within ${combatKeywords.range}, a ${mechKeywords.weapon} can choose any target that would be hit by its pattern.
      \nLine X: Affects characters in a straight line, X spaces long.
      \nCone X: Affects characters within a cone, X spaces long and X spaces wide at its furthers point. The cone begins at one space wide.
      \nBlast X: Affects characters within a radius of X spaces, drawn from a point within ${combatKeywords.range} and ${combatKeywords.line_of_sight}. ${combatKeywords.cover} and ${combatKeywords.line_of_sight} are calculated based on the center of the blast, rather than the position of the attacker.
      \nBurst X: Affects characters within a radius of X spaces, centered on and including the space occupied by the user (or target). If the Burst is an ${combatKeywords.attack}, the user or target is not affected by the ${combatKeywords.attack} unless specified. ${combatKeywords.cover} and ${combatKeywords.line_of_sight} are calculated from the character. If a Burst effect is ongoing, it moves with the character at its center.
      \nSome Line, Cone, Burst and Blast attacks list a ${combatKeywords.range}. In these cases, the attack's point of origin can be drawn from a point within the ${combatKeywords.range} specified and ${combatKeywords.line_of_sight}.
      \nSome mech ${altText(mechKeywords.frame, 'frames')} also grant increased ${combatKeywords.range}. This does not affect the size of the pattern, although it does increase the ${combatKeywords.range} of such attacks that have a listed ${combatKeywords.range}.`,
    },
  },
};
