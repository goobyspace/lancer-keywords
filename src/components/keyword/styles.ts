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

    &.lancer-keyword-attacks {
      color: #c22026;
    }

    &.lancer-keyword-attacks::after {
      background: #c22026;
    }

    &.lancer-keyword-modifiers {
      color: #0070c0;
    }

    &.lancer-keyword-modifiers::after {
      background: #0070c0;
    }

    &.lancer-keyword-stats {
      color: #231f20;
    }

    &.lancer-keyword-stats::after {
      background: #231f20;
    }
  }
`;
