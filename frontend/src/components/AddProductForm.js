import React, { useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import { addProduct } from "../services/productService";

function AddProductForm({ onProductAdded }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({ name: "", price: "", description: "" });

  const handleSubmit = async () => {
  try {
    const newProduct = await addProduct(product);
    onProductAdded(newProduct);
    setOpen(false);
    setProduct({ name: "", price: "", description: "" });
    alert("Product added successfully!");
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Failed to add product. Please try again.");
  }
};


  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => setOpen(true)}
      >
        Add Product
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            label="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <TextField
            label="Price"
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <TextField
            label="Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
          <Button onClick={handleSubmit} variant="contained">
            Save
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default AddProductForm;
