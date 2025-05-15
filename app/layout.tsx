import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://lynqea.vercel.app"
  ),
  title: "Lynqea | Desarrollador Web",
  description:
    "Mostrando proyectos personalizados en Next.js, TypeScript y Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Lynqea | Desarrollador Web",
    description:
      "Mostrando proyectos personalizados en Next.js, TypeScript y Tailwind CSS",
    url: "/",
    siteName: "Lynqea",
    images: [
      {
        url: "/og/og.png",
        width: 1260,
        height: 750,
        alt: "Lynqea - Desarrollador Web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynqea | Desarrollador Web",
    description:
      "Mostrando proyectos personalizados en Next.js, TypeScript y Tailwind CSS",
    images: ["/og/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
