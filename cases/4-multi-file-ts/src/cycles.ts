import Vehicle from './vehicle';

/**
 * A 2-wheeled vehicle
 * @inheritdoc
 */
export class Bike extends Vehicle {
  constructor() {
    super(2);
  }
}

/** A one-wheeled vehicle */
// tslint:disable-next-line:max-classes-per-file
export class Unicycle extends Vehicle {
  constructor() {
    super(1);
  }
}
