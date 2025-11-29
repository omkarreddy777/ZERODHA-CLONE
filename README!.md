
# 🔥 Zerodha Clone — Full MERN Stack Trading Platform

A fully functional trading platform inspired by **Zerodha**, built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This project includes a landing page, secure backend APIs, and a complete trading dashboard UI with market watchlist, holdings, funds, orders, and profile management.

---

# 🚀 Overview

This project is designed to replicate the essential features of the Zerodha trading platform with a clean, scalable architecture.  
The system is divided into **three major modules**:

1. **Frontend (Landing Page)** – A modern, responsive React UI for marketing, signup, pricing, product pages, etc.  
2. **Dashboard (React App)** – A full trading dashboard UI with charts, watchlist, orders, holdings, positions, profile management, and more.  
3. **Backend (Node + MongoDB)** – REST API for authentication, holdings, positions, funds, and orders.

This modular architecture ensures easy deployment, maintenance, and scaling.

---

# ✨ Key Features

### 🌐 Frontend (Landing Page)
- Beautiful, minimal Zerodha-style design  
- Navigation: Signup, About, Products, Pricing, Support  
- Fully mobile responsive  
- Modern UI/UX with smooth layout  

### 📊 Dashboard (Trading UI)
- Watchlist with live-like price display  
- Orders, Holdings, Positions, Funds pages  
- Detailed equity analytics panel  
- Buy/Sell slide windows  
- Profile dropdown with logout  
- Clean and lightweight CSS  
- Sidebar toggle for mobile  

### 🛠 Backend (Node + Express + MongoDB)
- JWT-based authentication  
- MongoDB models for Orders, Holdings, Positions, Funds, Users  
- REST APIs to fetch, update, and manage trading data  
- High-performance schema design  
- Clean controller & model structure  

---

# 🧩 Tech Stack

### **Frontend**
- React.js  
- React Router  
- Custom CSS  
- JavaScript ES6  

### **Dashboard**
- React.js  
- Context API  
- Chart.js (Doughnut / Vertical charts)  
- Custom UI components  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  

---

# 📁 Project Folder Structure

```
Zerodha-Clone/
│── frontend/        → Landing page (React)
│── dashboard/       → Trading dashboard (React)
│── backend/         → REST API (Node.js + Express + MongoDB)
│── README.md
└── .gitignore
```

Each module is independent and can run on a different port.

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally:

---

## 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

---

## 2️⃣ Install Dependencies

### Backend
```sh
cd backend
npm install
npm start
```

Create `.env`:

```
MONGO_URI=your-mongo-uri
JWT_SECRET=your-secret
PORT=5000
```

---

### Dashboard
```sh
cd dashboard
npm install
npm start
```

Runs on: **http://localhost:3001**

---

### Frontend
```sh
cd frontend
npm install
npm start
```

Runs on: **http://localhost:3000**

---

# 🧪 API Endpoints (Backend)

### Auth
```
POST    /api/auth/signup
POST    /api/auth/login
```

### Holdings
```
GET     /api/holdings
POST    /api/holdings
```

### Orders
```
GET     /api/orders
POST    /api/orders
```

### Positions
```
GET     /api/positions
```

### Funds
```
GET     /api/funds
POST    /api/funds/add
```

---

# 📦 Production Build

To build the frontend or dashboard for deployment:

```sh
npm run build
```

The build folder will be optimized for production.

---

# ⭐ Why This Project?

This project showcases:
- Full MERN-stack understanding  
- UI/UX replication skills  
- Clean component architecture  
- Real-time trading dashboard logic  
- Practical API + state management  

A perfect portfolio project for:
✔ Full Stack Developer roles  
✔ MERN Developer roles  
✔ Frontend React Developer roles  

---

# 🙌 Support

If you find this project useful, please consider ⭐ starring the repository!

---

# 📬 Contact

For queries, improvements, or collaborations:  
**Email:** your-email@example.com  
**GitHub:** https://github.com/your-username

