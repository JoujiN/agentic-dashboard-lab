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

function toActivityReason(summary: string): string {
  if (/^Missed /i.test(summary)) {
    return `you ${summary.charAt(0).toLowerCase()}${summary.slice(1)}`;
  }

  if (/^No new projects created$/i.test(summary)) {
    return "you have not created a new project recently";
  }

  const lastLoginMatch = summary.match(/^Last login (.+)$/i);

  if (lastLoginMatch) {
    return `your last login was ${lastLoginMatch[1]}`;
  }

  return summary.charAt(0).toLowerCase() + summary.slice(1);
}

export function getPlanRecommendation(): string {
  const isAtRisk = dashboardMetrics.planStatus.toLowerCase() === "at risk";
  const hasLowStreak = dashboardMetrics.usageStreakDays < 3;
  const activityReasons = dashboardMetrics.recentActivity
    .slice(0, 2)
    .map(toActivityReason);
  const activityContext =
    activityReasons.length === 2
      ? `${activityReasons[0]} and ${activityReasons[1]}`
      : activityReasons[0];

  if (isAtRisk && hasLowStreak && activityContext) {
    return `Next step: you can start with one small action today because ${activityContext}.`;
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
