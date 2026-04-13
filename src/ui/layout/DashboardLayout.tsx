import React from "react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Dashboard</h1>
      <div>{children}</div>
    </main>
  );
}
