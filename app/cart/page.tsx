"use client";

import Container from '@/components/shared/layout/Container';
import { useCartStore } from "@/store/CartStore";


export default function Cart() {
    const items = useCartStore((s) => s.items);
    const updateQuantity = useCartStore((s) => s.updateQuantity);
    const removeFromCart = useCartStore((s) => s.removeFromCart);
    const clearCart = useCartStore((s) => s.clearCart)
    const subtotal = useCartStore((s) => s.subtotal)();

    const TAX_RATE = 0.09;
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + shipping;

    if (items.length === 0)
      return <Container><h2 className="text-2xl font-bold">Your cart is empty.</h2></Container>;

    return (
      <Container >
          <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
          
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-600">${item.price.toFixed(2)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 border rounded">-</button>
                  <div>{item.quantity}</div>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 border rounded">+</button>
                </div>

                <div className="w-28 text-right">
                  {(item.price * item.quantity).toFixed(2)}$
                </div>

                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white p-4 rounded">
            <div className="flex justify-between"><span>Subtotal</span><span>{subtotal.toFixed(2)}$</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{tax.toFixed(2)}$</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping.toFixed(2)}$</span></div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-lg"><span>Total</span><span>{total.toFixed(2)}$</span></div>

            <div className="mt-4">
              <button disabled={items.length === 0} className="bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
            </div>
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
