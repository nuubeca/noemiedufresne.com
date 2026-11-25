import type { Metadata } from "next";
import LinkInBioPage from "./instagram/LinkInBioPage";
import { linkInBioMetadata } from "./instagram/metadata";

export const metadata: Metadata = {
  ...linkInBioMetadata,
  robots: { index: true, follow: true },
  alternates: { canonical: "https://noemiedufresne.com/" },
  openGraph: {
    ...linkInBioMetadata.openGraph,
    url: "https://noemiedufresne.com/",
  },
};

export default LinkInBioPage;
