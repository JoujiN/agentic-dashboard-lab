import React from "react";
import { useAuth } from "../../auth/use-auth";

export function DashboardWidgetGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section aria-label="Dashboard widgets">
      <div>{children}</div>
    </section>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { signOut } = useAuth();

  return (
    <main>
      <h1>Dashboard</h1>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
      {children}
    </main>
  );
}
