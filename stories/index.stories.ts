import { html, TemplateResult } from 'lit';
import '../src/index.js';
import { Categories } from '../src/enums.js';

export default {
  title: 'LancerKeyword',
  component: 'lancer-keyword',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = () => html`
  <lancer-keyword .keyword=${Categories.attacks.keywords.tech_attack}>
  </lancer-keyword>
`;

export const Regular = Template.bind({});
