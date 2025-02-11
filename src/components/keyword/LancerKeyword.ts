import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { keyword } from '../../types.js';
import { styles } from './styles.js';
import '../card/LancerCard.js';

export class LancerKeyword extends LitElement {
  static styles = styles;

  @property({ type: Object }) keyword: keyword = {
    name: '',
    text: '',
    page: '',
    category: '',
  };

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
        >${this.keyword.name}</span
      >${this.cards.map(card => card)}`;
  }
}

window.customElements.define('lancer-keyword', LancerKeyword);
