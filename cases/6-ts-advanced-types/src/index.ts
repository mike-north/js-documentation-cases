/// <reference types="lodash"/>

import { Bike } from './cycles';

/**
 * Add two numbers together
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

/**
 * A class that helps with vehicle maintenance
 */
class VehicleUtils {
  /**
   * Static things
   */
  public static description: 'Utilities for vehicles';
  /**
   * Members
   */
  public memberFn() {
    return '';
  }
}

// tslint:disable-next-line:no-namespace
namespace VehicleUtils {
  /**
   * Create a new bike
   */
  export function createBike(): Bike {
    return new Bike();
  }
}

/**
 * The first bike
 */
export const firstBike = VehicleUtils.createBike();

/**
 * Create a promise that resolves after a period of time has elapsed
 * @param n number of milliseconds to wait
 */
function timeout(n: number) {
  return new Promise<void>(resolve => setTimeout(resolve, n));
}

export const bikeNow = timeout(0).then(() => new Bike());
// Get a bike soon
export const bikeSoon = timeout(3000).then(() => new Bike());
/**
 * Get a bike later
 */
export const bikeLater = timeout(10000).then(() => new Bike());
