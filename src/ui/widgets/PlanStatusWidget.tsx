import { getPlanStatus } from "../../api/dashboard";

export function PlanStatusWidget() {
  const planStatus = getPlanStatus();

  return (
    <section>
      <h2>Plan Status</h2>
      <p>Current status: {planStatus.status}</p>
    </section>
  );
}
