const UPPERCASE = /([A-Z])/g;

export function camelToKebab (string) {
  return string.replace(UPPERCASE, match => `-${match[0].toLowerCase()}`);
}
