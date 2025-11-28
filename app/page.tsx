import ProductCard, { TProductCard } from "@/components/not-shared/product/ProductCard";
import Container from "@/components/shared/layout/Container";
import { HeroSection } from "@/components/shared/layout/HeroSection";
import HomeHero from "@/components/shared/layout/HomeHero";
import ProductSkeleton from "@/components/shared/layout/ProductSkeleton";
import { getLatestProducts } from "@/services/Products";
import Link from "next/link";

export const metadata = {
  title: "E-commerce App | Home",
  description: "Buy the latest products with amazing discounts.",
  openGraph: {
    title: "E-commerce App",
    description: "Explore our newest arrivals.",
  },
};

export default async function Home() {

    try {
        const products: TProductCard[] = await getLatestProducts();
    
        return (
            <Container >
                <HomeHero />
                <section className=" flex flex-col gap-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Latest Products</h2>
                        <Link href="/products" className="text-sm text-indigo-600 hover:underline">View all</Link>
                    </div>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 justify-between">
                      {
                        products === undefined ? 
                        Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
                        :
                        (
                          products.map((item) => {
                            return <ProductCard key={item.id} {...item} />
                          })
                        )
                      }
                    </div>
                </section>
            </Container>
        );
    }
    catch (e) {
      return <div className="text-red-500">Failed to load latest products. Please try again later.</div>;
    }
}
