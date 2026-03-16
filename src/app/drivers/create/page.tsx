import CreateDriverPage from "@/components/pages/driver/create-driver-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Driver | OTW TL",
};

export default function CreateDriver() {
  return <CreateDriverPage />;
}
