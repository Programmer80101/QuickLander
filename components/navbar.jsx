"use client";

import { UserRound } from "lucide-react";

import { usePathname } from "next/navigation";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import config from "@/config";

export default function Navbar() {
  const path = usePathname();

  if (config.hideNavbarPaths.includes(path)) return <></>;

  return (
    <div className="fixed top-0 left-0 w-full p-2 flex flex-row justify-between bg-neutral-300/25 backdrop-blur-lg">
      <SidebarTrigger />
      <Button
        className="grid items-center text-xl h-full py-1.5"
        variant="ghost"
        size="default"
      >
        {config.name}
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