import { deleteDriver } from "@/services/actions/driver.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (driverId: string) => {
      return await deleteDriver(driverId);
    },
    onSuccess: (res) => {
      toast.success(res.message);

      queryClient.invalidateQueries({
        queryKey: ["get-driver-list"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = async (driverId: string) => {
    mutation.mutate(driverId);
  };

  return { handleDelete, isLoading: mutation.isPending };
};
