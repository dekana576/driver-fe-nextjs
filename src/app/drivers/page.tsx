import ListDriverPage from "@/components/pages/driver/list-driver-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Driver | OTW TL",
};

export default function Driver() {
  return <ListDriverPage />;
}
