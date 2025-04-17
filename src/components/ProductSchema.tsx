interface ProductSchemaProps {
    name: string;
    description: string;
    price: string;
    images: string[];
}

const ProductSchema = ({ name, description, price, images }: ProductSchemaProps) => {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name,
        description,
        image: images,
        offers: {
            "@type": "Offer",
            url: `https://dfugohair.com.ng/product/${name.toLowerCase().replace(/\s+/g, '-')}`,
            priceCurrency: "NGN",
            price: price.replace(/[^0-9]/g, ''),
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "D'Fugo Hair"
            }
        },
        brand: {
            "@type": "Brand",
            name: "D'Fugo Hair"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ProductSchema;