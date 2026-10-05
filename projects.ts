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
  appStoreUrl?: string;
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
    ],
    appStoreUrl: "https://apps.apple.com/app/id6755208393"
  },
  {
    slug: "airwatch",
    title: "AirWatch",
    eyebrow: "Breathwork and wearable connectivity",
    summary: "An Apple Watch app for understanding breathwork sessions.",
    role: "Independent iOS Developer",
    period: "Shipped product",
    stack: ["Swift", "SwiftUI", "watchOS"],
    outcomes: [
      "Published an Apple Watch companion focused on breathwork analysis.",
      "Designed the product around short, glanceable wearable interactions."
    ],
    details: [
      "AirWatch represents the wearable side of Ian's mobile work: focused interactions, health-adjacent data, and a product designed for the wrist.",
      "The project is part of an independent collection of small, shipped mobile tools."
    ],
    appStoreUrl: "https://apps.apple.com/app/id6759843454"
  },
  {
    slug: "sleep-vibrations",
    title: "Sleep Vibrations",
    eyebrow: "Wearable wellbeing",
    summary: "An Apple Watch app built to make winding down feel gentler.",
    role: "Independent iOS Developer",
    period: "Shipped product",
    stack: ["Swift", "SwiftUI", "watchOS"],
    outcomes: [
      "Published a wellbeing-focused Apple Watch experience.",
      "Explored a small, intentional interaction model for bedtime routines."
    ],
    details: [
      "Sleep Vibrations is a compact example of mobile development for everyday wellbeing.",
      "It extends the portfolio's focus beyond health data into supportive personal routines."
    ],
    appStoreUrl: "https://apps.apple.com/app/id6754226600"
  },
  {
    slug: "grateful",
    title: "Grateful",
    eyebrow: "Personal reflection",
    summary: "A daily gratitude journal for iPhone and iPad.",
    role: "Independent iOS Developer",
    period: "Shipped product",
    stack: ["Swift", "SwiftUI", "iOS", "iPadOS"],
    outcomes: [
      "Published a lightweight journaling tool across iPhone and iPad.",
      "Designed an approachable daily reflection experience."
    ],
    details: [
      "Grateful focuses on a simple, repeatable personal practice rather than feature density.",
      "It is part of Ian's work on practical lifestyle-supporting tools."
    ],
    appStoreUrl: "https://apps.apple.com/app/id6749878810"
  },
  {
    slug: "measuring-jug",
    title: "Measuring Jug",
    eyebrow: "Everyday utility",
    summary: "A kitchen conversion tool for iPhone and iPad.",
    role: "Independent iOS Developer",
    period: "Shipped product",
    stack: ["Swift", "SwiftUI", "iOS", "iPadOS"],
    outcomes: [
      "Published a focused conversion utility across iPhone and iPad.",
      "Turned a common kitchen task into a fast, single-purpose mobile tool."
    ],
    details: [
      "Measuring Jug shows the same product discipline applied to a practical daily utility.",
      "The work favors clarity and speed for a task people need to complete in the moment."
    ],
    appStoreUrl: "https://apps.apple.com/app/id6749343704"
  },
  {
    slug: "boop",
    title: "Boop Pet",
    eyebrow: "Apple Watch companion",
    summary: "A tiny Apple Watch pet that turns regular care into a discipline-building ritual.",
    role: "Independent iOS Developer",
    period: "2025",
    stack: ["Swift", "SwiftUI", "watchOS"],
    outcomes: [
      "Built a watch-first virtual pet that must be fed every eight hours.",
      "Used a simple care loop to support time awareness and consistency."
    ],
    details: [
      "Boop Pet lives on Apple Watch as a small, intentional companion: keep Boop fed to keep him alive.",
      "The interaction is deliberately minimal, with optional haptic reminders and a fresh start whenever a care streak ends."
    ],
    appStoreUrl: "https://apps.apple.com/us/app/boop-pet/id6746684711"
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
