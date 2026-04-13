import React, { createContext, useMemo, useState } from "react";
import type { AuthContextValue, AuthSession } from "./auth-types";
import { mockSignedInSession } from "./mock-session";

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession>(mockSignedInSession);

  const value = useMemo<AuthContextValue>(() => {
    const user = session?.user ?? null;

    return {
      session,
      user,
      isAuthenticated: !!user,
      signIn: () => setSession(mockSignedInSession),
      signOut: () => setSession(null),
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
