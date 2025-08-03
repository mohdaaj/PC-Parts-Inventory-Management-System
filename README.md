# 🖥️ PC Parts Inventory Management System

A full-stack inventory management system tailored for managing stock, orders, and suppliers of PC components such as CPUs, GPUs, RAM, and more.

---
## My Trello
- **[Trello](https://trello.com/invite/b/6889fa44f2109b79c564c9b2/ATTI3dabdfe95b627c30dfc15dc605372827DF923D12/pc-parts-inventory-management-system)**

---

## 📦 Features

- 🔍 **Product Catalog** – Browse, add, edit, and delete PC parts with images and details.
- 📉 **Stock Level Tracking** – Automatically update stock after orders, with low-stock alerts.
- 🛒 **Order Management** – Place and view orders with itemized summaries and total price calculations.
- 📇 **Supplier Management** – Store supplier names, contacts, and related products.
- ⚠️ **Low Stock Alerts** – Highlights products that are running low to avoid shortages.

---

## 🧱 Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| code languages| CSS/JS             |
| Frontend      | React.js           |
| Backend       | Node.js + Express  |
| Database      | MongoDB (Mongoose) |


---


## 🌐 Web Routes (Views)

| Method | Route                  | Purpose                              | Authentication |
|--------|------------------------|--------------------------------------|----------------|
| GET    | /users                 | Show signup form                     | ❌ No           |
| POST   | /users                 | Create user account                  | ❌ No           |
| GET    | /users/login           | Show login form                      | ❌ No           |
| POST   | /users/login           | Authenticate user                    | ❌ No           |
| GET    | /products              | Show all PC parts                    | ✅ Yes          |
| GET    | /products/new          | Show form to add new product         | ✅ Yes          |
| POST   | /products              | Add new product                      | ✅ Yes          |
| GET    | /products/:id          | Show product details                 | ✅ Yes          |
| GET    | /products/:id/edit     | Show edit form for a product         | ✅ Yes          |
| PUT    | /products/:id          | Update product                       | ✅ Yes          |
| DELETE | /products/:id          | Delete product                       | ✅ Yes          |
| GET    | /suppliers             | Show list of suppliers               | ✅ Yes          |
| GET    | /cart                  | Show all produts                     | ✅ Yes          |


### ✅ Web Route Summary
- **Total Web Routes**: 13  
- 🔐 **Require Authentication**: 9  
- 🌐 **Publicly Accessible**: 4

---

## 🔌 API Routes (JSON)

| Method | Route                   | Purpose                              | Authentication |
|--------|-------------------------|--------------------------------------|----------------|
| POST   | /api/users              | Create user (API)                    | ❌ No           |
| POST   | /api/users/login        | Login user (API)                     | ❌ No           |
| GET    | /api/users/profile      | Get user (API)                       | ✅ Yes          |
| GET    | /api/products           | List all PC parts                    | ✅ Yes          |
| GET    | /api/products/:id       | Get product by ID                    | ✅ Yes          |
| POST   | /api/products           | Create new product                   | ✅ Yes          |
| PUT    | /api/products/:id       | Update product                       | ✅ Yes          |
| DELETE | /api/products/:id       | Delete product                       | ✅ Yes          |
| GET    | /api/suppliers          | List suppliers                       | ✅ Yes          |
| GET    | /api/cart               | List all products                    | ✅ Yes          |
| GET    | /api/cart/:id           | Get order by ID                      | ✅ Yes          |
| POST   | /api/cart               | Create new order                     | ✅ Yes          |

### ✅ API Route Summary
- **Total API Routes**: 12  
- 🔐 **Require Authentication**: 10  
- 🌐 **Publicly Accessible**: 2

---

## 📊 Combined Summary

| Route Type   | Total Routes | Auth Required | Public |
|--------------|--------------|----------------|--------|
| Web Views    | 13           | 12             | 4      |
| API (JSON)   | 12           | 10              | 3      |
| **Combined** | **25**       | **21**         | **7**  |

---

