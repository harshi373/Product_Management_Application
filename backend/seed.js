
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();
connectDB();

// Sample data
const products = [
  // Electronics
  { name: "Smartphone", price: 25000, description: "Latest 5G smartphone", category: "Electronics" },
  { name: "Laptop", price: 60000, description: "Powerful laptop for work and gaming", category: "Electronics" },
  { name: "Headphones", price: 2000, description: "Noise-cancelling wireless headphones", category: "Electronics" },

  // Clothing
  { name: "T-Shirt", price: 500, description: "Cotton round-neck t-shirt", category: "Clothing" },
  { name: "Jeans", price: 1500, description: "Slim fit blue jeans", category: "Clothing" },
  { name: "Jacket", price: 3000, description: "Warm winter jacket", category: "Clothing" },

  // Books
  { name: "JavaScript Guide", price: 800, description: "Comprehensive JavaScript reference", category: "Books" },
  { name: "Data Science Handbook", price: 1200, description: "Practical data science techniques", category: "Books" },
  { name: "Machine Learning Basics", price: 1000, description: "Introduction to ML concepts", category: "Books" },

  // Home Appliances
  { name: "Microwave Oven", price: 7000, description: "Convection microwave oven", category: "Home Appliances" },
  { name: "Refrigerator", price: 25000, description: "Double door fridge", category: "Home Appliances" },
  { name: "Washing Machine", price: 18000, description: "Automatic washing machine", category: "Home Appliances" },

  // Dairy
  { name: "Milk", price: 50, description: "Fresh cow milk (1 litre)", category: "Dairy" },
  { name: "Cheese", price: 250, description: "Mozzarella cheese block (500g)", category: "Dairy" },
  { name: "Butter", price: 200, description: "Salted butter (500g pack)", category: "Dairy" },

  // Bakery
  { name: "Bread", price: 40, description: "Whole wheat bread loaf", category: "Bakery" },
  { name: "Croissant", price: 60, description: "Freshly baked butter croissant", category: "Bakery" },
  { name: "Chocolate Cake", price: 350, description: "Delicious chocolate cream cake", category: "Bakery" }
];

// Insert data
async function seedDB() {
  try {
    await Product.deleteMany(); // clear old data (optional)
    await Product.insertMany(products);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding error:", err);
    mongoose.connection.close();
  }
}

seedDB();
