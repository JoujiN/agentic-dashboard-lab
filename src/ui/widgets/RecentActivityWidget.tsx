import { getRecentActivity } from "../../api/dashboard";

export function RecentActivityWidget() {
  const activity = getRecentActivity();

  return (
    <section>
      <h2>Recent Activity</h2>
      <ul>
        {activity.map((item) => (
          <li key={item.id}>{item.summary}</li>
        ))}
      </ul>
    </section>
  );
}
