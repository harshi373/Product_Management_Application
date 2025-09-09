import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onDelete }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
