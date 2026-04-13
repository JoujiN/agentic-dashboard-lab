import React from "react";
import { useAuth } from "../../auth/use-auth";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p>Please sign in to view your dashboard.</p>;
  }

  return <>{children}</>;
}
