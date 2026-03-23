"use client";
import CreateDriverForm from "@/components/fragments/form/driver/create-driver-form";
import BackButton from "@/components/ui/button/back-button";

export default function CreateDriverPage() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Create Driver</h2>

      <BackButton />

      <CreateDriverForm />
    </div>
  );
}
