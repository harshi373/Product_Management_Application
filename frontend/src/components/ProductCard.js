import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  TextField,
  Box,
  Chip,
  Stack
} from "@mui/material";

import { deleteProduct, updateProduct } from "../services/productService";


function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function ProductCard({ product, onProductUpdated, onProductDeleted }) {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(product);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProduct(product._id);
      onProductDeleted(product._id);
      setDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting product:", error);
      setDeleteDialog(false);
    }
  };


const handleEditSave = async () => {
  try {
    // Ensure price is a number
    const updatedData = { ...editData, price: Number(editData.price) };

    console.log("🔎 Product ID being updated:", product._id);
    console.log("🔎 Payload being sent to backend:", updatedData);

    const updated = await updateProduct(product._id, updatedData);

    console.log("✅ Response from backend:", updated);

    onProductUpdated(updated);
    setOpen(false);
    alert("Product updated successfully!");
  } catch (error) {
    console.error("❌ Error updating product:", error);
    alert("Failed to update product. Please try again.");
  }
};


  return (
  <Card sx={{ width: 270, minHeight: 220, maxHeight: 290, borderRadius: 3, boxShadow: 3, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', pt: 2, pb: 1, px: 2 }}>
      {/* Category badge at top right */}
      {product.category && (
        <Chip
          label={product.category}
          color="primary"
          size="small"
          sx={{ position: 'absolute', top: 10, right: 10, zIndex: 2, fontWeight: 700 }}
        />
      )}
  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', p: 0, pb: 1 }}>
  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: 18 }} noWrap>{toTitleCase(product.name || "")}</Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1,
            minHeight: 32,
            maxHeight: 32,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            fontSize: 14
          }}
        >
          {product.description || <span style={{ color: '#bbb' }}>No description provided.</span>}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            fontSize: 17, 
            opacity: 1, 
            color: '#FFC107', // force visible amber color
            textShadow: '0 1px 4px #000' // add shadow for contrast
          }}
        >
          {typeof product.price === 'number' && !isNaN(product.price)
            ? `$${product.price.toFixed(2)}`
            : product.price && !isNaN(Number(product.price))
              ? `$${Number(product.price).toFixed(2)}`
              : 'N/A'}
        </Typography>
      </CardContent>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, pb: 0.5, pt: 0 }}>
        <Button color="primary" variant="contained" size="small" onClick={() => setOpen(true)}>
          Edit
        </Button>
        <Button color="error" variant="outlined" size="small" onClick={() => setDeleteDialog(true)}>
          Delete
        </Button>
      </Box>
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
          <TextField
            label="Category"
            value={editData.category || ''}
            onChange={(e) => setEditData({ ...editData, category: e.target.value })}
          />
          <Button onClick={handleEditSave} variant="contained">
            Save
          </Button>
        </div>
      </Dialog>
      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <Box sx={{ p: 3, minWidth: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" color="error" sx={{ fontWeight: 600 }}>
            Confirm Delete
          </Typography>
          <Typography variant="body2" align="center">
            Are you sure you want to delete "{product.name}"?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setDeleteDialog(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Card>
  );
}

export default ProductCard;
