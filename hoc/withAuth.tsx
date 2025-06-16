"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

export function withAuth<T>(WrappedComponent: React.ComponentType<T>) {
  const AuthComponent = (props: T & { skeleton?: ReactNode }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) router.replace("/login");
    }, [loading, user, router]);

    return (
      <WrappedComponent
        {...props}
        loading={loading}
        user={user}
      />
    );
  };

  AuthComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthComponent;
}
