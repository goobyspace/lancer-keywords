import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LancerKeyword } from '../src/components/keyword/LancerKeyword.js';
import '../src/lancer-keyword.js';

describe('LancerKeyword', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<LancerKeyword>(
      html`<lancer-keyword></lancer-keyword>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
