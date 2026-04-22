import { getPlanStatus } from "../../api/dashboard";

export function PlanStatusWidget() {
  const planStatus = getPlanStatus();
  const isAtRisk = planStatus.status.toLowerCase() === "at risk";
  const statusGuidance = isAtRisk
    ? "You are falling behind right now. Review your recent signals."
    : "You are doing well right now. Review your recent signals.";

  return (
    <section>
      <h2>Plan Status</h2>
      <p>Current status: {planStatus.status}</p>
      <p>{statusGuidance}</p>
    </section>
  );
}
