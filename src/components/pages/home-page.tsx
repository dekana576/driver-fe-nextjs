"use client";
import Link from "next/link";
import Button from "../ui/button/button";

export default function HomePage() {
  return (
    <div className="space-y-4 w-full text-center">
      <h2 className="font-bold text-lg">Hello User, Welcome!</h2>
      <Link href="/drivers">
        <Button className="bg-blue-500 w-fit h-fit text-end">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
