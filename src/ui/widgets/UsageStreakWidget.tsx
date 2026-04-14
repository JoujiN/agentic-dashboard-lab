import { getUsageStreak } from "../../api/dashboard";

export function UsageStreakWidget() {
  const streak = getUsageStreak();

  return (
    <section>
      <h2>Usage streak</h2>
      <p>Current streak: {streak.days} days</p>
    </section>
  );
}
