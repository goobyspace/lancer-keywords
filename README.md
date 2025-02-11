# \<lancer-keyword>

Web component that lets you see info cards for keywords from the Lancer TTRPG

## Installation

```bash
npm i lancer-keyword
```

## Usage

```html
<script type="module">
  import 'lancer-keyword/lancer-keyword.js';
</script>

<lancer-keyword></lancer-keyword>
```

## Local Development with `web-dev-server`

First, make sure to install all the node modules:

```bash
npm install
```

Once you've done so, open two terminals, and run each command seperately:

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

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

This repository was created via [open-wc](https://github.com/open-wc/open-wc).

Lancer-keywords is not an official Lancer product; it is a third party work, and is not affiliated with Massif Press. Lancer-keywords is published via the Lancer Third Party License.”

Lancer is copyright Massif Press