// store/cartStore.ts
import { create } from "zustand";

export type CartItem = {
  itemId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  deleteItem: (itemId: number) => void;
  increaseItemQuantity: (itemId: number) => void;
  decreaseItemQuantity: (itemId: number) => void;
  clearCart: () => void;

  // selectors
  getTotalCartQuantity: () => number;
  getTotalCartPrice: () => number;
  getCurrentQuantityById: (id: number) => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addItem: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),

  deleteItem: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.itemId !== itemId),
    })),

  increaseItemQuantity: (itemId) =>
    set((state) => {
      const cart = state.cart.map((item) => {
        if (item.itemId === itemId) {
          const quantity = item.quantity + 1;
          return { ...item, quantity, totalPrice: quantity * item.unitPrice };
        }
        return item;
      });
      return { cart };
    }),

  decreaseItemQuantity: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.itemId === itemId);
      if (!existingItem) return { cart: state.cart };

      if (existingItem.quantity === 1) {
        return {
          cart: state.cart.filter((item) => item.itemId !== itemId),
        };
      } else {
        const cart = state.cart.map((item) => {
          if (item.itemId === itemId) {
            const quantity = item.quantity - 1;
            return {
              ...item,
              quantity,
              totalPrice: quantity * item.unitPrice,
            };
          }
          return item;
        });
        return { cart };
      }
    }),

  clearCart: () => set({ cart: [] }),

  getTotalCartQuantity: () =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),

  getTotalCartPrice: () =>
    get().cart.reduce((sum, item) => sum + item.totalPrice, 0),

  getCurrentQuantityById: (id: number) =>
    get().cart.find((item) => item.itemId === id)?.quantity ?? 0,
}));
