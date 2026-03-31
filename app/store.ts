import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: string;
  nazov: string;
  cena: string;
  foto: string;
  size: string;
}

interface CartStore {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  setCartOpen: (open: boolean) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      addItem: (item) => set((state) => ({ 
        items: [...state.items, item],
        isCartOpen: true 
      })),
      removeItem: (index) => set((state) => ({
        items: state.items.filter((_, i) => i !== index)
      })),
      setCartOpen: (open) => set({ isCartOpen: open }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'virex-cart-storage', // Unikátny názov tvojho košíka v pamäti
      storage: createJSONStorage(() => localStorage), // Tu hovoríme, kam to uložiť
    }
  )
);