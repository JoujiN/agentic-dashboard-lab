export type AccountSummary = {
  planName: string;
  projectsUsed: number;
  projectsLimit: number;
};

export type UsageStreak = {
  days: number;
};

export function getAccountSummary(): AccountSummary {
  return {
    planName: "Starter",
    projectsUsed: 2,
    projectsLimit: 5,
  };
}

export function getUsageStreak(): UsageStreak {
  return {
    days: 7,
  };
}
