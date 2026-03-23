"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useCreateDriver } from "@/features/driver/use-create-driver";
import {
  DRIVER_STATUS_OPTIONS,
  VEHICLE_TYPE_OPTIONS,
} from "@/libs/constants/options";

export default function CreateDriverForm() {
  const { formik, isLoading } = useCreateDriver();

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter driver name..."
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorText message={formik.errors.name} />
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter driver phone number..."
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <ErrorText message={formik.errors.phoneNumber} />
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Status</label>
        <select
          name="status"
          onChange={formik.handleChange}
          value={formik.values.status}
          className="w-full mt-1 p-1.5 border rounded"
        >
          {DRIVER_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">Vehicle Type</label>
        <select
          name="vehicleType"
          onChange={formik.handleChange}
          value={formik.values.vehicleType}
          className="w-full mt-1 p-1.5 border rounded"
        >
          {VEHICLE_TYPE_OPTIONS.map((vehicleType) => (
            <option key={vehicleType} value={vehicleType}>
              {vehicleType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">Plate Number</label>
        <input
          type="text"
          name="plateNumber"
          onChange={formik.handleChange}
          value={formik.values.plateNumber}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter driver plate number..."
        />
        {formik.touched.plateNumber && formik.errors.plateNumber && (
          <ErrorText message={formik.errors.plateNumber} />
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Rating</label>
        <input
          type="number"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter driver rating..."
        />
        {formik.touched.rating && formik.errors.rating && (
          <ErrorText message={formik.errors.rating} />
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Current Location</label>
        <input
          type="text"
          name="currentLocation"
          onChange={formik.handleChange}
          value={formik.values.currentLocation}
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter driver current location..."
        />
        {formik.touched.currentLocation && formik.errors.currentLocation && (
          <ErrorText message={formik.errors.currentLocation} />
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Create..." : "Create"}
        </Button>
      </div>
    </form>
  );
}
