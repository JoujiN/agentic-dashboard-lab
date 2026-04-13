import { getAccountSummary } from "../../api/dashboard";

export function AccountSummaryWidget() {
  const summary = getAccountSummary();

  return (
    <section>
      <h2>Account summary</h2>
      <p>Plan: {summary.planName}</p>
      <p>
        Projects: {summary.projectsUsed} / {summary.projectsLimit}
      </p>
    </section>
  );
}
