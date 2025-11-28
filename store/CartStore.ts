import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

type CartState = {
  items: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const existing = get().items.find(i => i.id === product.id);
        if (existing) {
          set({
            items: get().items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
          });
        } else {
          set({ items: [...get().items, { id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 }]});
        }
      },
      removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);