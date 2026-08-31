import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ian Shimabukuro | File Select",
  description:
    "Full-stack mobile developer building shipped iOS, React Native, cloud, and personal informatics products.",
};

const contributionCells = [
  0, 0, 0, 0, 1, 2, 3, 2, 4, 3, 1, 3, 2, 4, 5, 3, 2, 1, 4, 2,
  3, 5, 2, 3, 4, 1, 2, 0, 3, 4, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1,
  2, 4, 5, 2, 3, 1, 4, 2, 5, 3, 4, 2, 1, 3, 5, 2, 4, 1, 3, 2,
  4, 5, 2, 3, 1, 4, 3, 2, 5, 4, 1, 2, 3, 5, 4, 2, 1, 5, 3, 4,
];

const appSlots = ["APP", "APP", "APP", "APP", "APP"];

const academics = ["UCI", "TS", "EECS"];

const socials = ["in", "GH", "CV"];

export default function Home() {
  return (
    <main className="n64-stage" aria-labelledby="hero-title">
      <section className="game-screen">
        <div className="save-window">


          <button className="file-tab" type="button">
            <span>File 1</span>
            <span className="tab-handle" aria-hidden="true" />
          </button>

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
                  {appSlots.map((slot, index) => (
                    <button type="button" key={`${slot}-${index}`} aria-label="Open app placeholder">
                      {slot}
                    </button>
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
                    <button type="button" key={item} aria-label={`${item} placeholder`}>
                      {item}
                    </button>
                  ))}
                </div>
              </section>

              <section aria-labelledby="socials-title">
                <h2 id="socials-title">Socials</h2>
                <div className="icon-row socials-row">
                  {socials.map((item) => (
                    <button type="button" key={item} aria-label={`${item} placeholder`}>
                      {item}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <svg
            aria-hidden="true"
            className="profile-card-outline"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="0,20 50,20 50,0 100,0 100,100 0,100" />
          </svg>

          <nav className="action-menu" aria-label="Start menu">
            <button type="button">Learn More</button>
            <button type="button">Contact Me</button>
          </nav>
        </div>
      </section>
    </main>
  );
}
