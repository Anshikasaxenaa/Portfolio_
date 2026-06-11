import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * ROOT LAYOUT
 * 
 * FONTS NOTE:
 * Using system font stack here for universal compatibility.
 * After deploying to Vercel, uncomment the Inter import below
 * for premium typography:
 * 
 *   import { Inter } from "next/font/google";
 *   const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","500","600","700"] });
 * 
 * Then add ${inter.variable} to the html className.
 */

export const metadata: Metadata = {
  title: {
    default: "Anshika Saxena — Full-Stack Developer & SDE",
    template: "%s | Anshika Saxena",
  },
  description:
    "Final-year B.Tech CSE student specialising in full-stack development with React, Node.js, and cloud-native architecture. Open to SDE & Frontend Engineer roles.",
  keywords: [
    "software developer",
    "full-stack developer",
    "frontend engineer",
    "MERN stack",
    "React developer",
    "Node.js",
    "SDE fresher",
    "Anshika Saxena",
    "portfolio",
  ],
  authors: [{ name: "Anshika Saxena", url: "https://github.com/Anshikasaxenaa" }],
  creator: "Anshika Saxena",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://[your-domain].vercel.app",
    siteName: "Anshika Saxena Portfolio",
    title: "Anshika Saxena — Full-Stack Developer & SDE",
    description:
      "B.Tech CSE student building production-grade full-stack apps. React | Node.js | TypeScript | Cloud.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anshika Saxena — Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@[your-twitter]",
    title: "Anshika Saxena — Full-Stack Developer",
    description: "B.Tech CSE | Full-Stack | React | Node.js | Open to SDE roles",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anshika Saxena",
              url: "https://[your-domain].vercel.app",
              sameAs: [
                "https://github.com/Anshikasaxenaa",
                "https://www.linkedin.com/in/anshika-saxena-87119a267/",
                "https://leetcode.com/u/anshikasaxena135/",
              ],
              jobTitle: "Software Development Engineer (Fresher)",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Arya College of Engineering and IT",
              },
            }),
          }}
        />
      </head>
      <body className="bg-canvas text-text-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          >
            <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent-500/30 blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-color-dodge opacity-70 dark:opacity-20" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/30 blur-[120px] animate-blob [animation-delay:2s] mix-blend-multiply dark:mix-blend-color-dodge opacity-70 dark:opacity-20" />
            <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-accent-300/30 blur-[120px] animate-blob [animation-delay:4s] mix-blend-multiply dark:mix-blend-color-dodge opacity-50 dark:opacity-10" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}