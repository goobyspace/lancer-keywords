import { css } from 'lit';

// all colours are colour picked from the core book
// or chosen to match the style of the core book
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
    position: fixed;
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

      .lancer-card-header-name {
        text-transform: uppercase;
      }

      p {
        margin: 0;
        padding: 0.25rem;
        height: 1rem;
      }
      .lancer-card-header-category {
        text-transform: capitalize;
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
        color: #231f20;
        margin: 0;
        white-space: pre-wrap;
      }

      .lancer-card-page {
        font-weight: 700;
        float: right;
        margin-top: 0.5rem;
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

    &.lancer-card-ai {
      .lancer-card-header {
        border-bottom: 1.5rem solid #ccac10;
      }
      .lancer-card-body {
        background-color: #f9f4e9;
      }
    }

    &.lancer-card-attacks {
      .lancer-card-header {
        border-bottom: 1.5rem solid #900002;
      }
      .lancer-card-body {
        background-color: #f9e9e9;
      }
    }

    &.lancer-card-bonuses {
      .lancer-card-header {
        border-bottom: 1.5rem solid #3a82c4;
      }
      .lancer-card-body {
        background-color: #d8e6f3;
      }
    }

    &.lancer-card-combat {
      .lancer-card-header {
        border-bottom: 1.5rem solid #c22026;
      }
      .lancer-card-body {
        background-color: #f9e9e9;
      }
    }

    &.lancer-card-conditions {
      .lancer-card-header {
        border-bottom: 1.5rem solid #c75a00;
      }
      .lancer-card-body {
        background-color: #f9efe6;
      }
    }

    &.lancer-card-fullaction {
      .lancer-card-header {
        border-bottom: 1.5rem solid #68bd45;
      }
      .lancer-card-body {
        background-color: #e1f2da;
      }
    }

    &.lancer-card-gear {
      .lancer-card-header {
        border-bottom: 1.5rem solid #4b000e;
      }
      .lancer-card-body {
        background-color: #ede7e8;
      }
    }

    &.lancer-card-harm {
      .lancer-card-header {
        border-bottom: 1.5rem solid #720003;
      }
      .lancer-card-body {
        background-color: #f9e9e9;
      }
    }

    &.lancer-card-mech {
      .lancer-card-header {
        border-bottom: 1.5rem solid #e1484c;
      }
      .lancer-card-body {
        background-color: #f9e9e9;
      }
    }

    &.lancer-card-movement {
      .lancer-card-header {
        border-bottom: 1.5rem solid #2b30bd;
      }
      .lancer-card-body {
        background-color: #e9e9f9;
      }
    }

    &.lancer-card-otheraction {
      .lancer-card-header {
        border-bottom: 1.5rem solid #68bd45;
      }
      .lancer-card-body {
        background-color: #e1f2da;
      }
    }

    &.lancer-card-pilot {
      .lancer-card-header {
        border-bottom: 1.5rem solid #48666e;
      }
      .lancer-card-body {
        background-color: #e7ecee;
      }
    }

    &.lancer-card-pilotgear {
      .lancer-card-header {
        border-bottom: 1.5rem solid #471016;
      }
      .lancer-card-body {
        background-color: #ede7e8;
      }
    }

    &.lancer-card-quickaction {
      .lancer-card-header {
        border-bottom: 1.5rem solid #68bd45;
      }
      .lancer-card-body {
        background-color: #e1f2da;
      }
    }

    &.lancer-card-reaction {
      .lancer-card-header {
        border-bottom: 1.5rem solid #0b7675;
      }
      .lancer-card-body {
        background-color: #e7f1f1;
      }
    }

    &.lancer-card-status {
      .lancer-card-header {
        border-bottom: 1.5rem solid #c75a00;
      }
      .lancer-card-body {
        background-color: #f9efe6;
      }
    }

    &.lancer-card-techaction {
      .lancer-card-header {
        border-bottom: 1.5rem solid #7e2477;
      }
      .lancer-card-body {
        background-color: #f2e9f1;
      }
    }

    &.lancer-card-weapon {
      .lancer-card-header {
        border-bottom: 1.5rem solid #000000;
      }
      .lancer-card-body {
        background-color: #f2f2f2;
      }
    }
  }
`;
