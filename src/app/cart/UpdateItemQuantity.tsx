"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import React from "react";

const UpdateItemQuantity = ({ itemId, currentQuantity }: any) => {
  const { decreaseItemQuantity, increaseItemQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => decreaseItemQuantity(itemId)}>-</Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={() => increaseItemQuantity(itemId)}>+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
