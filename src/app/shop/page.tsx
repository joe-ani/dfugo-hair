import { Suspense } from 'react'
import ShopContent from './ShopContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Shop Premium Wigs & Hair Products | D'Fufo Hair",
  description: "Browse our collection of luxury wigs and premium hair products. Quality hair pieces at D'Fufo Hair in Lagos, Nigeria.",
  keywords: "hair shop, wigs shop, premium wigs, luxury hair, hair products, D'Fufo Hair, Lagos hair shop, buy wigs",
  openGraph: {
    title: "Shop Premium Wigs & Hair Products | D'Fufo Hair",
    description: "Browse our collection of luxury wigs and premium hair products. Quality hair pieces at D'Fufo Hair in Lagos, Nigeria.",
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shop Premium Wigs & Hair Products | D'Fufo Hair",
    description: "Browse our collection of luxury wigs and premium hair products.",
    images: ['/logo.png'],
  },
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}