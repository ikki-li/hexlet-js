#!/usr/bin/env node
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('BOOM');
}

if (capitalize('') !== '') {
  throw new Error('BOOM');
}

console.log('Completed!');
