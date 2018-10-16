/**
 * A vehicle-like thing
 */
export interface VehicleLike {
  /**
   * Start driving
   */
  drive(): void;
}

/**
 * A factory for vehicles
 */
export type VehicleFactory<N extends number> = new (
  numWheels: N,
) => VehicleLike;
