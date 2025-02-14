import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { keyword } from '../../types.js';
import { styles } from './styles.js';
import '../card/LancerCard.js';
import { Categories } from '../../categories.js';

export class LancerKeyword extends LitElement {
  static styles = styles;

  @property({ type: Object }) keyword: keyword = {
    name: '',
    text: '',
    page: '',
    category: '',
  };

  @property({ type: String }) alt = '';

  connectedCallback() {
    super.connectedCallback();
    if (this.alt.length > 0) {
      if (this.alt.includes('/')) {
        const [category, name] = this.alt.split('/');

        const selectedCategory = Categories[category];
        if (selectedCategory) {
          const selectedKeyword = selectedCategory.keywords[name];
          if (selectedKeyword) {
            this.keyword = selectedKeyword;
          }
        }
      }
    }
  }

  cards: TemplateResult[] = [];

  clickHandler(event: MouseEvent) {
    this.cards.push(
      html`<lancer-card
        .keyword=${this.keyword}
        x=${event.x}
        y=${event.y}
      ></lancer-card>`,
    );
    this.requestUpdate();
  }

  render() {
    return html`<span
        class="lancer-keyword lancer-keyword-${this.keyword.category}"
        @click=${this.clickHandler}
        @keydown=${(e: KeyboardEvent) =>
          e.key === 'Enter' && this.clickHandler(new MouseEvent('click'))}
        tabindex="0"
        ><slot>${this.keyword.name}</slot></span
      >${this.cards.map(card => card)}`;
  }
}

window.customElements.define('lancer-keyword', LancerKeyword);
