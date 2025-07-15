"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartItem from "./CartItem";
import { useCartStore } from "@/store/useCartStore";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart, clearCart } = useCartStore();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <Link href="/">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {"Avijit Biswas"}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.itemId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button>Checkout</Button>
        <Button onClick={() => clearCart()}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
