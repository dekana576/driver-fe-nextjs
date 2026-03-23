export type TDriverStatus = "AVAILABLE" | "ON_TRIP" | "OFFLINE";

export type TVehicleType = "MOTORCYCLE" | "CAR";

export interface IDriver {
  id: string;
  name: string;
  phoneNumber: string;
  status: TDriverStatus;
  vehicleType: TVehicleType;
  plateNumber: string;
  rating: number;
  currentLocation: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateDriverRequest {
  name: string;
  phoneNumber: string;
  status: TDriverStatus;
  vehicleType: TVehicleType;
  plateNumber: string;
  rating: number;
  currentLocation: string;
}

export interface IUpdateDriverRequest extends ICreateDriverRequest {}
