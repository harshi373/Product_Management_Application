# Product Management Application

A simple **Product Management Application** built with **React (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.  
The app demonstrates basic **CRUD operations** (Create, Read, Update, Delete) for managing products.

---

## Features

- 📦 **Add Products** with name, price, and description  
- 📝 **Update Products** in real-time  
- 🗑️ **Delete Products**  
- 🔍 **View Products** in a clean UI  
- 🎨 **Simple React + Material UI interface**  
- 🌐 **RESTful API using Node.js & Express**  
- 🗄️ **MongoDB database for persistent storage**  

---

## Tech Stack

- **Frontend:** React, Material UI  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Other Tools:** Axios, Mongoose  

---

## How It Works

1. **Frontend (React)**
   - Users interact with the UI to add, view, update, or delete products.
   - Forms capture product data like **name**, **price**, and **description**.
   - Axios is used to send **HTTP requests** to the backend API.

2. **Backend (Node.js + Express)**
   - Receives requests from the frontend.
   - Performs operations on the **MongoDB database** using **Mongoose** models.
   - Routes handle different actions:
     - **GET /api/products** → Fetch all products  
     - **POST /api/products** → Add a new product  
     - **PUT /api/products/:id** → Update an existing product  
     - **DELETE /api/products/:id** → Delete a product  

3. **Database (MongoDB)**
   - Stores product information persistently.
   - Each product has fields like **name**, **price**, **description**, and **ID**.
   - Mongoose ensures data validation and schema structure.

4. **End-to-End Flow**
   - User submits a form → Frontend sends request → Backend updates database → Frontend fetches updated data → UI reflects the changes in real-time.

---

## Author

**Harshitha Kalluri**  
- [GitHub](https://github.com/harshi373/Product_Management_Application) 
- [LinkedIn](https://www.linkedin.com/in/harshitha-kalluri-57449b253/)
- [demonstration link]( https://github.com/harshi373/Product_Management_Application)
