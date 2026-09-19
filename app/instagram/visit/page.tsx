import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Continue…",
  robots: { index: false, follow: false },
};

/**
 * Intermediate hop (mirrors visit.clickylo.co/<slug>?l=<id>):
 * a tiny page that immediately replaces itself with the /go endpoint,
 * so the final destination never appears in the link-in-bio HTML.
 */
export default async function VisitPage({
  searchParams,
}: {
  searchParams: Promise<{ l?: string }>;
}) {
  const { l } = await searchParams;
  const target = `/instagram/go${l ? `?l=${encodeURIComponent(l)}` : ""}`;

  return (
    <>
      <noscript>
        <a href={target}>Continue</a>
      </noscript>
      <Script id="visit-redirect" strategy="afterInteractive">
        {`location.replace(${JSON.stringify(target)})`}
      </Script>
    </>
  );
}
