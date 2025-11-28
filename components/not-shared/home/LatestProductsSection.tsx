import ProductCard, { TProductCard } from "../product/ProductCard";
  
export default function LatestProductsSection({ products }: { products: TProductCard[] }) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Latest Products</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => <ProductCard key={item.id} {...item} />)}
        </div>
      </section>
    );
}
  