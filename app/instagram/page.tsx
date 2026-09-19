import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import Script from "next/script";
import { INSTAGRAM_LINK_ID } from "./config";
import { breakoutScript } from "./breakout-script";

const NAME = "Noémie Dufresne";
const BIO =
  "Hi I'm Noémie, content creator from Montréal 🇨🇦 I love fashion, travelling + the glamour of everyday life ✨\n\nIf you want to get to know me on a very personal level, send me a DM on my private page ♥️ can't wait to get to know you 😘";

export default function InstagramPage() {
  return (
    <div className="min-h-dvh bg-[#030712] text-white md:flex md:items-center md:justify-center md:py-8">
      {/* Desktop blurred backdrop */}
      <div
        aria-hidden
        className="hidden md:block fixed -inset-16 z-0 bg-cover bg-center blur-[90px] saturate-150 scale-110"
        style={{ backgroundImage: "url('/images/bg2024.jpeg')" }}
      />
      <div className="hidden md:block fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      <main className="relative z-10 flex min-h-dvh md:min-h-0 flex-col bg-[#030712] md:w-[420px] md:rounded-[32px] md:overflow-hidden md:shadow-[0_40px_100px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Cover */}
        <div className="relative w-full aspect-[21/19] max-h-[60dvh] md:h-[380px] md:max-h-none shrink-0">
          <Image
            src="/images/bg2024.jpeg"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-[#030712] pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[384px] mx-auto -mt-8 px-6 pb-6 text-center flex-1 flex flex-col">
          <h1 className="flex items-center justify-center text-2xl font-bold mb-4">
            <span>{NAME}</span>
            <BadgeCheck
              aria-label="Verified"
              size={20}
              className="ml-1.5 shrink-0 text-white fill-[#1d9bf0]"
            />
          </h1>

          <p className="text-sm text-white/70 whitespace-pre-line leading-relaxed mb-6">
            {BIO}
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link
              href={`/instagram/visit?l=${INSTAGRAM_LINK_ID}`}
              className="group relative block w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity hover:opacity-85"
            >
              <Image
                src="/images/instagram-more.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-10 pb-4">
                <span className="block text-base font-semibold">
                  More of me ♥️ (click)
                </span>
              </div>
            </Link>
          </div>

          <p className="mt-auto pt-6 text-xs font-medium text-gray-400/85">
            noemiedufresne.com
          </p>
        </div>
      </main>
      <Script id="iab-breakout" strategy="afterInteractive">
        {breakoutScript}
      </Script>
    </div>
  );
}
