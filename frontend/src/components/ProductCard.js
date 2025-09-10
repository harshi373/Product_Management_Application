import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  TextField,
} from "@mui/material";
import { deleteProduct, updateProduct } from "../services/productService";

function ProductCard({ product, onProductUpdated, onProductDeleted }) {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(product);

  const handleDelete = async () => {
  const confirmDelete = window.confirm(
    `Are you sure you want to delete "${product.name}"?`
  );
  if (!confirmDelete) return; // exit if user cancels

  try {
    await deleteProduct(product._id); // backend delete
    onProductDeleted(product._id);    // update frontend state
    alert("Product deleted successfully!");
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete product. Please try again.");
  }
};

const handleEditSave = async () => {
  try {
    const updated = await updateProduct(product._id, editData);
    onProductUpdated(updated);
    setOpen(false);
    alert("Product updated successfully!");
  } catch (error) {
    console.error("Error updating product:", error);
    alert("Failed to update product. Please try again.");
  }
};

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>{product.description}</Typography>

        <Button color="primary" onClick={() => setOpen(true)}>
          Edit
        </Button>
        <Button color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardContent>

      {/* Edit dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            label="Name"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            label="Price"
            type="number"
            value={editData.price}
            onChange={(e) => setEditData({ ...editData, price: e.target.value })}
          />
          <TextField
            label="Description"
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          />
          <Button onClick={handleEditSave} variant="contained">
            Save
          </Button>
        </div>
      </Dialog>
    </Card>
  );
}

export default ProductCard;
