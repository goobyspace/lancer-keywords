import { css } from 'lit';

// all colours are either colour picked from the core book
// or grabbed from https://valkyrion.itch.io/lancer-rpg-template
export const styles = css`
  .lancer-keyword {
    font-weight: 700;
    color: #231f20;
    cursor: pointer;
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 1rem;
  }

  .lancer-keyword-attacks {
    color: #c22026;
  }

  .lancer-keyword-modifiers {
    color: #0070c0;
  }

  .lancer-keyword-stats {
    color: #231f20;
  }

  .lancer-keyword-green {
    color: #67ba44;
  }

  .lancer-keyword-purple {
    color: #7e2477;
  }

  .lancer-keyword-orange {
    color: #f68a1e;
  }
`;
