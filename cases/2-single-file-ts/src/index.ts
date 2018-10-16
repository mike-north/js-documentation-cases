/**
 * Add two numbers
 * @param a a number
 * @param b a number
 *
 * @public
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

/**
 * A vehicle is a thing that goes places
 */
class Vehicle {
  /**
   * Create a new vehicle
   * @param {number} numWheels Number of wheels
   */
  constructor(protected numWheels: number) {}
  /**
   * Drive the vehicle
   * @returns {string}
   */
  public drive() {
    return `Driving with all ${this.numWheels} wheels`;
  }
}

/**
 * A car is a 4-wheeled vehicle
 */
// tslint:disable-next-line:max-classes-per-file
export class Car extends Vehicle {
  /**
   * Create a new car
   */
  constructor() {
    super(4);
  }
}

/**
 * A bike is a 2-wheeled vehicle
 */
// tslint:disable-next-line:max-classes-per-file
export class Bike extends Vehicle {
  constructor() {
    super(2);
  }
}

/**
 * A Unicycle is a 1-wheeled vehicle
 */
// tslint:disable-next-line:max-classes-per-file
export class Unicycle extends Vehicle {
  constructor() {
    super(1);
  }
}
