// tldr category is stuff like attacks
// then a single keyword has a name, which would be for example 'tech attack'
// and then a text which would be the explanation of what a tech attack is
// each keyword also has a page and a category, this is so it can find itself again
// pages follow the following format: single letter for the book it came from, colon, bracket open, page number, bracket close
// e.g. C:[123]
// the book notation can be found in the books enum in enums.ts

export interface keyword {
  name: string;
  text: string;
  page: string;
  colour: string;
  category: string;
}

export interface category {
  keywords: { [key: string]: keyword };
}

export interface categories {
  [key: string]: category;
}
