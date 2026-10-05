import type { Metadata } from "next";
import { Oswald, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toast';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap',
})

// Utility "logbook" face for v2 notation (week markers, eyebrows, indices)
const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Toned by Trevor',
  description: 'Find your edge. Get stronger. Look better.',
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${archivo.variable} ${spaceMono.variable} antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-my-bg">
        <Header />
        {children}
        <Toaster />
        <SanityLive />
      </body>
    </html>
  );
}
