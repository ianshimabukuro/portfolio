import assert from "node:assert/strict";
import test from "node:test";
import { aggregatePublicEvents, parseContributions } from "../lib/github-calendar.ts";

const now = new Date("2026-10-01T12:00:00Z");

test("GraphQL contribution totals use the returned calendar days", () => {
  const activity = parseContributions({ data: { user: { contributionsCollection: {
    restrictedContributionsCount: 3,
    contributionCalendar: { weeks: [{ contributionDays: [
      { date: "2026-09-30", contributionCount: 2, contributionLevel: "SECOND_QUARTILE" },
      { date: "2026-10-01", contributionCount: 0, contributionLevel: "NONE" },
    ] }] },
  } } } }, now);
  assert.equal(activity.source, "contributions");
  assert.equal(activity.total, 2);
  assert.equal(activity.privateContributions, 3);
  assert.deepEqual(activity.days.map((day) => day.level), [2, 0]);
});

test("public events stay within 30 days and duplicate IDs count once", () => {
  const activity = aggregatePublicEvents([
    { id: "a", created_at: "2026-09-30T15:00:00Z" },
    { id: "a", created_at: "2026-09-30T15:00:00Z" },
    { id: "b", created_at: "2026-10-01T10:00:00Z" },
    { id: "old", created_at: "2026-08-20T00:00:00Z" },
    { id: "future", created_at: "2026-10-02T00:00:00Z" },
  ], now);
  assert.equal(activity.source, "public-events");
  assert.equal(activity.days.length, 30);
  assert.equal(activity.from, "2026-09-02");
  assert.equal(activity.total, 2);
  assert.equal(activity.days.at(-2).count, 1);
  assert.equal(activity.days.at(-1).count, 1);
});

test("a GraphQL error does not become a made-up empty graph", () => {
  assert.throws(() => parseContributions({ errors: [{ message: "rate limited" }] }, now));
});
