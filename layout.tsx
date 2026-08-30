import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ianshimabukuro.com"),
  title: {
    default: "Ian Shimabukuro | Full-stack mobile developer",
    template: "%s"
  },
  description:
    "Full-stack mobile developer building shipped iOS, React Native, cloud, and personal informatics products.",
  openGraph: {
    title: "Ian Shimabukuro | Full-stack mobile developer",
    description:
      "Full-stack mobile developer building shipped iOS, React Native, cloud, and personal informatics products.",
    url: "https://www.ianshimabukuro.com",
    siteName: "Ian Shimabukuro",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Ian Shimabukuro | Full-stack mobile developer",
    description:
      "Full-stack mobile developer building shipped iOS, React Native, cloud, and personal informatics products."
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
