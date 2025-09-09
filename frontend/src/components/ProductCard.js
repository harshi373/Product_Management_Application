import React from "react";

function ProductCard({ product, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p><b>Price:</b> ${product.price}</p>
      <p>{product.description}</p>
      <p><i>{product.category}</i></p>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
}

export default ProductCard;
