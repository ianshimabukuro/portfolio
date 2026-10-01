export type ActivityDay = { date: string; count: number; level: number };
export type GitHubActivity = {
  source: "contributions" | "public-events";
  days: ActivityDay[];
  total: number;
  from: string;
  to: string;
  fetchedAt: string;
  limited: boolean;
  publicRepos?: number;
};

const DAY_MS = 86_400_000;
const levels = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid GitHub response");
  return value as Record<string, unknown>;
}

export function parseContributions(value: unknown, now = new Date()): GitHubActivity {
  const result = record(value);
  if (result.errors) throw new Error("GitHub GraphQL request failed");
  const user = record(record(result.data).user);
  const calendar = record(record(user.contributionsCollection).contributionCalendar);
  if (!Array.isArray(calendar.weeks)) throw new Error("Missing calendar");
  const days = calendar.weeks.flatMap((week) => {
    const entries = record(week).contributionDays;
    if (!Array.isArray(entries)) throw new Error("Missing days");
    return entries.map((entry): ActivityDay => {
      const day = record(entry);
      if (
        typeof day.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(day.date) ||
        !Number.isFinite(Date.parse(day.date)) ||
        typeof day.contributionCount !== "number" || !Number.isInteger(day.contributionCount) || day.contributionCount < 0 ||
        !levels.includes(String(day.contributionLevel))
      ) throw new Error("Invalid contribution day");
      return { date: day.date, count: day.contributionCount, level: levels.indexOf(String(day.contributionLevel)) };
    });
  });
  if (!days.length) throw new Error("Empty calendar");
  return {
    source: "contributions", days, total: days.reduce((total, day) => total + day.count, 0),
    from: days[0].date, to: days[days.length - 1].date, fetchedAt: now.toISOString(), limited: false,
  };
}

// GitHub's Events API contains public events from the last 30 days, not contributions.
export function aggregatePublicEvents(value: unknown, now = new Date()): GitHubActivity {
  if (!Array.isArray(value)) throw new Error("Invalid public events response");
  const midnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const days = Array.from({ length: 30 }, (_, index): ActivityDay => ({
    date: new Date(midnight - (29 - index) * DAY_MS).toISOString().slice(0, 10), count: 0, level: 0,
  }));
  const byDate = new Map(days.map((day) => [day.date, day]));
  const seen = new Set<string>();
  for (const item of value) {
    const event = record(item);
    if (typeof event.id !== "string" || typeof event.created_at !== "string") throw new Error("Invalid event");
    if (seen.has(event.id) || Date.parse(event.created_at) > now.getTime()) continue;
    seen.add(event.id);
    const day = byDate.get(event.created_at.slice(0, 10));
    if (day) day.count += 1;
  }
  for (const day of days) day.level = day.count === 0 ? 0 : day.count < 3 ? 1 : day.count < 6 ? 2 : day.count < 10 ? 3 : 4;
  return {
    source: "public-events", days, total: days.reduce((total, day) => total + day.count, 0),
    from: days[0].date, to: days[days.length - 1].date, fetchedAt: now.toISOString(), limited: value.length >= 300,
  };
}
