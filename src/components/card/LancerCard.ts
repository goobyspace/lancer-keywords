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

  @property({ type: Number }) x = 0;

  @property({ type: Number }) y = 0;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!document.body.contains(this)) {
      document.body.appendChild(this);
    }
  }

  firstUpdated() {
    this.constrainPosition();
  }

  constrainPosition() {
    const card = this.querySelector('.lancer-card');
    const cardWidth = card?.clientWidth || 0;
    const cardHeight = card?.clientHeight || 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (this.x + cardWidth / 2 > viewportWidth) {
      this.x = viewportWidth - cardWidth;
    } else if (this.x - cardWidth / 2 < 0) {
      this.x = 0;
    } else {
      this.x -= cardWidth / 2;
    }
    if (this.y + cardHeight > viewportHeight) {
      this.y = viewportHeight - cardHeight;
    }

    if (this.y < 0) {
      this.y = 0;
    }
  }

  // this function deletes the current element when the lancer-card-clickthrough is clicked
  // it then loops through every sibling card and if it is not clicked, it clicks it
  // unless the mouse is inside the main card
  // this is so you can close the card by clicking outside of it without closing the card your cursor is on
  propagateClick(event: MouseEvent) {
    event.stopPropagation();
    const parent = this.parentElement;

    if (parent) {
      const siblings = parent.querySelectorAll('.lancer-card-clickthrough');
      siblings.forEach(sibling => {
        if (sibling !== this && !sibling.classList.contains('clicked')) {
          const card = sibling.nextElementSibling as HTMLElement;
          const rect = card.getBoundingClientRect();
          const x = event.clientX;
          const y = event.clientY;
          const l = rect.left;
          const w = l + rect.width;
          const t = rect.top;
          const h = t + rect.height;
          if (x < l || x > w || y < t || y > h) {
            sibling.classList.add('clicked');
            sibling.dispatchEvent(
              new MouseEvent('click', {
                bubbles: true,
                composed: true,
                clientX: x,
                clientY: y,
              }),
            );
            sibling.classList.remove('clicked');
          }
        }
      });
    }
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

    return html`
      <div>
        <style>
          ${styles}
        </style>
        <div
          class="lancer-card-clickthrough"
          @click=${this.propagateClick}
          @keydown=${this.propagateClick}
        ></div>
        <div
          class="lancer-card lancer-card-${this.keyword.category}"
          style="top: ${this.y}px; left: ${this.x}px;"
        >
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
      </div>
    `;
  }
}

window.customElements.define('lancer-card', LancerCard);
