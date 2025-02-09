import { html, TemplateResult } from "lit";
import "../src/lancer-keyword.js";

export default {
  title: "LancerKeyword",
  component: "lancer-keyword",
  argTypes: {
    header: { control: "text" },
    counter: { control: "number" },
    textColor: { control: "color" },
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

const Template: Story<ArgTypes> = ({
  header = "Hello world",
  counter = 5,
  textColor,
  slot,
}: ArgTypes) => html`
  <lancer-keyword
    style="--lancer-keyword-text-color: ${textColor || "black"}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </lancer-keyword>
`;

export const Regular = Template.bind({});
