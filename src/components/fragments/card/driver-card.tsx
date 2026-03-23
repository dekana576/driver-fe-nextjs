import Button from "@/components/ui/button/button";
import { useDeleteDriver } from "@/features/driver/use-delete-driver";
import { IDriver } from "@/types/driver.types";
import Link from "next/link";

interface IDriverCardProps {
  driver: IDriver;
}

export default function DriverCard({ driver }: IDriverCardProps) {
  const { handleDelete, isLoading } = useDeleteDriver();

  return (
    <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">{driver.name}</p>
        <p className="text-sm">Phone: {driver.phoneNumber}</p>
        <p className="text-sm">Plate: {driver.plateNumber}</p>
        <p className="text-sm">Status: {driver.status}</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/drivers/${driver.id}`}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/drivers/edit/${driver.id}`}>
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          disabled={isLoading}
          onClick={() => confirm("Are you sure?") && handleDelete(driver.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
