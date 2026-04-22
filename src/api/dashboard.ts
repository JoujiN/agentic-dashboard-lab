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
