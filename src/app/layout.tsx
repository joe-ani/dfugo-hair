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
  keywords: "hair, wigs, premium wigs, luxury hair, hair products, D'Fugo Hair, Lagos hair shop",
  authors: [{ name: "D'Fugo Hair" }],
  creator: "D'Fugo Hair",
  publisher: "D'Fugo Hair",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      {
        url: '/icons/sitelogo.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/icons/sitelogo.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    shortcut: '/icons/sitelogo.png',
    apple: '/icons/sitelogo.png',
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
    ],
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: "D'Fugo Hair - Premium Quality Hair Products",
    description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs.",
    images: ['/logo.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code', // You should replace this with your actual Google verification code
  },
  category: 'shopping',
};

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
