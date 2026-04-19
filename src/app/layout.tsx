import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "nubuaed | Islamic Learning for Children",
    template: "%s | nubuaed",
  },
  description:
    "Nubuaed helps children build steady Islamic foundations through Quran basics, adab, and age-aware lessons.",
  keywords: ["nubuaed", "Islamic education", "children", "Quran", "adab"],
  authors: [{ name: "nubuaed" }],
  creator: "nubuaed",
  publisher: "nubuaed",
  openGraph: {
    title: "nubuaed | Islamic Learning for Children",
    description:
      "Islamic learning for children, guided by Quran basics, adab, and culturally grounded teaching.",
    url: "/",
    siteName: "nubuaed",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "nubuaed logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nubuaed | Islamic Learning for Children",
    description:
      "Islamic learning for children, guided by Quran basics, adab, and culturally grounded teaching.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-white text-black antialiased`}>
        <a
          href="#main-content"
          className="absolute -top-12 left-4 z-50 rounded-md bg-black px-4 py-2 text-sm font-bold text-white transition-[top] duration-200 focus:top-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
