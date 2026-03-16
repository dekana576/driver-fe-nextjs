"use client";
import DriverCard from "@/components/fragments/card/driver-card";
import BackButton from "@/components/ui/button/back-button";
import Button from "@/components/ui/button/button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetDriverList } from "@/features/driver/use-get-driver-list";
import Link from "next/link";
import { useState } from "react";

export default function ListDriverPage() {
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, error } = useGetDriverList(search);

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List Driver</h2>

      <BackButton />

      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          name="name"
          placeholder="Search driver..."
          className="p-1 text-sm border rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href="/drivers/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create Driver
          </Button>
        </Link>
      </div>

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

      {!isLoading && !error && data?.data?.length === 0 && (
        <div className="text-center">
          <ErrorText message="Driver not found" />
        </div>
      )}

      {!isLoading && !error && data?.data && (
        <div className="space-y-2 w-full">
          {data.data.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      )}
    </div>
  );
}
