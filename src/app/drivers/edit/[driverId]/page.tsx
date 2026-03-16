import EditDriverPage from "@/components/pages/driver/edit-driver-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Driver | OTW TL",
};

export default function EditDriver() {
  return <EditDriverPage />;
}
