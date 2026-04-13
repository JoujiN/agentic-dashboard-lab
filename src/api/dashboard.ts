export type AccountSummary = {
  planName: string;
  projectsUsed: number;
  projectsLimit: number;
};

export function getAccountSummary(): AccountSummary {
  return {
    planName: "Starter",
    projectsUsed: 2,
    projectsLimit: 5,
  };
}
