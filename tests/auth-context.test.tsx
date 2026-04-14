import { fireEvent, render, screen } from "@testing-library/react";
import { AuthProvider } from "../src/auth/auth-context";
import { useAuth } from "../src/auth/use-auth";

function AuthStateProbe() {
  const { isAuthenticated, user, signIn, signOut } = useAuth();

  return (
    <section>
      <p>{isAuthenticated ? `Signed in as ${user?.fullName}` : "Signed out"}</p>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
      <button type="button" onClick={signIn}>
        Sign in
      </button>
    </section>
  );
}

test("auth provider updates the mock session when signing out and back in", () => {
  render(
    <AuthProvider>
      <AuthStateProbe />
    </AuthProvider>,
  );

  expect(screen.getByText(/Signed in as George Nangle/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /sign out/i }));
  expect(screen.getByText(/Signed out/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(screen.getByText(/Signed in as George Nangle/i)).toBeInTheDocument();
});
