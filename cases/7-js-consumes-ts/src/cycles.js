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
export class Unicycle extends Vehicle {
  /**
   * Create a new unicycle
   * @param {string} name
   */
  constructor(name) {
    super(1);
    this.name = name;
  }
}
