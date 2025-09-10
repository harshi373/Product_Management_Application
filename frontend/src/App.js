import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import { getProducts } from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);

  // Load products when app starts
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  // Add product to state
  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Update product in state (after editing)
  const handleProductUpdated = (updatedProduct) => {
    setProducts(
      products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
    );
  };

  // Delete product from state
  const handleProductDeleted = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <>
      <header>Product Management App</header>
      <div className="app-container">
        <AddProductForm onProductAdded={handleProductAdded} />
        <ProductList
          products={products}
          onProductUpdated={handleProductUpdated}
          onProductDeleted={handleProductDeleted}
        />
      </div>
    </>
  );
}

export default App;
