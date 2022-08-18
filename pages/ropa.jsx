import React from "react";
import FilterProducts from "../components/FilterProducts";
import Layout from "../components/Layout";
import ProductsContainer from "../components/ProductsContainer";

function ropa() {
  return (
    <Layout title="Ropa">
      <div className="flex gap-3">
        <FilterProducts />
        <ProductsContainer />
      </div>
    </Layout>
  );
}

export default ropa;
