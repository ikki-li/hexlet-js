#!/usr/bin/env node
const capitalize = (string) => {
  if (string.length === 0) {
    return '';
  }
  const firstChar = string[0].toUpperCase();
  const restSubstring = string.slice(1);
  return `${firstChar}${restSubstring}`;
};

export default capitalize;
