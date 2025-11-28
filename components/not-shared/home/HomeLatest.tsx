"use client";

import { useEffect, useState } from "react";
import LatestProductsSection from "./LatestProductsSection";
import LatestProductsSkeleton from "./LatestProductsSkeleton";

export default function HomeLatest() {
  const [latest, setLatest] = useState([]);
  const [loadingLatest, setLoadingLatest] = useState(true);
  const [errorLatest, setErrorLatest] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("/api/products/latest");

        if (!res.ok) throw new Error("Failed to load latest products");

        const data = await res.json();
        setLatest(data);
      } catch (err: any) {
        setErrorLatest(err.message);
      } finally {
        setLoadingLatest(false);
      }
    };

    fetchLatest();
  }, []);

  return (
    <section className="space-y-12">
      {loadingLatest && <LatestProductsSkeleton />}
      {errorLatest && <div className="text-red-600">{errorLatest}</div>}
      {!loadingLatest && !errorLatest && (
        <LatestProductsSection products={latest} />
      )}
    </section>
  );
}
