import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LancerKeyword } from '../src/LancerKeyword.js';
import '../src/lancer-keyword.js';

describe('LancerKeyword', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LancerKeyword>(html`<lancer-keyword></lancer-keyword>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LancerKeyword>(html`<lancer-keyword></lancer-keyword>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LancerKeyword>(html`<lancer-keyword header="attribute header"></lancer-keyword>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LancerKeyword>(html`<lancer-keyword></lancer-keyword>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
