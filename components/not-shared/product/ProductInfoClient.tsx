"use client";

import { useState } from "react";
import { useCartStore } from "@/store/CartStore";
import AddToCartBtn from "../cart/AddToCartBtn";

export default function ProductInfoClient({ product }: { product: any }) {
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore((s) => s.addToCart);
  const increment = () => setQty((q) => Math.min(q + 1, 99));
  const decrement = () => setQty((q) => Math.max(q - 1, 1));

//   const onAdd = () => {
//     addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: qty });
//   };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={decrement} className="w-10 h-10 border rounded">-</button>
        <div className="w-12 text-center">{qty}</div>
        <button onClick={increment} className="w-10 h-10 border rounded">+</button>
      </div>

      <AddToCartBtn qty={qty} product={product} />
    </div>
  );
}
