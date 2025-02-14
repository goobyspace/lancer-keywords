# \<lancer-keyword>

Web component that lets you see info cards for keywords from the Lancer TTRPG

## Installation

```bash
npm i lancer-keyword
```

## Usage

```html
<script type="module">
  import { Categories } from 'lancer-keyword';
</script>

<lancer-keyword .keyword={Categories.attacks.keywords.tech_attack}></lancer-keyword>
```

### Slots
To use an alternative keyword, simply type it in the HTML slot.
```html
<script type="module">
  import { Categories } from 'lancer-keyword';
</script>

<lancer-keyword .keyword={Categories.attacks.keywords.tech_attack}>Alternative Keyword</lancer-keyword>
```

### Cannot use objects?
If you cannot use JS objects within your HTML, you can type in the keyword category & keyword manually, seperated by a '/' into the 'alt' attribute.
```html
<script type="module">
  import from 'lancer-keyword';
</script>

<lancer-keyword alt="attacks/tech_attack"></lancer-keyword>
```

### Frameworks

To use with frameworks like React, you might need adapters for web components like [@lit/react](https://github.com/lit/lit/tree/main/packages/react), or you might need to add definitions or otherwise edit configs. Check with your framework's documentation.

## Local Development with `web-dev-server`

First, make sure to install all the node modules:

```bash
npm install
```

Once you've done so, open two terminals, and run each of these commands seperately:

```bash
npm run watch
```
```bash
npm run dev
```

To run a local development server that serves the index.html file as an entry for the project.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

This repository was created via [open-wc](https://github.com/open-wc/open-wc).

"Lancer-keywords" is not an official Lancer product; it is a third party work, and is not affiliated with Massif Press. "Lancer-keywords" is published via the _Lancer_ Third Party License.

_Lancer_ is copyright Massif Press