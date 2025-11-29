"use client";

import { HeroSkeleton } from "./HeroSkeleton";
import { HeroError } from "./HeroError";
import { HeroSection } from "./HeroSection";
import { useFetch } from "../../shared/hooks/useFetch";

type HeroData = {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
};

export default function HeroWrapper() {
  const { data: hero, error, isLoading } = useFetch<HeroData>('/api/hero');
  
  if (isLoading) return <HeroSkeleton />;
  if (error) return <HeroError />;
  if (hero) return <HeroSection data={hero} />;

  return null;
}
