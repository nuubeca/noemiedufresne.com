import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Noémie Dufresne - Official Site",
  description:
    "Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life.",
  openGraph: {
    title: "Noémie Dufresne - Official Site",
    description:
      "Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content.",
    url: "https://noemiedufresne.com/",
    siteName: "Noémie Dufresne",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}

