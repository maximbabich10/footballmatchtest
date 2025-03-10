export const VALID_STATUS = [
  "Finished",
  "Ongoing",
  "Scheduled",
  "Live",
  "Match preparing",
] as const;
export type StatusType = (typeof VALID_STATUS)[number];
