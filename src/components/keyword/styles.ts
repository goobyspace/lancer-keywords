import { css } from 'lit';

// all colours are colour picked from the core book
// or chosen to match the style of the core book
// hover-underline-animation is from https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/css/s/hover-underline-animation.md
export const styles = css`
  :host {
    font-family: 'Inter', 'Roboto', sans-serif;
  }

  .lancer-keyword {
    font-weight: 700;
    color: #231f20;
    cursor: pointer;
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 1rem;
    transition: 0.3s;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &.lancer-keyword-ai {
      color: #ccac10;
    }

    &.lancer-keyword-ai::after {
      background: #ccac10;
    }

    &.lancer-keyword-attacks {
      color: #720003;
    }

    &.lancer-keyword-attacks::after {
      background: #720003;
    }

    &.lancer-keyword-bonuses {
      color: #0070c0;
    }

    &.lancer-keyword-bonuses::after {
      background: #0070c0;
    }

    &.lancer-keyword-combat {
      color: #c22026;
    }

    &.lancer-keyword-combat::after {
      background: #c22026;
    }

    &.lancer-keyword-conditions {
      color: #c75a00;
    }

    &.lancer-keyword-conditions::after {
      background: #c75a00;
    }

    &.lancer-keyword-fullaction {
      color: #68bd45;
    }

    &.lancer-keyword-fullaction::after {
      background: #68bd45;
    }

    &.lancer-keyword-gear {
      color: #4b000e;
    }

    &.lancer-keyword-gear::after {
      background: #4b000e;
    }

    &.lancer-keyword-harm {
      color: #720003;
    }

    &.lancer-keyword-harm::after {
      background: #720003;
    }

    &.lancer-keyword-mech {
      color: #e1484c;
    }

    &.lancer-keyword-mech::after {
      background: #e1484c;
    }

    &.lancer-keyword-movement {
      color: #2b30bd;
    }

    &.lancer-keyword-movement::after {
      background: #2b30bd;
    }

    &.lancer-keyword-otheraction {
      color: #68bd45;
    }

    &.lancer-keyword-otheraction::after {
      background: #68bd45;
    }

    &.lancer-keyword-pilot {
      color: #48666e;
    }

    &.lancer-keyword-pilot::after {
      background: #48666e;
    }

    &.lancer-keyword-pilotgear {
      color: #471016;
    }

    &.lancer-keyword-pilotgear::after {
      background: #471016;
    }

    &.lancer-keyword-quickaction {
      color: #68bd45;
    }

    &.lancer-keyword-quickaction::after {
      background: #68bd45;
    }

    &.lancer-keyword-reaction {
      color: #0b7675;
    }

    &.lancer-keyword-reaction::after {
      background: #0b7675;
    }

    &.lancer-keyword-status {
      color: #c75a00;
    }

    &.lancer-keyword-status::after {
      background: #c75a00;
    }

    &.lancer-keyword-techaction {
      color: #7e2477;
    }

    &.lancer-keyword-techaction::after {
      background: #7e2477;
    }

    &.lancer-keyword-weapon {
      color: #000000;
    }

    &.lancer-keyword-weapon::after {
      background: #000000;
    }
  }
`;
