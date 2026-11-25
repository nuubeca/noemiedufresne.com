import type { Metadata } from "next";

export const linkInBioMetadata: Metadata = {
  title: "Noémie Dufresne (@noemie.dufresne)",
  description: "See what Noémie Dufresne is sharing.",
  robots: { index: false, follow: false, noarchive: true },
  referrer: "no-referrer",
  openGraph: {
    title: "Noémie Dufresne (@noemie.dufresne)",
    description: "See what Noémie Dufresne is sharing.",
    type: "profile",
    url: "https://noemiedufresne.com/instagram",
    siteName: "Noémie Dufresne",
  },
  twitter: { card: "summary_large_image" },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false },
};
