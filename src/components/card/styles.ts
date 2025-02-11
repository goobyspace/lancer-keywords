import { css } from 'lit';

// all colours are either colour picked from the core book
// or grabbed from https://valkyrion.itch.io/lancer-rpg-template
export const styles = css`
  .lancer-card-clickthrough {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .lancer-card {
    display: block;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 40rem;
    font-family: 'Inter', 'Roboto', sans-serif;
    white-space: normal;

    .lancer-card-header {
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      color: white;
      border-right: 2rem solid transparent;
      height: 0;
      width: calc(100%-2rem);

      p {
        margin: 0;
        padding: 0.25rem;
        height: 1rem;
      }
      .lancer-card-header-category:first-letter {
        text-transform: uppercase;
      }
    }
    .lancer-card-body {
      margin: 0;
      display: block;
      overflow: hidden;

      .lancer-card-body-text {
        display: inline;
        padding: 0.25rem;
        box-decoration-break: clone;
        margin: 0;
        white-space: pre-wrap;
      }

      .lancer-card-page {
        font-weight: 700;
        float: right;
        margin: 0;
        padding: 0;
        background-color: #d21c21;
        border-radius: 0.5rem 0 0 0;
        display: flex;
        justify-content: end;
        align-items: end;

        .lancer-card-page-number {
          margin: 0;
          padding: 0.25rem;
          color: white;
        }
      }
    }

    .lancer-card-body-clear {
      clear: both;
    }

    &.lancer-card-attacks {
      .lancer-card-header {
        border-bottom: 1.5rem solid #c22026;
      }
      .lancer-card-body {
        background-color: #f9e9e9;
      }
    }

    &.lancer-card-modifiers {
      .lancer-card-header {
        border-bottom: 1.5rem solid #3a81c3;
      }
      .lancer-card-body {
        background-color: #d8e6f3;
      }
    }

    &.lancer-card-stats {
      .lancer-card-header {
        border-bottom: 1.5rem solid #000000;
      }
      .lancer-card-body {
        background-color: #f4f4f4;
      }
    }
  }
`;
