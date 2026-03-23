import * as yup from "yup";

export const CreateDriverSchema = yup.object({
  name: yup.string().required("Name is Required"),

  phoneNumber: yup
    .number()
    .test(
      "is-number",
      "Phone Number must be a number",
      (value) => typeof value === "number",
    )
    .required("Phone Number is Required"),

  status: yup
    .mixed<"AVAILABLE" | "ON_TRIP" | "OFFLINE">()
    .oneOf(["AVAILABLE", "ON_TRIP", "OFFLINE"], "Invalid Status")
    .required("Status is Required"),

  vehicleType: yup
    .mixed<"MOTORCYCLE" | "CAR">()
    .oneOf(["MOTORCYCLE", "CAR"], "Invalid Vehicle Type")
    .required("Vehicle Type is Required"),

  plateNumber: yup.string().required("Plate Number is Required"),

  rating: yup
    .number()
    .typeError("Rating must be a Number")
    .required("Rating is Required")
    .min(1, "Rating must be atleast 1")
    .max(5, "Rating cannot more than 5"),

    currentLocation: yup.string().required("Current Location is Required")
});

export const UpdateDriverSchema = CreateDriverSchema;
