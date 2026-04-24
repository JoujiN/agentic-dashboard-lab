import { getAccountSummary } from "../../api/dashboard";

export function AccountSummaryWidget() {
  const summary = getAccountSummary();

  return (
    <section>
      <h2>Your Plan</h2>
      <p>Plan: {summary.planName}</p>
      <p>
        Projects used: {summary.projectsUsed} of {summary.projectsLimit}
      </p>
    </section>
  );
}
