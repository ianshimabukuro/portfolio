"use client";

import {
  ArrowUpRight, ArrowRight, BookOpen, BriefcaseBusiness, Check, Copy, GitBranch,
  Mail, Play, Smartphone, Watch,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { apps, education, profile, socials } from "../lib/portfolio";
import GitHubActivityPanel from "./github-activity";

const socialIcons = [BookOpen, BriefcaseBusiness, GitBranch, Play];

function SectionTitle({ number, title, aside }: { number: string; title: string; aside: string }) {
  return <div className="section-heading"><h2><span>{number}</span>{title}</h2><span className="section-aside">{aside}</span></div>;
}

export default function Portfolio() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [scale, setScale] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewport.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / 1040, entry.contentRect.height / 680));
    });
    observer.observe(viewport.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (copyStatus === "idle") return;
    const timer = setTimeout(() => setCopyStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return <div className="portfolio-viewport" ref={viewport}>
    <main className="portfolio-sheet" style={{ "--fit-scale": scale } as CSSProperties} aria-labelledby="portfolio-name">
      <section className="introduction" aria-label="About Ian">
        <div className="identity">
          <h1 id="portfolio-name">Ian Shimabukuro<span>.</span></h1>
          <p className="role">Mobile developer focused on health and lifestyle</p>
          <div className="specialties"><span>Swift</span><span>Kotlin</span><span>Python</span></div>
        </div>
      </section>

      <div className="overview-grid">
        <section className="overview-section apps-section" aria-label="Published apps">
          <SectionTitle number="01" title="My Apps" aside="5 APPS / APP STORE" />
          <div className="app-grid">
            {apps.map((app) => <a className="app-item" href={app.url} key={app.name} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} on the App Store`}>
              <div className="app-artwork"><Image src={app.image} width={80} height={80} alt={`${app.name} app icon`} /><ArrowUpRight size={16} className="app-arrow" /></div>
              <h3>{app.name}</h3><p>{app.description}</p>
              <span className="app-platform">{app.platform === "iPhone" ? <Smartphone size={11} /> : <Watch size={11} />}{app.platform}</span>
            </a>)}
          </div>
        </section>

        <section className="overview-section github-section" aria-label="GitHub activity">
          <SectionTitle number="02" title="GitHub" aside="GITHUB" />
          <GitHubActivityPanel />
        </section>

        <section className="overview-section education-section" aria-label="Education">
          <SectionTitle number="03" title="Academics" aside="EDUCATION" />
          <div className="education-list">
            {education.map((school) => <div className="education-item" key={school.id}>
              <div className="education-row">
                <span className={`school-mark ${school.id}`}>{school.mark}</span>
                <span className="school-name">{school.name}<span>{school.country}</span></span>
                <span className="school-years">{school.years}</span>
              </div>
              <p className="degree-detail">{school.degree}</p>
            </div>)}
          </div>
        </section>

        <section className="overview-section socials-section" aria-label="Social profiles">
          <SectionTitle number="04" title="My Socials" aside="SAY HELLO" />
          <div className="social-grid">
            {socials.map((social, index) => {
              const Icon = socialIcons[index];
              return <a className="social-link" href={social.url} key={social.name} target="_blank" rel="noopener noreferrer"><Icon size={18} /><span><strong>{social.name}</strong><span>{social.detail}</span></span><ArrowUpRight size={15} /></a>;
            })}
          </div>
        </section>
      </div>

      <footer className="contact-strip">
        <div className="contact-intro"><Mail size={20} /><span><strong>Good things start with a hello.</strong><span>Ideas, collaborations, or just a conversation.</span></span></div>
        <div className="contact-actions">
          <a className="email-link" href={`mailto:${profile.email}`}><span><small>CONTACT ME</small>{profile.email}</span><ArrowRight size={21} /></a>
          <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address" title={copyStatus === "copied" ? "Copied!" : "Copy email address"}>{copyStatus === "copied" ? <Check size={17} /> : <Copy size={17} />}</button>
        </div>
        <span className="copy-feedback" role="status">{copyStatus === "copied" ? "Email copied" : copyStatus === "error" ? "Copy unavailable. Email is selectable." : ""}</span>
      </footer>
    </main>
  </div>;
}
