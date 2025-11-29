"use client";

import { CartItem, useCartStore } from "@/store/CartStore";
import { TProductCard } from "../product/ProductCard";

export default function AddToCartBtn({ product, qty }: { product: CartItem, qty: number }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product, qty)}
      className="bg-blue-400 rounded px-4 self-center py-1.5 hover:cursor-pointer hover:bg-blue-500"
    >
      Add to Cart
    </button>
  );
}
