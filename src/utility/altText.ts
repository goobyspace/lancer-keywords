export function altText(original: string, alt: string) {
  let matched = 0;
  return original.replace(/\$/g, match => {
    matched += 1;
    return matched === 2 ? `#${alt}$` : match;
  });
}
