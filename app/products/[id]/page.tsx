import Container from '@/components/shared/layout/Container';
import React from 'react'

interface IProductDetailProps {
    params: Promise<{id: number}>,
    searchParams: Promise<{}>
}

export default async function ProductItem({params}: IProductDetailProps) {
    const { id } = await params;

    const product = {
        id: id,
        title: "Mock Product",
        price: 49,
        description: "This is a fake product for UI.",
        image: "https://via.placeholder.com/400"
    }


    return (
        <main>
            <Container >
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price} $</p>
                <button className='bg-blue-400 rounded px-4 py-1.5 hover:cursor-pointer'>Add To Cart</button>
            </Container>
        </main>
    )
}
