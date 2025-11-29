"use client";

import { useEffect, useState } from "react";
import LatestProductsSection from "./LatestProductsSection";
import LatestProductsSkeleton from "./LatestProductsSkeleton";
import { useFetch } from "@/components/shared/hooks/useFetch";
import { TProductCard } from "../product/ProductCard";

export default function LatestproductsWrapper() {
    const { data: latest, error, isLoading } = useFetch<TProductCard[]>("/api/products/latest");

    return (
        <section className="space-y-12">
            {isLoading && <LatestProductsSkeleton />}
            {error && <div className="text-red-600">{error}</div>}
            {latest && <LatestProductsSection products={latest} />}
        </section>
    );
}
