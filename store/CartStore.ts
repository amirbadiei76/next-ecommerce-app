import { create } from 'zustand';

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
  
    addToCart: (product) => {
      const existing = get().items.find((i) => i.id === product.id);
  
      if (existing) {
        set({
          items: get().items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      } else {
        set({
          items: [...get().items, { ...product, quantity: 1 }],
        });
      }
    },
  
    removeFromCart: (id) => {
      set({
        items: get().items.filter((i) => i.id !== id),
      });
    },
  
    clearCart: () => set({ items: [] }),
}));