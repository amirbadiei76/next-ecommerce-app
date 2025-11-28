"use client";

import { useEffect, useState } from "react";
import { HeroSkeleton } from "./HeroSkeleton";
import { HeroError } from "./HeroError";
import { HeroSection } from "./HeroSection";

type HeroData = {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
};

export default function HomeHero() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("/api/hero");

        if (!res.ok) {
          throw new Error("Failed to fetch hero");
        }

        const data = await res.json();
        setHero(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  
  if (loading) return <HeroSkeleton />;
  if (error) return <HeroError />;
  if (hero) return <HeroSection data={hero} />;

  return null;
}
