import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Shimabukuro | File Select",
  description:
    "Full-stack mobile developer building shipped iOS, React Native, cloud, and personal informatics products.",
};

const contributionCells = [
  0, 2, 3, 4, 1, 2, 3, 2, 4, 3, 1, 3, 2, 4, 5, 3, 2, 1, 4, 2,
  3, 5, 2, 3, 4, 1, 2, 0, 3, 4, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1,
  2, 4, 5, 2, 3, 1, 4, 2, 5, 3, 4, 2, 1, 3, 5, 2, 4, 1, 3, 2,
  4, 5, 2, 3, 1, 4, 3, 2, 5, 4, 1, 2, 3, 5, 4, 2, 1, 5, 3, 4,
];

const appSlots = ["P", "T", "M", "S", "I"];

const academics = [
  { label: "UCI", href: "https://uci.edu/" },
  { label: "筑波", href: "https://www.tsukuba.ac.jp/en/" },
  { label: "EECS", href: "#profile" },
];

const socials = [
  { label: "in", href: "https://www.linkedin.com/in/ianshimabukuro/" },
  { label: "GH", href: "https://github.com/ianshimabukuro" },
  { label: "CV", href: "mailto:jh.ians@icloud.com" },
];

export default function Home() {
  return (
    <main className="n64-stage" aria-labelledby="hero-title">
      <div className="laptop-shell" aria-hidden="true">
        <div className="camera" />
      </div>

      <section className="game-screen">
        <div className="screen-backdrop" />
        <div className="save-window">
          <p className="ghost-title">Open this file?</p>

          <div className="file-tab">
            <span>File 1</span>
            <span className="tab-handle" aria-hidden="true" />
          </div>

          <div className="profile-card">
            <div className="left-panel">
              <div className="github-panel">
                <h2>GitHub</h2>
                <div className="contribution-grid" aria-label="GitHub contribution graph">
                  {contributionCells.map((level, index) => (
                    <span
                      className={`contribution-cell level-${level}`}
                      key={`${level}-${index}`}
                    />
                  ))}
                </div>
              </div>

              <div className="apps-panel">
                <h2>Apps</h2>
                <div className="app-slots" aria-label="Shipped app placeholders">
                  {appSlots.map((slot) => (
                    <a href="#work" key={slot} aria-label={`Open app ${slot}`}>
                      {slot}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="center-panel">
              <h1 id="hero-title">Ian Shimabukuro</h1>
              <p>Mobile Developer</p>
              <div className="divider" />
              <img
                alt="Low-poly avatar of Ian"
                className="avatar"
                height="360"
                src="/avatar-low-poly.png"
                width="360"
              />
            </div>

            <div className="right-panel">
              <section aria-labelledby="academics-title">
                <h2 id="academics-title">Academics</h2>
                <div className="icon-row">
                  {academics.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>

              <section aria-labelledby="socials-title">
                <h2 id="socials-title">Socials</h2>
                <div className="icon-row socials-row">
                  {socials.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <nav className="action-menu" aria-label="Start menu">
            <a href="#profile">Learn More</a>
            <a href="mailto:jh.ians@icloud.com">Contact Me</a>
          </nav>
        </div>

        <p className="name-plate">Ian Shimabukuro</p>
        <div className="controller-hint" aria-hidden="true">
          <span>A - Decide</span>
          <i />
          <span>B - Cancel</span>
        </div>
      </section>

      <section className="hidden-content" id="profile" aria-labelledby="profile-title">
        <h2 id="profile-title">Full-stack mobile developer</h2>
        <p>
          I build shipped iOS and React Native products with cloud, data, and
          personal informatics systems behind them.
        </p>
      </section>

      <section className="hidden-content" id="work" aria-labelledby="work-title">
        <h2 id="work-title">Selected work</h2>
        <p>
          Independent SwiftUI apps, PaceTank, Taggie, Southern California
          Edison, and Yazaki prototypes will plug into this file-select surface.
        </p>
      </section>
    </main>
  );
}
