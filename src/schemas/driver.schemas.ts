import * as yup from "yup";

export const CreateDriverSchema = yup.object({
  name: yup.string().required("Name is required"),

  phoneNumber: yup
    .number()
    .test(
      "is-number",
      "Phone number must be a number",
      (value) => typeof value === "number",
    )
    .required("Phone number is required"),

  status: yup
    .mixed<"AVAILABLE" | "ON_TRIP" | "OFFLINE">()
    .oneOf(["AVAILABLE", "ON_TRIP", "OFFLINE"], "Invalid status")
    .required("Status is required"),

  vehicleType: yup
    .mixed<"MOTORCYCLE" | "CAR">()
    .oneOf(["MOTORCYCLE", "CAR"], "Invalid vehicle type")
    .required("Vehicle type is required"),

  plateNumber: yup.string().required("Plate number is required"),

  rating: yup
    .number()
    .typeError("Rating must be a number")
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot be more than 5"),

  currentLocation: yup.string().required("Current location is required"),
});

export const UpdateDriverSchema = CreateDriverSchema;
