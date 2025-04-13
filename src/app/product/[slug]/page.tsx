import { Metadata } from 'next';
import ProductPageClient from './ProductPageClient';

type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    // Convert slug to readable product name
    const productName = resolvedParams.slug.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    return {
        title: `${productName} | D'Fufo Hair`,
        description: `Shop ${productName} at D'Fufo Hair. Premium quality hair products and luxury wigs in Lagos, Nigeria.`,
        keywords: `${productName.toLowerCase()}, hair products, wigs, D'Fufo Hair, luxury hair, premium wigs, Lagos`,
        openGraph: {
            title: `${productName} | D'Fufo Hair`,
            description: `Shop ${productName} at D'Fufo Hair. Premium quality hair products and luxury wigs in Lagos, Nigeria.`,
            type: 'website',
            images: ['/logo.png'], // This would ideally be the product image
        },
        twitter: {
            card: 'summary_large_image',
            title: `${productName} | D'Fufo Hair`,
            description: `Shop ${productName} at D'Fufo Hair. Premium quality hair products and luxury wigs.`,
            images: ['/logo.png'], // This would ideally be the product image
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    return <ProductPageClient params={resolvedParams} />;
}
