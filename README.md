# MERN-Ecommerce Frontend

This is the frontend for a MERN stack e-commerce application, built as part of a 5-day bootcamp by DevTown.

## Disclaimer

This project was created as part of a learning experience and may not be a fully-featured, production-ready application.

## Features

*   **User Authentication:** Sign up and log in functionality.
*   **Product Browsing:** View a list of products with details like price, description, and rating.
*   **Search:** Search for products by name, description, brand, or category.
*   **Shopping Cart:** Add products to a shopping cart and view the cart.
*   **User Profile:** A basic user profile page.

## Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For routing and navigation within the application.
*   **Material-UI:** A popular React UI framework.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Vite:** A fast build tool for modern web projects.

## Getting Started

### Prerequisites

*   Node.js and pnpm (or npm/yarn) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd MERN-Ecommerce/Frontend
    ```
3.  Install the dependencies:
    ```sh
    pnpm install
    ```

### Running the Application

To start the development server, run:

```sh
pnpm dev
```

This will start the application on `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
.
├── public/
│   └── ...
├── src/
│   ├── App.jsx
│   ├── Carousal.jsx
│   ├── Cart.jsx
│   ├── Flipkart_logo.jsx
│   ├── index.jsx
│   ├── Login.jsx
│   ├── Navbar.jsx
│   ├── Profile.jsx
│   ├── Search.jsx
│   ├── Signup.jsx
│   ├── styles.css
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.ts
```

### Key Components

*   **`App.jsx`:** The main component that handles routing and renders other components.
*   **`Navbar.jsx`:** The navigation bar at the top of the page.
*   **`Login.jsx` / `Signup.jsx`:** Components for user authentication.
*   **`Search.jsx`:** The search results page.
*   **`Cart.jsx`:** The shopping cart page.
*   **`Profile.jsx`:** The user profile page.
*   **`Carousal.jsx`:** The image carousel on the home page.

## API Endpoints

The frontend interacts with a backend API for data. The base URL for the API is `https://flipkart-backend-os9f.onrender.com`.

*   `/products`: Fetches all products.
*   `/carts`: Fetches all carts.
*   `/cart/add`: Adds a product to the cart.
*   `/auth/login`: Logs in a user.
*   `/auth/signup`: Signs up a new user.

## Future Improvements

*   Implement a proper "Save for Later" functionality in the cart.
*   Add more robust error handling and user feedback.
*   Replace hardcoded user IDs with dynamic data from the authenticated user.
*   Implement order placement and history.
*   Add more detailed product pages.
