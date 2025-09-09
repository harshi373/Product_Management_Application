import React, { useEffect, useState } from "react";
import { getProducts, addProduct } from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Fetch products on load
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(newProduct);
    setNewProduct({ name: "", price: "" });
    fetchData(); // refresh list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Show Products */}
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
