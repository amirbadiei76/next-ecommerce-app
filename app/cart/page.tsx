"use client";
import Container from '@/components/shared/layout/Container'

import { useCartStore } from "@/store/CartStore";
import React from 'react'

export default function Cart() {
    const { items, removeFromCart, clearCart } = useCartStore();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (items.length === 0)
      return <h2 className="text-2xl font-bold">Your cart is empty.</h2>;

    return (
      <Container >
          <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
          
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded">
                <img src={item.image} className="w-20 h-20 object-contain" />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.price} × {item.quantity}$</p>
                </div>

                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-bold">
            Total: {total.toFixed(2)}$
          </div>

          <button
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={clearCart}
          >
            Clear Cart
          </button>

      </Container>
    )
}
