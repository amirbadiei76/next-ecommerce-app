"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useFetch } from "@/components/shared/hooks/useFetch";
import LatestProductsSkeleton from "../home/LatestProductsSkeleton";
import ProductCard, { TProductCard } from "./ProductCard";

export default function RelatedProducts({ productId }: { productId: number }) {
    const {isLoading, data: related, error} = useFetch<TProductCard[]>(`/api/products/related?id=${productId}`);

    if (isLoading) return <LatestProductsSkeleton />
    if (error) return <div className="mb-6 text-red-600">Fetch error</div>;
    if (related === null || related.length === 0) return <div className="mb-6">No Related Products Found</div>;

    return (
        <section>
            <h3 className="text-lg font-semibold mb-6">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {related.map((p) => <ProductCard key={p.id} {...p} />)}
            </div>
        </section>
    );
}
