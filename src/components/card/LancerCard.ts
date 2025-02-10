import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { keyword } from '../../types.js';
import { styles } from './styles.js';
import { Categories } from '../../categories.js';

export class LancerCard extends LitElement {
  @property({ type: Object }) keyword: keyword = {
    name: '',
    text: '',
    page: '',
    category: '',
  };

  connectedCallback() {
    super.connectedCallback();
  }

  clickHandler() {
    this.remove();
  }

  render() {
    const text = this.keyword.text.split('$').map(item => {
      if (item === '') {
        return html``;
      }
      if (item.includes('/')) {
        const [category, name] = item.split('/');

        const selectedCategory = Categories[category];
        if (!selectedCategory) {
          return html`${item}`;
        }

        const selectedKeyword = selectedCategory.keywords[name];
        if (!selectedKeyword) {
          return html`${item}`;
        }

        return html`<span
          ><lancer-keyword .keyword=${selectedKeyword}></lancer-keyword
        ></span>`;
      }
      return html`${item}`;
    });

    return html`<div>
      <style>
        ${styles}
      </style>
      <div
        class="lancer-card-clickthrough"
        @click=${this.clickHandler}
        @keydown=${this.clickHandler}
      ></div>
      <div class="lancer-card lancer-card-${this.keyword.category}">
        <div class="lancer-card-header">
          <p class="lancer-card-header-name">${this.keyword.name}</p>
          <p class="lancer-card-header-category">${this.keyword.category}</p>
        </div>
        <div class="lancer-card-body">
          <p class="lancer-card-body-text">${text}</p>
          <div class="lancer-card-page">
            <div class="lancer-card-page-triangle"></div>
            <div class="lancer-card-page-line"></div>
            <p class="lancer-card-page-number">${this.keyword.page}</p>
          </div>
          <div class="lancer-card-body-clear"></div>
        </div>
      </div>
    </div>`;
  }
}

window.customElements.define('lancer-card', LancerCard);
