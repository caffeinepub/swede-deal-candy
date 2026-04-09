import type { CartItem } from "@/types";
import { createContext, useContext, useState } from "react";

interface CartContextValue {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (productName: string, unitPrice: number) => void;
  updateQty: (productName: string, delta: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(productName: string, unitPrice: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.productName === productName);
      if (existing) {
        return prev.map((i) =>
          i.productName === productName
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { productName, unitPrice, quantity: 1 }];
    });
  }

  function updateQty(productName: string, delta: number) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.productName === productName
            ? { ...i, quantity: i.quantity + delta }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, cartTotal, addToCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
