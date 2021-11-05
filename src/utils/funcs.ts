export const occurrenceCount = (str: string, search: string): number => {
  return str.toLowerCase().split(search.toLowerCase()).length - 1;
}

export const occurrenceHighlightText = (str: string, search: string): string => {
  const regEx = new RegExp(search, 'ig');
  return str.replaceAll(regEx, '<span class="highlight-text">$&</span>');
}

export const guid = (): string => {
  return Math.floor((1 + Math.random()) * 0x100000000).toString(16).substring(1);
}