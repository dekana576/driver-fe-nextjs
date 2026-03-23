import { getDriverById } from "@/services/actions/driver.actions";
import { useQuery } from "@tanstack/react-query";

export const useGetDriverById = async (driverId: string) => {
    return useQuery({
        queryKey: ["get-driver-by-id", driverId],
        queryFn: () => getDriverById(driverId)
    });
};