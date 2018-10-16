/**
 * Add two numbers together
 * @param {number} a the first number
 * @param {string} b the second number
 * @returns the sum of `a` and `b`
 *
 * @example
 * ```js
 * add(3, 4); // 7
 * ```
 */
export function add(a, b) {
  return a + b;
}

export const SECRET_STRING = 'shhhhh!';

export { default as Car } from './car';
export { Unicycle, Bike } from './cycles';
