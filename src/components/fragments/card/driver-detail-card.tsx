import { formatDate } from "@/libs/utils/format-date";
import { IDriver } from "@/types/driver.types";

interface IDriverCardProps {
  driver: IDriver;
}

export default function DriverDetailCard({ driver }: IDriverCardProps) {
  return (
    <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{driver.name}</h3>
          <p className="text-sm text-gray-500">ID: {driver.id}</p>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            driver.status === "AVAILABLE"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {driver.status}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="font-medium">{driver.phoneNumber}</p>
        </div>

        <div>
          <p className="text-gray-500">Vehicle Type</p>
          <p className="font-medium">{driver.vehicleType}</p>
        </div>

        <div>
          <p className="text-gray-500">Plate Number</p>
          <p className="font-medium">{driver.plateNumber}</p>
        </div>

        <div>
          <p className="text-gray-500">Current Location</p>
          <p className="font-medium">{driver.currentLocation}</p>
        </div>

        <div>
          <p className="text-gray-500">Rating</p>
          <p className="font-medium">{driver.rating} ⭐</p>
        </div>
      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: {formatDate(driver.createdAt)}</p>
        <p>Updated At: {formatDate(driver.updatedAt)}</p>
      </div>
    </div>
  );
}
