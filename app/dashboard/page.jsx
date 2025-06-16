"use client";

import { withAuth } from "@/hoc/withAuth";
import { useEffect } from "react";

function Dashboard({ loading, user }) {
  useEffect(() => console.log(user), [user]);

  if (loading) return (
    <div className="animate-pulse p-4 space-y-2">
      <div className="h-6 bg-neutral-700 rounded w-1/2" />
      <div className="h-4 bg-neutral-700 rounded w-full" />
    </div>
  );

  return (
    <div>
      Dashboard
    </div>
  );
}

export default withAuth(Dashboard);