import React from "react";
import { useAuth } from "../../auth/use-auth";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, signIn } = useAuth();

  if (!isAuthenticated) {
    return (
      <section>
        <p>Please sign in to view your dashboard.</p>
        <button type="button" onClick={signIn}>
          Sign in
        </button>
      </section>
    );
  }

  return <>{children}</>;
}
