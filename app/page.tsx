import HomeLatest from "@/components/not-shared/home/HomeLatest";
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
                <HomeLatest />
            </Container>
        );
    }
    catch (e) {
      return <div className="text-red-500">Failed to load latest products. Please try again later.</div>;
    }
}
