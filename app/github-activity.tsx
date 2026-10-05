"use client";

import { ArrowUpRight, RefreshCw } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import type { ActivityDay, GitHubActivity } from "../lib/github-calendar";
import { profile } from "../lib/portfolio";

function dateLabel(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  });
}

export default function GitHubActivityPanel() {
  const [activity, setActivity] = useState<GitHubActivity | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [hoveredDay, setHoveredDay] = useState<ActivityDay | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    fetch("/api/github", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Activity unavailable");
        return response.json() as Promise<GitHubActivity>;
      })
      .then(setActivity)
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [attempt]);

  if (error) {
    return <div className="activity-message" role="status">
      <p>GitHub is taking a moment.</p><span>Activity is temporarily unavailable.</span>
      <button type="button" className="text-action" onClick={() => setAttempt((current) => current + 1)}><RefreshCw size={14} /> Try again</button>
    </div>;
  }
  if (!activity) return <div className="activity-loading" role="status"><RefreshCw size={17} /> Loading GitHub activity...</div>;

  const contributions = activity.source === "contributions";
  const unit = contributions ? "contributions" : "public events";
  const start = new Date(`${activity.from}T00:00:00Z`).getUTCDay();
  const slots: (ActivityDay | null)[] = [...Array(start).fill(null), ...activity.days];
  while (slots.length % 7) slots.push(null);
  const activeDays = activity.days.filter((day) => day.count > 0).length;

  return <div className={`activity-content ${contributions ? "two-month-activity" : "month-activity"}`}>
    <span className="data-period activity-period">{contributions ? "PAST 60 DAYS" : "PAST 30 DAYS"}</span>
    <div className="activity-summary">
      <div className="activity-stats">
        <p className="activity-count">{activity.total.toLocaleString()}<span>{unit}</span></p>
        {typeof activity.publicRepos === "number" && <p className="repository-count">{activity.publicRepos}<span>public repos</span></p>}
      </div>
    </div>
    <div className="activity-body">
      <div className="activity-calendar">
        <div className="calendar-days" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
        <div className="activity-grid" style={{ "--weeks": slots.length / 7 } as CSSProperties} role="img" aria-label={`${activity.total} ${unit} from ${dateLabel(activity.from)} to ${dateLabel(activity.to)}`} onMouseLeave={() => setHoveredDay(null)}>
          {slots.map((day, index) => <span key={day?.date ?? `blank-${index}`} className={`activity-cell ${day ? `intensity-${day.level}` : "outside-calendar"}`} title={day ? `${dateLabel(day.date)}: ${day.count} ${unit}` : undefined} onMouseEnter={() => setHoveredDay(day)} />)}
        </div>
      </div>
      <div className="activity-note">
        <p>{`${activeDays} active ${activeDays === 1 ? "day" : "days"}`}</p>
      </div>
    </div>
    <a className="github-profile-link" href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">@{profile.github}<ArrowUpRight size={14} /></a>
  </div>;
}
