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
    <Container sx={{ mt: 4 }}>
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

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard
              product={product}
              onProductUpdated={onProductUpdated}
              onProductDeleted={onProductDeleted}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;
