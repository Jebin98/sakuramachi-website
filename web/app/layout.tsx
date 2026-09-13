import type { Metadata, Viewport } from "next";
import { Caveat, DM_Mono, Marcellus, Zen_Maru_Gothic } from "next/font/google";
import { HERO_CLIPS } from "@/lib/hero-clips";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { buildBakerySchema } from "@/lib/structured-data";
import "./globals.css";

/* All four families are Google Fonts SUBSTITUTIONS — no font binaries were supplied and
   the wordmark is hand-lettering, not a typeface. next/font self-hosts them, so there is
   no third-party request and no flash of unstyled text. */
const marcellus = Marcellus({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-marcellus" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], display: "swap", variable: "--font-caveat" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"], display: "swap", variable: "--font-dm-mono" });

/* Zen Maru Gothic is a CJK family: Google splits it into ~90 unicode-range chunks per weight.
   Preloading them would put several hundred <link> tags in the head and flood the connection,
   so this one is left to the CSS — the browser then fetches only the ranges the page uses
   (latin for the body copy, one kana chunk for the katakana product names). Two weights only:
   400 for body, 500 for buttons, tabs and eyebrows. */
const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-zen-maru",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  /* Resolved against metadataBase. The export serves the home page at "/" thanks to
     `trailingSlash: true`, so this is the one URL the page should ever be indexed under. */
  alternates: { canonical: "/" },
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["Chennai bakery", "Japanese cake", "Korean cake", "strawberry shortcake", "matcha cake", "home patisserie"],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/media/tiles/shortcake.jpg", width: 1200, height: 1500, alt: "Strawberry shortcake, sponge layers with cream and strawberries" }],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: SITE_DESCRIPTION },
  /* The tab icon is the cake slice cut to a circle — the wordmark in the full lockup is
     unreadable at 16px. Regenerate with scripts/make-favicon.py. The Apple icon keeps an
     opaque cream ground, because iOS fills a transparent home-screen icon with black. */
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF8",
  width: "device-width",
  initialScale: 1,
  /* Lets the cream page run under a notch and the home indicator. Without this
     `env(safe-area-inset-*)` always reports 0, and the insets in spacing.css do nothing. */
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${zenMaru.variable} ${caveat.variable} ${dmMono.variable}`}>
      <head>
        {/* The hero must never show an empty frame, so the first thing the browser fetches is
            the poster — which is frame 0 of the clip itself. The clips need no preload tag:
            `as="video"` is not a supported preload destination, and both <video> elements are
            server-rendered with preload="auto", so the browser's preload scanner starts their
            downloads while the HTML is still parsing, long before React hydrates. */}
        <link rel="preload" as="image" href={HERO_CLIPS[0].poster} fetchPriority="high" />
        {/* The business, in the vocabulary a search engine reads. React escapes text nodes for
            HTML, which would turn the quotes inside JSON into &quot; and break the parse — so
            the payload goes in raw, and is a real object put through JSON.stringify rather than
            hand-written JSON, so the compiler checks the shape and the escaping is not done by
            hand. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBakerySchema()) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
