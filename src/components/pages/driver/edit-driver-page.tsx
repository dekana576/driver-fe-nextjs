"use client";
import EditDriverForm from "@/components/fragments/form/driver/edit-driver-form";
import BackButton from "@/components/ui/button/back-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetDriverById } from "@/features/driver/use-get-driver-by-id";
import { useParams } from "next/navigation";

export default function EditDriverPage() {
  const { driverId } = useParams<{ driverId: string }>();

  const { data, isLoading, error } = useGetDriverById(driverId);

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Edit Driver</h2>

      <BackButton />

      {isLoading && (
        <div className="text-center">
          <SpinnerLoading />
        </div>
      )}

      {error && (
        <div className="text-center">
          <ErrorText message={error.message} />
        </div>
      )}

      {!isLoading && !error && data?.data && (
        <EditDriverForm driver={data.data} />
      )}
    </div>
  );
}
