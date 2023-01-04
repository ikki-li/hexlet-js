import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('kitty'), 'Kitty');
assert.equal(capitalize(''), '');
console.log('COMPLETED!');
