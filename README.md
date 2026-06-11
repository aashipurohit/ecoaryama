# EcoAryama (Aryama)

Welcome to the **EcoAryama** repository! This is an e-commerce platform project designed to offer a seamless shopping experience. 

Currently, the project structure is split into two main directories: `frontend` and `backend`. The frontend is actively being developed using modern web technologies, while the backend is set up as a placeholder for future implementation.

## 📂 Project Structure

```
ecoaryama/
├── backend/               # Placeholder for the backend server (empty)
└── frontend/              # Frontend React application
    ├── public/            # Static assets
    ├── src/               # React source code
    │   ├── assets/        # Images and local data
    │   ├── components/    # Reusable UI components (Cart, Common, Layout)
    │   ├── context/       # Global state management (ShopContext)
    │   ├── pages/         # Application routes (Home, Collection, Product, etc.)
    │   ├── App.jsx        # Main application routing
    │   ├── index.css      # Global styles (Tailwind CSS)
    │   └── main.jsx       # React application entry point
    ├── index.html         # Main HTML file
    ├── package.json       # Frontend dependencies and scripts
    ├── tailwind.config.js # Tailwind CSS configuration
    └── vite.config.js     # Vite configuration
```

## ✨ Features

The frontend application includes the following features and pages:
- **Home Page**: Features a Hero section, Categories, Latest Collections, Best Sellers, Product Highlights, Our Policy, and a Newsletter subscription box.
- **Product Collection**: Browse all products with filtering and searching capabilities.
- **Product Details**: Detailed view of individual products.
- **Cart & Checkout Flow**: Add items to cart and proceed to place an order.
- **User Authentication Pages**: Login UI setup.
- **Additional Pages**: About, Contact, and Order History pages.
- **State Management**: Built using React Context API to manage cart, products, search, and UI state globally.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Linting**: [ESLint](https://eslint.org/)

### Backend
- *Currently empty and awaiting implementation.*

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- npm or yarn

### Installation & Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL provided in your terminal (usually `http://localhost:5173`).

### Available Scripts (Frontend)
- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint to check for code quality issues.
