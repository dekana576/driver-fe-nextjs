import { UpdateDriverSchema } from "@/schemas/driver.schemas";
import { IDriver, IUpdateDriverRequest } from "@/types/driver.types";
import { updateDriver } from "@/services/actions/driver.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useUpdateDriver = (driver: IDriver) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (body: IUpdateDriverRequest) => {
            return await updateDriver({
                driverId: driver.id,
                body,
            });
        },
        onSuccess: (res) => {
            formik.resetForm();
            toast.success(res.message);

            queryClient.invalidateQueries({
                queryKey: ["get-driver-list"],
            });

            queryClient.invalidateQueries({
                queryKey: ["get-driver-by-id", driver.id],
            });

            router.replace("/drivers");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const handleSubmit = async () => {
        mutation.mutate(formik.values);
    }

    const formik = useFormik({
        initialValues: <IUpdateDriverRequest>{
            name: driver.name,
            phoneNumber: driver.phoneNumber,
            status: driver.status,
            vehicleType: driver.vehicleType,
            plateNumber: driver.plateNumber,
            rating: driver.rating,
            currentLocation: driver.currentLocation,
        },
        validationSchema: UpdateDriverSchema,
        onSubmit: handleSubmit,
    });

    return {formik, isLoading: mutation.isPending};
    
};