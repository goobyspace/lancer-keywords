import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { keyword } from '../../types.js';
import { styles } from './styles.js';

export class LancerKeyword extends LitElement {
  static styles = styles;

  @property({ type: Object }) keyword: keyword = {
    name: '',
    text: '',
    page: '',
    category: '',
  };

  render() {
    // if you click on a keyword, it should open up a card with the text
    // not sure how we should close these cards yet but its going to either be a timer with a hover
    // or a click off/close button

    return html`
      <p class="lancer-keyword lancer-keyword-${this.keyword.category}">
        ${this.keyword.name}
      </p>
    `;
  }
}

window.customElements.define('lancer-keyword', LancerKeyword);
