import React from "react";
import { useAuth } from "../../auth/use-auth";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { signOut } = useAuth();

  return (
    <main>
      <h1>Dashboard</h1>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
      <div>{children}</div>
    </main>
  );
}
