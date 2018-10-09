import Vehicle from './vehicle';

/**
 * A car is a 4-wheeled vehicle
 */
export default class Car extends Vehicle {
  /**
   * Create a new car
   */
  constructor() {
    super(4);
  }
}
