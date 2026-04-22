import { getPlanRecommendation, getPlanStatus } from "../../api/dashboard";

export function PlanStatusWidget() {
  const planStatus = getPlanStatus();
  const recommendation = getPlanRecommendation();

  return (
    <section>
      <h2>Plan Status</h2>
      <p>Current status: {planStatus.status}</p>
      <p>{recommendation}</p>
    </section>
  );
}
