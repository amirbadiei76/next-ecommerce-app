import ProductCard from '@/components/not-shared/product/ProductCard';
import Container from '@/components/shared/layout/Container';

export default function Products() {
    const dummyProducts = [
        { id: 0, title: 'Product 0', price: 19.99, image: './assets/images/product0.png' },
        { id: 1, title: 'Product 1', price: 29.99, image: './assets/images/product1.png' },
        { id: 2, title: 'Product 2', price: 39.99, image: './assets/images/product2.png' },
        { id: 3, title: 'Product 3', price: 49.99, image: './assets/images/product3.png' },
        { id: 4, title: 'Product 4', price: 59.99, image: './assets/images/product4.png' },
        { id: 5, title: 'Product 5', price: 69.99, image: './assets/images/product5.png' },
        { id: 6, title: 'Product 6', price: 79.99, image: './assets/images/product6.png' },
        { id: 7, title: 'Product 7', price: 89.99, image: './assets/images/product7.png' },
    ];

    return (
        <Container >
            <section>
                <h2 className="text-3xl font-bold mb-6">All Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        dummyProducts.map((item) => {
                            return <ProductCard key={item.id} {...item} />
                        })
                    }
                </div>
            </section>
        </Container>
    )
}
