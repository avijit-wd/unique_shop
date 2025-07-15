"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import { formatCurrency } from "@/lib/utils";

function ProductItem({ item }: any) {
  const { getCurrentQuantityById, addItem } = useCartStore();
  const { id, name, unitPrice, soldOut, imageUrl } = item;

  const currentQuantity = getCurrentQuantityById(id);

  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      itemId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    addItem(newItem);
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={
          imageUrl ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lGy08_AyL4qpViNL9pIVnkE16BqiZ-JoSQ&s"
        }
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>

        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                itemId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem itemId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
