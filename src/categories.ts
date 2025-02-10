// we surround other keywords with $ since the $ sign doesn't occur in the core book, then we go $category/keyword$ and filter that out in the keyword component
// might make this an object yet so we can nest stuff but for now this is fine
// probably needed though if we get 100s of keywords
// eslint-disable-next-line no-shadow
import { attacks } from './categories/attacks.js';
import { modifiers } from './categories/modifiers.js';
import { stats } from './categories/stats.js';
import { categories } from './types.js';

export const Categories: categories = {
  attacks,
  modifiers,
  stats,
};
