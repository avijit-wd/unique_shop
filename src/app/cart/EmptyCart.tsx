import Link from "next/link";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link href="/">&larr; Back to menu</Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;
