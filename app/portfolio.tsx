"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { apps, profile, socials } from "../lib/portfolio";
import GitHubActivityPanel from "./github-activity";

function SectionTitle({ title }: { title: string }) {
  return <div className="section-heading"><h2>{title}</h2></div>;
}

export default function Portfolio() {
  const newsletters = socials.filter((social) => social.type === "newsletter");
  const socialAccounts = socials.filter((social) => social.type === "social");

  return <div className="portfolio-page">
    <section className="introduction" aria-label="About Ian">
      <div className="introduction-content">
        <div className="identity">
          <h1 id="portfolio-name">Ian Shimabukuro<span>.</span></h1>
          <p className="role">Mobile apps in health, wearable connectivity, and lifestyle support.</p>
          <div className="specialties"><span>Swift</span><span>Kotlin</span><span>Python</span></div>
        </div>
        <aside className="credentials" aria-label="Selected credentials">
          <p>Japan MEXT Scholar</p>
          <p>2x UC Irvine Stella Zhang Venture Competition semifinalist</p>
        </aside>
      </div>
    </section>

    <div className="portfolio-viewport">
      <main className="portfolio-sheet" aria-labelledby="portfolio-name">
      <div className="overview-grid">
        <section className="overview-section apps-section" aria-label="Published apps">
          <SectionTitle title="My Apps" />
          <div className="app-grid">
            {apps.map((app) => <article className="app-item" key={app.name}>
              <div className={`app-artwork ${app.platform === "Apple Watch" ? "watch-app-artwork" : ""}`}><Image src={app.image} width={80} height={80} alt={`${app.name} app icon`} /></div>
              <div className="app-details">
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <span className="app-platform">{app.platform}</span>
              </div>
              <div className="app-actions">
                <a className="app-store-badge" href={app.url} target="_blank" rel="noopener noreferrer">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?releaseDate=2020-01-01&h=40" alt="Download on the App Store" />
                </a>
                <Link className="app-action" href={`/projects/${app.slug}`}>Learn more</Link>
              </div>
            </article>)}
          </div>
        </section>

        <section className="overview-section github-section" aria-label="GitHub activity">
          <SectionTitle title="GitHub Activity" />
          <GitHubActivityPanel />
        </section>

        <section className="overview-section socials-section" aria-label="Social profiles">
          <SectionTitle title="My Socials" />
          <div className="social-grid">
            <div className="newsletter-row">
              {newsletters.map((social) => <a className="social-link" href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name}>
                <img src={social.logo} alt="" />
                <strong>{social.label}</strong>
              </a>)}
            </div>
            {socialAccounts.map((social) => <a className="social-link" href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name}>
              <img src={social.logo} alt="" />
              <strong>{social.label}</strong>
            </a>)}
          </div>
        </section>

        <section className="overview-section contact-section" aria-label="Contact Ian">
          <SectionTitle title="Contact" />
          <div className="contact-list">
            <a className="email-link" href={`mailto:${profile.androidEmail}`}><span><small>Android apps</small>{profile.androidEmail}</span><ArrowRight size={16} /></a>
            <a className="email-link" href={`mailto:${profile.iosEmail}`}><span><small>iOS apps</small>{profile.iosEmail}</span><ArrowRight size={16} /></a>
            <a className="email-link" href={`mailto:${profile.generalEmail}`}><span><small>General</small>{profile.generalEmail}</span><ArrowRight size={16} /></a>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <p>Copyright © 2026 Ian Shimabukuro. All rights reserved.</p>
        <p>United States</p>
      </footer>
      </main>
    </div>
  </div>;
}
