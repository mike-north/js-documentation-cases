import { VehicleLike, VehicleFactory } from './types';

/**
 * A vehicle is a thing that goes places
 */
export default class Vehicle implements VehicleLike {
  /**
   * Create a new vehicle
   * @param {number} numWheels Number of wheels
   */
  constructor(protected numWheels: number) {}
  /**
   * Drive the vehicle
   * @returns {string}
   */
  drive() {
    return `Driving with all ${this.numWheels} wheels`;
  }
}

export const Factory4: VehicleFactory<4> = Vehicle;
