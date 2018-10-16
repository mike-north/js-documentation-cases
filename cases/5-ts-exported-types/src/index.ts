import { Bike } from './cycles';

/**
 * Add Two numbers together
 * @param a first number
 * @param b second number
 */
export function add(a: number, b: number): number;
export function add(a: string, b: string): string;
export function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return '' + a + b;
  }
}

export const SECRET_STRING = 'shhhhh!';

export { default as Car } from './car';
export { Unicycle, Bike } from './cycles';
export { VehicleLike } from './types';
