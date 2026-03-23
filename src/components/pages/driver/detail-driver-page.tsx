"use client";
import DriverDetailCard from "@/components/fragments/card/driver-detail-card";
import BackButton from "@/components/ui/button/back-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetDriverById } from "@/features/driver/use-get-driver-by-id";
import { useParams } from "next/navigation";

export default function DetailDriverPage() {
  const { driverId } = useParams<{ driverId: string }>();

  const { data, isLoading, error } = useGetDriverById(driverId);

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Detail Driver</h2>

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
        <DriverDetailCard driver={data.data} />
      )}
    </div>
  );
}
