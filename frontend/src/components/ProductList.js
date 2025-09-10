import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList({ products, onProductUpdated, onProductDeleted }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // filter + sort
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, px: { xs: 1, sm: 2, md: 3 }, pl: { xs: 1, sm: 4, md: 7, lg: 10 } }}>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <TextField
          label="Search Products"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FormControl variant="outlined">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', marginTop: 40, fontSize: 22, fontWeight: 500 }}>
          No products found.
        </div>
      ) : (
        <Grid container spacing={3} justifyContent="flex-start" alignItems="stretch">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id} display="flex">
              <ProductCard
                product={product}
                onProductUpdated={onProductUpdated}
                onProductDeleted={onProductDeleted}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;
