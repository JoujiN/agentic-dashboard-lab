import { useAuth } from "../../auth/use-auth";

export function WelcomeWidget() {
  const { user } = useAuth();

  return (
    <section>
      <h2>Welcome</h2>
      <p>{user ? `Signed in as ${user.fullName}` : "Not signed in"}</p>
    </section>
  );
}
