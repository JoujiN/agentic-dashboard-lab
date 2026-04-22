import { getPlanStatus } from "../../api/dashboard";

export function PlanStatusWidget() {
  const planStatus = getPlanStatus();
  const isAtRisk = planStatus.status.toLowerCase() === "at risk";
  const statusGuidance = isAtRisk
    ? "You are falling behind right now. Pay attention to the recent usage signals below."
    : "You are doing well right now. Keep an eye on the recent usage signals below.";

  return (
    <section>
      <h2>Plan Status</h2>
      <p>Current status: {planStatus.status}</p>
      <p>{statusGuidance}</p>
    </section>
  );
}
