import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import { ActiveLinkProvider } from "./context/ActiveLinkContext";
import { Toaster } from 'react-hot-toast';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D'Fugo Hair - Premium Quality Hair Products",
  description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs. Visit our store in Lagos Island or shop online.",
  manifest: '/manifest.json',
  keywords: "hair, wigs, premium wigs, luxury hair, hair products, D'Fugo Hair, Lagos hair shop",
  authors: [{ name: "D'Fugo Hair" }],
  creator: "D'Fugo Hair",
  publisher: "D'Fugo Hair",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://dfugohair.com'),
  openGraph: {
    title: "D'Fugo Hair - Premium Quality Hair Products",
    description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs. Visit our store in Lagos Island or shop online.",
    url: 'https://dfugohair.com',
    siteName: "D'Fugo Hair",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: "D'Fugo Hair Logo",
      },
      {
        url: '/model.png',
        width: 1200,
        height: 630,
        alt: "D'Fugo Hair Premium Wigs",
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "D'Fugo Hair - Premium Quality Hair Products",
    description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs.",
    images: ['/model.png'],
    creator: "@dfugohair",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://dfugohair.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'shopping',
  other: {
    'msapplication-TileColor': '#111111',
    'theme-color': '#111111',
  },
  icons: {
    icon: [
      { url: '/icons/sitelogo-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/sitelogo-384x384.png', sizes: '384x384', type: 'image/png' },
      { url: '/icons/sitelogo-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/sitelogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/sitelogo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/sitelogo-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/sitelogo-384x384.png', sizes: '384x384', type: 'image/png' },
      { url: '/icons/sitelogo-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: [{ url: '/icons/sitelogo-192x192.png', sizes: '192x192', type: 'image/png' }],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/icons/sitelogo-192x192.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} font-[600] antialiased`}>
        <ActiveLinkProvider>
          {/* Nav */}
          <Nav />
          {children}
          {/* Footer */}
          <Toaster />
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
