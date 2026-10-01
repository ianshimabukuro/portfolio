import type { Metadata } from "next";
import Portfolio from "./portfolio";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Ian Shimabukuro | Independent iOS Developer",
  description:
    "Independent iOS and watchOS developer building apps for health, wellbeing, and everyday life. Explore my apps, code, and education.",
};

export default function Home() {
  return <Portfolio />;
}
