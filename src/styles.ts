import { css } from 'lit';

// all colours are either colour picked from the core book
// or grabbed from https://valkyrion.itch.io/lancer-rpg-template
export const styles = css`
  * {
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 1rem;
  }
  .keyword {
    font-weight: 700;
    color: #231f20;
    cursor: pointer;
  }

  .keyword-red {
    color: #c22026;
  }

  .keyword-blue {
    color: #0070c0;
  }

  .keyword-green {
    color: #67ba44;
  }

  .keyword-purple {
    color: #7e2477;
  }

  .keyword-orange {
    color: #f68a1e;
  }
`;
