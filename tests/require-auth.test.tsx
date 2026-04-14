import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../src/auth/auth-context";
import { RequireAuth } from "../src/ui/auth/RequireAuth";

test("shows a sign-in call to action when user is not authenticated", () => {
  const signIn = vi.fn();

  render(
    <AuthContext.Provider
      value={{
        session: null,
        user: null,
        isAuthenticated: false,
        signIn,
        signOut: () => {},
      }}
    >
      <RequireAuth>
        <div>Secret dashboard</div>
      </RequireAuth>
    </AuthContext.Provider>
  );

  expect(screen.getByText(/Please sign in/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(signIn).toHaveBeenCalledTimes(1);
});
