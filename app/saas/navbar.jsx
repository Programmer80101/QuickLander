"use client";

import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./button";

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="fixed z-100 top-0 left-0 w-full p-2 flex flex-row justify-between bg-neutral-300/25 backdrop-blur-sm">
      <Button
        className="grid items-center text-xl h-full py-1.5"
        variant="ghost"
        size="default"
      >
        SaaS
      </Button>
      <Button
        className="size-10 rounded-full"
        variant="ghost"
        size="icon"
      >
        <UserRound className="size-5" />
      </Button>
    </div>
  )
}