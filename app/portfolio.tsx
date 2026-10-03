"use client";

import {
  ArrowUpRight, ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { apps, education, profile, socials } from "../lib/portfolio";
import GitHubActivityPanel from "./github-activity";

function SectionTitle({ title }: { title: string }) {
  return <div className="section-heading"><h2>{title}</h2></div>;
}

export default function Portfolio() {
  const newsletters = socials.filter((social) => social.type === "newsletter");
  const socialAccounts = socials.filter((social) => social.type === "social");

  return <div className="portfolio-viewport">
    <main className="portfolio-sheet" aria-labelledby="portfolio-name">
      <section className="introduction" aria-label="About Ian">
        <div className="identity">
          <h1 id="portfolio-name">Ian Shimabukuro<span>.</span></h1>
          <p className="role">Mobile developer focused on health and lifestyle</p>
          <div className="specialties"><span>Swift</span><span>Kotlin</span><span>Python</span></div>
        </div>
      </section>

      <div className="overview-grid">
        <section className="overview-section apps-section" aria-label="Published apps">
          <SectionTitle title="My Apps" />
          <div className="app-grid">
            {apps.map((app) => <a className="app-item" href={app.url} key={app.name} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} on the App Store`}>
              <div className="app-artwork"><Image src={app.image} width={80} height={80} alt={`${app.name} app icon`} /></div>
              <h3>{app.name}</h3><p>{app.description}</p>
              <span className="app-platform">{app.platform}</span>
            </a>)}
          </div>
        </section>

        <section className="overview-section github-section" aria-label="GitHub activity">
          <SectionTitle title="GitHub Activity" />
          <GitHubActivityPanel />
        </section>

        <section className="overview-section education-section" aria-label="Education">
          <SectionTitle title="Academics" />
          <div className="education-list">
            {education.map((school) => <div className="education-item" key={school.id}>
              <div className="education-row">
                <span className={`school-mark ${school.id}`}><Image src={school.logo} width={44} height={30} alt={`${school.name} logo`} /></span>
                <span className="school-details">
                  <strong className="school-name">{school.name}</strong>
                  <span className="school-meta"><span>{school.country} · {school.years}</span><span>{school.degree}</span></span>
                </span>
              </div>
            </div>)}
          </div>
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
      </div>

      <footer className="contact-strip">
        <a className="email-link" href={`mailto:${profile.androidEmail}`}><span><small>ANDROID APPS</small>{profile.androidEmail}</span><ArrowRight size={21} /></a>
        <a className="email-link" href={`mailto:${profile.iosEmail}`}><span><small>IOS APPS</small>{profile.iosEmail}</span><ArrowRight size={21} /></a>
        <a className="email-link" href={`mailto:${profile.generalEmail}`}><span><small>GENERAL</small>{profile.generalEmail}</span><ArrowRight size={21} /></a>
      </footer>
    </main>
  </div>;
}
