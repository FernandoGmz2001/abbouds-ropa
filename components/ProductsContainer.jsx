import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsContainer() {
  return (
    <div className="grid grid-cols-3 w-[70vw]">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
