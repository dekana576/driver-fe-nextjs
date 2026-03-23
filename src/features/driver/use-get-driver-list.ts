import { getDriverList } from "@/services/actions/driver.actions"
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

export const useGetDriverList = async (search: string) => {
    const [debouncedSearch] = useDebounce(search, 500);

    return useQuery({
        queryKey: ["get-driver-list", debouncedSearch],
        queryFn: () => getDriverList(debouncedSearch),
        refetchOnMount: true,
    });
};