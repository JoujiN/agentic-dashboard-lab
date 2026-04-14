import { getWelcomeProfile } from "../../api/dashboard";

export function WelcomeWidget() {
  const profile = getWelcomeProfile();

  return (
    <section>
      <h2>Welcome</h2>
      <p>Signed in as {profile.fullName}</p>
    </section>
  );
}
