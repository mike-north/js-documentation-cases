import Vehicle from './vehicle';

/**
 * A car is a 4-wheeled vehicle
 * @augments Vehicle
 */
export default class Car extends Vehicle {
  /**
   * Create a new car
   */
  constructor() {
    super(4);
  }
}
