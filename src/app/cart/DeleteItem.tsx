"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

const DeleteItem = ({ itemId }: any) => {
  const { deleteItem } = useCartStore();

  return <Button onClick={() => deleteItem(itemId)}>Delete</Button>;
};

export default DeleteItem;
