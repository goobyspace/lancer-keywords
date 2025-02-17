import { altText } from '../utility/altText.js';
import { BooksEnum } from '../utility/enums.js';
import { category } from '../utility/types.js';
import { bonusesKeywords } from './bonusesKeywords.js';
import { combatKeywords } from './combatKeywords.js';
import { conditionKeywords } from './conditionKeywords.js';
import { fullActionKeywords } from './fullActionKeywords.js';
import { gearKeywords } from './gearKeywords.js';
import { harmKeywords } from './harmKeywords.js';
import { mechKeywords } from './mechKeywords.js';
import { movementKeywords } from './movementKeywords.js';
import { pilotKeywords } from './pilotKeywords.js';
import { quickActionKeywords } from './quickActionKeywords.js';
import { reactionKeywords } from './reactionKeywords.js';
import { statusKeywords } from './statusKeywords.js';

export const movement: category = {
  keywords: {
    obstruction: {
      name: 'obstruction',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `An obstruction is anything that blocks passage, preventing ${combatKeywords.movement} into its space entirely. Obstructions are typically environmental but other characters can also be obstructions. Characters are obstructed by any solid objects or characters that are the same ${mechKeywords.size} as them or larger.
      \nCharacters can freely pass through spaces occupied by obstructions smaller than them, including other characters; however, they can't end a ${combatKeywords.movement} in a space that is occupied by another character or object unless specified. This means that a ${mechKeywords.size} 2 mech, for example, could move through the space of a ${mechKeywords.size} 1 mech or object, but could not finish its move in the same space.
      \nAllied characters never cause obstruction, but characters still can't end moves in their space. Additionally, mechs can always move through spaces occupied by unmounted humans.`,
    },
    adjacency: {
      name: 'adjacency',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `Characters are considered adjacent to another character or object when they are within one space of it in any direction - even diagonal and vertical. This can trigger ${movementKeywords.engagement} in the case of two characters hostile to each other.`,
    },
    splitting_movement: {
      name: 'splitting movement',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `Any time characters voluntarily move, whether it's a standard ${altText(combatKeywords.movement, 'move')} or something else (like ${quickActionKeywords.boost}), they can split up their ${combatKeywords.movement} with any ${combatKeywords.actions}; however, when they do this, any non-movement ${combatKeywords.actions} they take must fully resolve before they continue moving.
      \nFor example, a mech with 6 ${mechKeywords.speed} could move 4 spaces, ${fullActionKeywords.barrage}, and then move two more spaces; however, it would need to complete the full ${fullActionKeywords.barrage} action - firing with two ${mechKeywords.mounts} - before moving those final 2 spaces. It couldn't fire one ${altText(mechKeywords.mounts, 'mount')}, move two spaces, and then fire another ${altText(mechKeywords.mounts, 'mount')}.`,
    },
    engagement: {
      name: 'engagement',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `If a character moves ${altText(movementKeywords.adjacency, 'adjacent')} to a hostile character, they both gain the ${statusKeywords.engaged} status as long as they remain ${altText(movementKeywords.adjacency, 'adjacent')} to one another. Ranged attacks made by an ${statusKeywords.engaged} character receive +1 ${bonusesKeywords.difficulty}.
      \nAdditionally, characters that become ${statusKeywords.engaged} by characters of equal or greater ${mechKeywords.size} during the course of a ${combatKeywords.movement} action stop moving immediately and lose any unused ${combatKeywords.movement}. 
      \nAfter you have become engaged ${statusKeywords.engaged} with a character, you may make further move actions as normal and moving into other adjacent spaces does not stop your movement, though beginning a ${altText(combatKeywords.movement, 'move')} within that character's ${combatKeywords.threat} may provoke ${combatKeywords.reactions} such as ${reactionKeywords.Overwatch}.`,
    },
    terrain: {
      name: 'terrain',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `Mech combat takes place on many types of worlds in countless hostile and hazardous environments. There are two terrain types with mechanics:
      \nDifficult terrain can be anything from rough, marshy or swampy ground, through to icy landscapes, and treacherous rocky scree. All ${combatKeywords.movement} through difficult terrain is at half ${mechKeywords.speed} - each space of difficult terrain they move into is equivelant to two spaces of ${combatKeywords.movement}.
      \nDangerous terrain is even more hazardous, and comprises of things such as intense radiation, boiling gases, lava, and falling rocks. When characters ${altText(combatKeywords.end_of_turn, 'end their turn')} in dangerous terrain, or move into it for the first time in a round, they must make an ${pilotKeywords.engineering} ${altText(combatKeywords.skill_check, 'check')}. On a failure, they take 5 ${harmKeywords.damage} - ${harmKeywords.kinetic}, ${harmKeywords.energy}, ${harmKeywords.explosive}, or ${harmKeywords.burn}, depending on the hazard.
      Each character only needs to make one such ${altText(combatKeywords.skill_check, 'check')} per round, so once they've made it, they're safe to move around in the hazardous terrain until the ${altText(combatKeywords.end_of_next_turn, 'end of their next turn')}.`,
    },
    lifting: {
      name: 'lifting',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `Mechs can lift characters or objects of equal or lesser ${mechKeywords.size} overhead, but are ${conditionKeywords.immobilized} while doing so. While lifting, characters can't take ${combatKeywords.reactions}. The same rules apply to pilots and other characters on foot, but they can't lift anything above ${mechKeywords.size} 1/2. See also: ${movementKeywords.dragging}.`,
    },
    dragging: {
      name: 'dragging',
      page: `${BooksEnum.Core}:[62]`,
      category: 'movement',
      text: `Mechs can drag characters or objects up to twice their ${mechKeywords.size}, but are ${conditionKeywords.slowed} while doing so. While dragging, characters can't take ${combatKeywords.reactions}. The same rules apply to pilots and other characters on foot, but they can't drag anything above ${mechKeywords.size} 1/2. See also: ${movementKeywords.lifting}.`,
    },
    jumping: {
      name: 'jumping',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Characters with legs can jump instead of using their standard ${altText(combatKeywords.movement, 'move')}. They may jump horizontally, moving half their ${mechKeywords.speed} in a straight line and ignoring obstructions at ground level that they could jump over (such as pits or gaps).\nOr they may jump vertically, moving 1 space adjacent and moving up by spaces equivelant to their ${mechKeywords.size}. For example, a ${mechKeywords.size} 1 mech could jump up to 1 space high, and 1 space over. Characters that jump and end the jump mid air automatically ${altText(movementKeywords.falling, 'fall')} at the end of the move. See also: ${movementKeywords.climbing}.`,
    },
    climbing: {
      name: 'climbing',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Like moving through difficult ${movementKeywords.terrain}, characters climb at half their usual ${mechKeywords.speed} - each space moved is equivelant to moving 2 spaces normally. A succesful ${pilotKeywords.hull} or ${pilotKeywords.agility} ${altText(combatKeywords.skill_check, 'check')} might be required to climb particularly difficult surfaces without ${movementKeywords.falling}. See also: ${movementKeywords.jumping}.`,
    },
    falling: {
      name: 'falling',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Characters take ${harmKeywords.damage} when they fall three or more spaces and cannot recover before hitting the ground. In standard circumstances, characters fall 10 spaces per round, but mechs can't fall in zero-g or low-g environments, and falling speeds may differ depending on the location.
      \nUnless specified otherwise, characters start to fall at the end of the current turn, and fall at the end of each of their turns thereafter. They take 3 ${harmKeywords.kinetic} ${gearKeywords.armor_piercing} ${harmKeywords.damage} for every three spaces fallen, to a maximum of 9 ${harmKeywords.kinetic} ${gearKeywords.armor_piercing} ${harmKeywords.damage}.
      
      Falling is a type of involuntary movement, and can trigger effects triggered by involuntary movement.`,
    },
    gravity: {
      name: 'gravity',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Mechs operating underwater, in zero-g, or even in space are ${conditionKeywords.slowed} unless they have a propulsion or flight system; however, they can't fall and can fly when moving regardless of whether they have a flight system.`,
    },
    flight: {
      name: 'flight',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Some characters can fly for either all or part of their ${combatKeywords.movement}. Flying characters can move vertically and horizontally up to their ${mechKeywords.speed}. For example, a mech with a flight system and 6 ${mechKeywords.speed} could end its movement anywhere within six spaces of its starting location, up to a maximum of 6 spaces high.
      \nFlight ${combatKeywords.movement} must follow a straight line; however, if a character takes additional ${combatKeywords.movement} ${combatKeywords.actions}, such as ${quickActionKeywords.boost}, these can be used to move in a different direction.
      \nWhen flying, characters ignore ${movementKeywords.obstruction} as long as it is physically possible for them to do so - they couldn't, for instance, move through a gap smaller than their mech's ${mechKeywords.size}. Flying characters also have ${harmKeywords.immunity} to ${statusKeywords.prone}.
      \nFlying also comes with some risks:
      When flying, characters must move at least 1 space on their ${combatKeywords.turn} or begin ${movementKeywords.falling}.
      Flying characters begin ${movementKeywords.falling} if they become ${conditionKeywords.immobilized}, ${conditionKeywords.stunned} or otherwise can't move.
      Flying characters that take ${mechKeywords.structure} ${harmKeywords.damage} or ${mechKeywords.stress} must succeed on an agility ${altText(combatKeywords.saves, 'save')} or begin falling.
      \nDuring mech combat, characters that fly too high above the battlefield can only take certain ${combatKeywords.actions}. Flying characters must remain no more than 10 spaces over any surface (e.g., ground, water, structures) to act normally. For example, a flying mech could move 10 spaces above the ground or float 10 spaces above a building five spaces high - a total of 15 spaces above the ground - and still act.
      \nCharacters cannot move beyond this distance if they have already taken an action in the same turn; if they do move more than 10 spaces above the battlefield, they can only ${altText(combatKeywords.movement, 'move')} and ${quickActionKeywords.boost}, and cannot take reactions until they start their turn below that celing.
      \nThis restriction does not exist in zero-g and outside of mech combat.
      \nExcept in zero-g environments, characters cannot carry characters or object with a total ${mechKeywords.size} larget than ${mechKeywords.size} 1/2 while flying - there's just not enough thrust!
      \nSome very advanced mechs can hover. Hovering characters do not need to move in a straight line, and can remain stationary while airborne without ${movementKeywords.falling}.`,
    },
    teleportation: {
      name: 'teleportation',
      page: `${BooksEnum.Core}:[63]`,
      category: 'movement',
      text: `Some characters can teleport, instantly moving to any free space within a specified ${combatKeywords.range}. They must start and end a teleport on a surface they can normally move on; for example, a character that can't ${altText(movementKeywords.flight, 'fly')} can't teleport mid-air.
      \nTeleportation ignores ${altText(movementKeywords.obstruction, 'obstructions')}, does not require ${combatKeywords.line_of_sight}, ignores ${movementKeywords.engagement}, and does not provoke ${combatKeywords.reactions}; however, it still counts as movement and so is affected by conditions like ${conditionKeywords.immobilized}. A teleporting character counts as moving 1 space, no matter how far they actually travelled.
      \nCharacters can attempt to teleport to spaces they can't see, but if a space is already occupied, the teleport fails.`,
    },
  },
};
