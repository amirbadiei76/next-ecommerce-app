import ProductCard, { TProductCard } from '@/components/not-shared/product/ProductCard';
import Container from '@/components/shared/layout/Container';
import ProductSkeleton from '@/components/not-shared/product/ProductSkeleton';

async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}
  

export default async function Products() {
    
    try {
        const products = await getProducts();

        return (
            <Container >
                <section>
                    <h2 className="text-3xl font-bold mb-6">All Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            products === undefined ? 
                            Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
                            :                       
                            products.map((item: TProductCard) => {
                                return <ProductCard key={item.id} {...item} />
                            })
                        }
                    </div>
                </section>
            </Container>
        )
    }
    catch(e) {
        return <div className="text-red-500">Failed to load products. Please try again later.</div>;
    }
}
