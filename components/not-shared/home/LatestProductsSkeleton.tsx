import ProductSkeleton from "../product/ProductSkeleton";

export default function LatestProductsSkeleton() {
    return (
      <section className="space-y-6">
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => <ProductSkeleton key={i} />)}
        </div>
      </section>
    );
}
  