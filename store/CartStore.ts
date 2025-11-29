import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity: number;
}

type CartState = {
  items: CartItem[];
  addToCart: (product: CartItem, qty: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  subtotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, qty = 1) => {
        const existing = get().items.find(i => i.id === product.id);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
            )
          });
        } else {
          set({ items: [...get().items, { ...product, quantity: qty }] });
        }
      },
      removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      updateQuantity: (id, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter(i => i.id !== id) });
        } else {
          set({
            items: get().items.map(i => i.id === id ? { ...i, quantity: qty } : i)
          });
        }
      },
      clearCart: () => set({ items: [] }),
      subtotal: () => get().items.reduce((s, i) => s + i.price * i.quantity, 0),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);