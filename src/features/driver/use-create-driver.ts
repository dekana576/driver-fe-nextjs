import { CreateDriverSchema } from "@/schemas/driver.schemas";
import { createDriver } from "@/services/actions/driver.actions";
import { ICreateDriverRequest } from "@/types/driver.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useCreateDriver = () => {
    const router = useRouter();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (body: ICreateDriverRequest) => {
            return await createDriver(body);
        },
        onSuccess: (res) => {
            formik.resetForm();
            toast.success(res.message);

            queryClient.invalidateQueries({
                queryKey: ["get-driver-list"],
            });

            router.replace("/drivers");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const handleSubmit = async () => {
        mutation.mutate(formik.values);
    };

    const formik = useFormik({
        initialValues: <ICreateDriverRequest> {
            name: "",
            phoneNumber: "",
            status: "AVAILABLE",
            vehicleType: "MOTORCYCLE",
            plateNumber: "",
            rating: 0,
            currentLocation: "",
        },
        validationSchema: CreateDriverSchema,
        onSubmit: handleSubmit,
    });

    return {formik, isLoading: mutation.isPending};
};