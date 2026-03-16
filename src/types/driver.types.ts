export type TDriverStatus = "AVAILABLE" | "ON_TRIP" | "OFFLINE";

export type TVehicleType = "MOTORCYCLE" | "CAR";

export interface IDriver {
    id: String,
    name: String,
    phoneNumber: String,
    status: TDriverStatus,
    vehicleType: TVehicleType,
    plateNumber: String,
    rating: Number,
    currentLocaction: String,
    createdAt: String,
    updatedAt: String
}

export interface ICreateDriverRequest {
    name: String,
    phoneNumber: String,
    status: TDriverStatus,
    vehicleType: TVehicleType,
    plateNumber: String,
    rating: Number,
    currentLocation: String
}

export interface IUpdateDriverRequest extends ICreateDriverRequest {}