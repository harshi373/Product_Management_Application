import React, { useState } from "react";

function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", description: "", category: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, price: Number(form.price) });
    setForm({ name: "", price: "", description: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
