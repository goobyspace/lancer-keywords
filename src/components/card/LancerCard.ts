import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { keyword } from '../../types.js';
import { styles } from '../../styles.js';

export class LancerCard extends LitElement {
  static styles = styles;

  @property({ type: Object }) keyword: keyword = {
    name: '',
    text: '',
    page: '',
    colour: '',
    category: '',
  };

  render() {
    // if you click on a keyword, it should open up a card with the text
    // not sure how we should close these cards yet but its going to either be a timer with a hover
    // or a click off/close button
    // also we need to check for the $category/name$ format and replace it with the keyword component

    return html`
      <div class="card">
        <div class="card-header">
          <p>${this.keyword.name}</p>
          <p>${this.keyword.category}</p>
        </div>
        <p>${this.keyword.text}</p>
        <p>${this.keyword.page}</p>
      </div>
    `;
  }
}

window.customElements.define('lancer-card', LancerCard);
