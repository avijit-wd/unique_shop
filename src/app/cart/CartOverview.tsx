"use client";

import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CartOverview() {
  const pathname = usePathname();
  const { getTotalCartQuantity, getTotalCartPrice } = useCartStore();
  const totalCartQuantity = getTotalCartQuantity();

  const totalCartPrice = getTotalCartPrice();

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} Items</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {pathname !== "/cart" && <Link href="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;
