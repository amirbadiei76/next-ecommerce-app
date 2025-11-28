"use client";

import { useCartStore } from "@/store/CartStore";

export default function AddToCartBtn({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-400 rounded px-4 self-center py-1.5 hover:cursor-pointer hover:bg-blue-500"
    >
      Add to Cart
    </button>
  );
}
