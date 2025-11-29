import AddToCartBtn from '@/components/not-shared/cart/AddToCartBtn';
import Container from '@/components/shared/layout/Container';
import ProductSkeleton from "@/components/not-shared/product/ProductSkeleton";
import ProductInfoClient from "@/components/not-shared/product/ProductInfoClient";
import RelatedProducts from "@/components/not-shared/product/RelatedProducts";
import { notFound } from "next/navigation"

interface IProductDetailProps {
    params: Promise<{id: string}>,
    searchParams: Promise<{}>
}

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error("Failed to fetch product");
    }
    return res.json();
}

export default async function ProductItem({params}: IProductDetailProps) {
    const { id } = await params;

    try {
        const product = await getProduct(id);

        return (
            <Container >
                <img className='w-120 h-120 object-contain mx-auto' src={product.image} alt={product.title} />
                <section className='mb-6 space-y-6'>
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-600 mb-4 text-justify">{product.description}</p>
                    <div className="text-2xl font-semibold mb-4">Price: {product.price}$</div>

                    <ProductInfoClient product={product} />
                </section>
                <RelatedProducts productId={product.id} />
            </Container>
        )
    }
    catch(e) {
        return notFound();
    }
}
