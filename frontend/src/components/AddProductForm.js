import React, { useState } from "react";
import { Button, TextField, Paper, Typography, Box } from "@mui/material";
import { addProduct } from "../services/productService";


function AddProductForm({ onProductAdded }) {
  const [product, setProduct] = useState({ name: "", price: "", description: "", category: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await addProduct(product);
      onProductAdded(newProduct);
  setProduct({ name: "", price: "", description: "", category: "" });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <Paper elevation={4} sx={{ p: 4, width: 350, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <TextField
            label="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
            fullWidth
          />
          <TextField
            label="Price"
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
            fullWidth
            inputProps={{ min: 0 }}
          />
          <TextField
            label="Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            multiline
            rows={2}
            fullWidth
            required
          />
          <TextField
            label="Category"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Add Product
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default AddProductForm;
