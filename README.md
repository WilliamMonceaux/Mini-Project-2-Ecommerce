# Mini-Project-2: Full-Stack E-Commerce Platform

An interactive, responsive full-stack E-Commerce application designed to deliver a seamless shopping experience. This project integrates a React-based frontend utilizing Material UI (MUI) components with an Express backend, leveraging external APIs to handle dynamic product data, user authentication, and shopping cart operations.

---

## Tech Stack & Resources

### Frontend
- **React**: Component-based user interface architecture.
- **Material UI (MUI)**: Production-ready component library used to ensure slick UI/UX, responsive layouts, and robust form structures.
- **MUI Sign-Up Template**: Used as the foundational baseline for robust, accessible user onboarding forms.

### Backend & Data
- **Express**: Node.js web application framework handling server routing and API configurations.
- **Fake Store API**: Integrated to simulate real-world e-commerce inventory, fetching diverse product collections dynamically.

### Design & Reference
- **Class Lecture Notes & Resources**: Theoretical frameworks and full-stack patterns applied directly to implementation.

---

##  Features Implemented

-  **Dynamic Product Fetching**: Live server-side calls fetching products seamlessly from the Store API.
-  **Clickable Promotional Banners**: Engaging promotional landing items that redirect users straight to targeted categories/shop views.
-  **Real-Time Search Bar**: Instant, intuitive client-side keyword filtering to find specific products instantly.
-  **Advanced Filter & Sort**: Responsive controls to sort items by price, rating, or categories for an optimized shopping flow.
-  **Secure Sign-Up Form**: Fully interactive user registration with localized state persistence to track and save user credentials securely.
-  **Persistent Shopping Cart**: Fully operational "Add to Cart" ecosystem with a dedicated cart view tracking items, quantities, and real-time total updates.

---

##  Current Work-in-Progress & Roadmap

> **Note on Project Status:** This project is actively being developed and undergoes regular iterations as of 5/18/2026.

### Current & Upcoming Engineering Milestones:
1. **Database Integration**: Migrating from transient local memory / local storage architectures to a permanent, database schema (e.g., MongoDB / PostgreSQL) to securely handle user records, product catalogues, and persistent order histories.
2. **Backend Refactoring**: Optimizing Express server architecture by abstracting business logic into dedicated controllers, scaling robust middleware validation rules, and streamlining API routes for enhanced performance and security.
3. **Advanced Security**: Implementing robust hashing algorithms (e.g., bcrypt) for passwords alongside JSON Web Token (JWT) stateless session handling.

---

## Getting Started & Installation

Follow these steps to configure your local workspace and spin up the development environment.

### Prerequisites
Make sure you have **Node.js** (v16.x or higher) and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mini-project-2.git
cd mini-project-2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the React Localhost
```bash 
npm run dev
```

### 4. Fetch Products
```bash
npm run start
```

