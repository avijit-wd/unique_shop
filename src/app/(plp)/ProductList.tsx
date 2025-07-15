"use client";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "./graphql/queries";
import ProductItem from "./ProductItem";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";

export default function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  const manipulatedData = data?.products?.edges?.map((item: any) => ({
    id: item.node.id,
    name: item.node.name,
    unitPrice: Math.floor(Math.random() * 10) + 1,
    soldOut: false,
    imageUrl: "",
  }));

  if (error) {
    toast.error(error.message);
  }

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {loading
        ? Array.from({ length: 10 }, (_, index) => (
            <li key={index} className="flex gap-4 py-2">
              <Skeleton className="h-40 w-40" />
              <div className="flex grow flex-col pt-0.5">
                <Skeleton className="h-6 w-100" />

                <Skeleton className="h-4 w-16 mt-10" />
              </div>
            </li>
          ))
        : manipulatedData?.map((item: any) => (
            <ProductItem item={item} key={item.id} />
          ))}
    </ul>
  );
}
