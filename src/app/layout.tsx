import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef Mustafa Abdelrahman | Front-End Developer | React.js / Next.js",
  description:
    "Front-End Developer focused on building clean, responsive, and user-friendly web interfaces using modern web technologies including Next.js, React.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Youssef Mustafa Abdelrahman",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Egypt",
    "Responsive Web Design",
  ],
  authors: [{ name: "Youssef Mustafa Abdelrahman" }],
  creator: "Youssef Mustafa Abdelrahman",
  metadataBase: new URL("https://youssef-mustafa.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youssef-mustafa.dev",
    title: "Youssef Mustafa Abdelrahman | Front-End Developer",
    description:
      "Front-End Developer focused on building clean, responsive, and user-friendly web interfaces using React.js and Next.js.",
    siteName: "Youssef Mustafa Abdelrahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Mustafa Abdelrahman | Front-End Developer",
    description:
      "Front-End Developer focused on building clean, responsive, and user-friendly web interfaces using React.js and Next.js.",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
