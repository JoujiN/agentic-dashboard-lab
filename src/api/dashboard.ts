import dashboardMetrics from "../../references/dashboard-metrics.json";

export type AccountSummary = {
  planName: string;
  projectsUsed: number;
  projectsLimit: number;
};

export type WelcomeProfile = {
  fullName: string;
};

export type UsageStreak = {
  days: number;
};

export type RecentActivityItem = {
  id: string;
  summary: string;
};

export type PlanStatus = {
  status: string;
};

export function getPlanRecommendation(): string {
  const isAtRisk = dashboardMetrics.planStatus.toLowerCase() === "at risk";
  const hasLowStreak = dashboardMetrics.usageStreakDays < 3;

  if (isAtRisk && hasLowStreak) {
    return "Next step: you can start with one small action today and rebuild consistency this week.";
  }

  if (isAtRisk) {
    return "Next step: you can start with one small action this week to get back on track.";
  }

  if (hasLowStreak) {
    return "Keep going: you can start with one small action today to rebuild consistency.";
  }

  return `Keep going: ${dashboardMetrics.recommendation.replace(/^You should /i, "").replace(/\.$/, ".")}`;
}

export function getAccountSummary(): AccountSummary {
  return {
    planName: "Starter",
    projectsUsed: 2,
    projectsLimit: 5,
  };
}

export function getWelcomeProfile(): WelcomeProfile {
  return {
    fullName: "George Nangle",
  };
}

export function getUsageStreak(): UsageStreak {
  return {
    days: dashboardMetrics.usageStreakDays,
  };
}

export function getRecentActivity(): RecentActivityItem[] {
  return dashboardMetrics.recentActivity.map((summary, index) => ({
    id: `activity-${index + 1}`,
    summary,
  }));
}

export function getPlanStatus(): PlanStatus {
  return {
    status: dashboardMetrics.planStatus,
  };
}
