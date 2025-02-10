import { html, LitElement, render, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
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

  cardRef: Ref<LitElement> = createRef();

  clickHandler() {
    const card: TemplateResult = html`<lancer-card
      .keyword=${this.keyword}
    ></lancer-card>`;
    render(card, document.body);
  }

  render() {
    // todo: make rendering work after you click it away once
    // we can also only have one card total with this method which is cringe
    // set position to mouse when card spawns in

    return html`<span
      class="lancer-keyword lancer-keyword-${this.keyword.category}"
      @click=${this.clickHandler}
      @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.clickHandler()}
      tabindex="0"
      >${this.keyword.name}</span
    >`;
  }
}

window.customElements.define('lancer-keyword', LancerKeyword);
