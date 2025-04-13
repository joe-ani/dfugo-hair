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
  title: "D'Fufo Hair - Premium Quality Hair Products",
  description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs. Visit our store in Lagos Island or shop online.",
  keywords: "hair, wigs, premium wigs, luxury hair, hair products, D'Fufo Hair, Lagos hair shop",
  authors: [{ name: "D'Fufo Hair" }],
  creator: "D'Fufo Hair",
  publisher: "D'Fufo Hair",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://dfufohair.com'),
  openGraph: {
    title: "D'Fufo Hair - Premium Quality Hair Products",
    description: "Luxury hair products and accessories. We offer all types of premium and high-quality wigs. Visit our store in Lagos Island or shop online.",
    url: 'https://dfufohair.com',
    siteName: "D'Fufo Hair",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: "D'Fufo Hair Logo",
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
    title: "D'Fufo Hair - Premium Quality Hair Products",
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
