import AddToCartBtn from '@/components/not-shared/cart/AddToCartBtn';
import Container from '@/components/shared/layout/Container';
import React from 'react'

interface IProductDetailProps {
    params: Promise<{id: string}>,
    searchParams: Promise<{}>
}

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}

export default async function ProductItem({params}: IProductDetailProps) {
    const { id } = await params;

    try {
        const product = await getProduct(id);

        return (
            <Container >
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price} $</p>
                <AddToCartBtn product={product} />
            </Container>
        )
    }
    catch(e) {
        return <div className="text-red-500">Failed to load product. Please try again later.</div>;
    }
}
