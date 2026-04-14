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
    days: 7,
  };
}

export function getRecentActivity(): RecentActivityItem[] {
  return [
    { id: "activity-1", summary: "Created the Q2 planning board" },
    { id: "activity-2", summary: "Invited Maya to the workspace" },
    { id: "activity-3", summary: "Reviewed the onboarding checklist" },
  ];
}

export function getPlanStatus(): PlanStatus {
  return {
    status: "On track",
  };
}
