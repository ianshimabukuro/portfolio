export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  outcomes: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "independent-app-developer",
    title: "Independent App Developer",
    eyebrow: "Mobile products",
    summary:
      "Shipped and maintained five SwiftUI apps on the App Store, serving more than 800 users across consumer wellness, productivity, and personal tools.",
    role: "iOS Engineer",
    period: "May 2025 - Present",
    stack: ["SwiftUI", "Firebase", "Xcode Cloud", "Core ML", "MLX", "Linear"],
    outcomes: [
      "Maintained App Store releases and Xcode Cloud workflows triggered by GitHub pull-request merges.",
      "Handled authentication, user data, and geolocation with Firebase-backed product flows.",
      "Used app reviews and product metrics to guide small, frequent improvements."
    ],
    details: [
      "The independent app work is the center of the portfolio story: full-stack mobile product development from idea to shipped App Store software.",
      "The work spans client architecture, cloud-backed data, release automation, analytics-informed iteration, and on-device machine learning."
    ]
  },
  {
    slug: "pacetank",
    title: "PaceTank",
    eyebrow: "Health and personal informatics",
    summary:
      "A Long COVID and ME/CFS pacing app that connects Apple Health data with lightweight energy-management models.",
    role: "Founder and iOS Engineer",
    period: "2025",
    stack: ["SwiftUI", "Apple Health", "Core ML", "MLX", "TelemetryDeck"],
    outcomes: [
      "Built the first Long COVID management app in this portfolio supporting Apple Health, reaching 140 users.",
      "Created a custom on-device ML pipeline for energy management experiments.",
      "Integrated event analytics to understand how people use pacing features."
    ],
    details: [
      "PaceTank is shown as a domain example, not the whole identity. It demonstrates how Ian applies mobile engineering to health and personal informatics.",
      "The case study emphasizes privacy-aware mobile experiences, physiological data, and product sensitivity for people managing limited energy."
    ]
  },
  {
    slug: "taggie",
    title: "Taggie",
    eyebrow: "Campus social product",
    summary:
      "A campus hangouts app built in React Native and Expo, backed by Firebase for authentication, user data, and geolocation.",
    role: "Mobile Engineer",
    period: "2025",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Geolocation"],
    outcomes: [
      "Built the alpha version in TypeScript with React Native and Expo.",
      "Managed authentication, user data, and location-aware features with Firebase.",
      "Used tester feedback from UC Irvine students to shape the iOS beta."
    ],
    details: [
      "Taggie broadens the mobile story beyond health. It shows product instincts, quick iteration, and full-stack mobile implementation in a social context.",
      "The work is useful evidence for cross-platform mobile roles because it combines interface, product loops, backend services, and real testers."
    ]
  },
  {
    slug: "southern-california-edison",
    title: "Southern California Edison",
    eyebrow: "Cloud simulation",
    summary:
      "A graduate engineering project modeling electrical lines under wind stress for damper placement optimization.",
    role: "Software Engineer",
    period: "June 2025 - Dec 2025",
    stack: ["Python", "FastAPI", "Docker", "Google Cloud Run", "Supabase", "PostgreSQL", "SQL", "Tableau"],
    outcomes: [
      "Built a Python stress simulation for assets without manufacturer data.",
      "Deployed the simulation service as a Docker image to Google Cloud Run.",
      "Stored simulation runs in Supabase and translated results into business insights with SQL and Tableau."
    ],
    details: [
      "This project supports the full-stack claim by showing backend service design, cloud deployment, database persistence, and analytical reporting.",
      "It also connects Ian's electrical engineering background with modern software delivery."
    ]
  },
  {
    slug: "yazaki",
    title: "Yazaki Innovations",
    eyebrow: "Automation and algorithms",
    summary:
      "A Python prototype for automating residential electrical wiring design with computer vision and graph-based pathfinding.",
    role: "Software Engineer",
    period: "Dec 2024 - June 2025",
    stack: ["Python", "Computer Vision", "Graph Search", "Agile Scoping"],
    outcomes: [
      "Collaborated with a cross-functional Agile team to scope product requirements.",
      "Led algorithm design for interpreting layout data and routing wiring paths.",
      "Built a working prototype that translated engineering rules into software behavior."
    ],
    details: [
      "Yazaki shows Ian working from ambiguous engineering requirements toward an algorithmic product prototype.",
      "The case study is intentionally concise, focusing on decision-making, prototyping, and technical translation."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
