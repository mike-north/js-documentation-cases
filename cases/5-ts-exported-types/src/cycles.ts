import Vehicle from './vehicle';

/**
 * A bike is a 2-wheeled vehicle
 */
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
