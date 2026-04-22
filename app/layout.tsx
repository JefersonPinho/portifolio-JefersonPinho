import type { Metadata } from "next";
import { Sora, Fira_Code } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jeferson Pinho — Desenvolvedor Front-End",
    template: "%s | Jeferson Pinho",
  },
  description:
    "Desenvolvedor Front-End especializado em React, Next.js, TypeScript e arquiteturas web modernas. Construindo aplicações web de alta performance e acessíveis.",
  keywords: [
    "Desenvolvedor Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
  ],
  authors: [{ name: "Jeferson Pinho", url: "https://jefersonpinho.com" }],
  creator: "Jeferson Pinho",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Jeferson Pinho — Desenvolvedor Front-End",
    description:
      "Desenvolvedor Front-End especializado em React, Next.js, TypeScript e arquiteturas web modernas.",
    siteName: "Jeferson Pinho Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeferson Pinho — Desenvolvedor Front-End",
    description:
      "Desenvolvedor Front-End especializado em React, Next.js, TypeScript e arquiteturas web modernas.",
    creator: "@jefersonpinho",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${firaCode.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
