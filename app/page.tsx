import ProductCard, { TProductCard } from "@/components/not-shared/product/ProductCard";
import Container from "@/components/shared/layout/Container";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data;
}

export default async function Home() {

    try {
        const products: TProductCard[] = await getProducts();
        const latest = products.slice(-4).reverse();
        
    
        return (
            <Container >
                <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg gap-4 p-8 mb-6">
                    <h2 className="text-4xl font-extrabold mb-4">Best Ecommerce Site</h2>
                    <p className="text-justify mb-6 text-lg">Find the latest and greatest products — fast delivery, best prices.</p>
                    <Link href='/products' className="inline-block bg-white text-indigo-700 px-5 py-2 rounded-md font-semibold">Shop Now</Link>
                </section>
                <section className=" flex flex-col gap-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Latest Products</h2>
                        <Link href="/products" className="text-sm text-indigo-600 hover:underline">View all</Link>
                    </div>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 justify-between">
                      {
                        latest.map((item) => {
                          return <ProductCard key={item.id} {...item} />
                        })
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
