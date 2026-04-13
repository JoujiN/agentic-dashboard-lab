import { render, screen } from "@testing-library/react";
import { AuthContext } from "../src/auth/auth-context";
import { RequireAuth } from "../src/ui/auth/RequireAuth";

test("shows fallback message when user is not authenticated", () => {
  render(
    <AuthContext.Provider
      value={{
        session: null,
        user: null,
        isAuthenticated: false,
        signIn: () => {},
        signOut: () => {},
      }}
    >
      <RequireAuth>
        <div>Secret dashboard</div>
      </RequireAuth>
    </AuthContext.Provider>
  );

  expect(screen.getByText(/Please sign in/i)).toBeInTheDocument();
});
