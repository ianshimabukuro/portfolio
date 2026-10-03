import { NextResponse } from "next/server";
import { aggregatePublicEvents, parseContributions } from "../../../lib/github-calendar";
import { profile } from "../../../lib/portfolio";

export const runtime = "nodejs";

const query = `query PortfolioActivity($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      restrictedContributionsCount
      contributionCalendar {
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

async function githubRequest(path: string, body?: object, token?: string) {
  const response = await fetch(`https://api.github.com/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Ian-Shimabukuro-Portfolio",
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`GitHub status ${response.status}`);
  return response.json() as Promise<unknown>;
}

export async function GET() {
  const now = new Date();
  const token = process.env.GITHUB_TOKEN;
  let publicRepos: number | undefined;
  try {
    const user = await githubRequest(`users/${profile.github}`) as Record<string, unknown>;
    if (typeof user.public_repos === "number") publicRepos = user.public_repos;
  } catch {
    // The activity graph can still be shown without profile metadata.
  }
  if (token) {
    try {
      const from = new Date(now);
      from.setUTCDate(from.getUTCDate() - 59);
      from.setUTCHours(0, 0, 0, 0);
      const result = await githubRequest("graphql", {
        query,
        variables: { login: profile.github, from: from.toISOString(), to: now.toISOString() },
      }, token);
      return NextResponse.json({ ...parseContributions(result, now), publicRepos });
    } catch {
      console.warn("GitHub contribution calendar unavailable; using public events.");
    }
  }

  try {
    const events: unknown[] = [];
    for (let page = 1; page <= 3; page += 1) {
      const result = await githubRequest(`users/${profile.github}/events/public?per_page=100&page=${page}`);
      if (!Array.isArray(result)) throw new Error("Invalid events response");
      events.push(...result);
      if (result.length < 100) break;
    }
    return NextResponse.json({ ...aggregatePublicEvents(events, now), publicRepos });
  } catch {
    return NextResponse.json(
      { error: "GitHub activity is temporarily unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
