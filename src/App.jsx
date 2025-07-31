import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Carousel from "./Carousal";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RequireAuth({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function AppContent({ products }) {
  const location = useLocation();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const featuredCategories = [
    { value: "smartphones", label: "Smartphones" },
    { value: "laptops", label: "Laptops" },
    { value: "fragrances", label: "Fragrances" },
    { value: "mens-shirts", label: "Mens Shirts" },
  ];

  const productsByCategory = {};
  featuredCategories.forEach((cat) => {
    productsByCategory[cat.value] = products
      .filter((item) => item.category === cat.value)
      .slice(0, 4);
  });

  useEffect(() => {
    if (products.length && chartRef.current) {
      const prices = products.map((p) => p.price);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: prices.map((_, i) => `#${i + 1}`),
          datasets: [
            {
              label: "Price Distribution",
              data: prices,
              backgroundColor: "rgba(59, 130, 246, 0.5)",
              borderColor: "rgba(59, 130, 246, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "Product Price Distribution" },
          },
          scales: {
            x: { title: { display: true, text: "Product" } },
            y: { title: { display: true, text: "Price ($)" } },
          },
        },
      });
    }
  }, [products]);

  return (
    <>
      <ToastContainer position="top-center" />
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}

      <Container maxWidth="xl" sx={{ mt: 4, px: 2 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <>
                  <Carousel />

                  {featuredCategories.map(
                    (cat) =>
                      productsByCategory[cat.value]?.length > 0 && (
                        <div key={cat.value} className="mb-16">
                          <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            {cat.label}
                          </h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {productsByCategory[cat.value].map(
                              (product, idx) => (
                                <div
                                  key={product.id || idx}
                                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between h-full"
                                >
                                  <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full aspect-[4/3] object-contain mb-3 rounded"
                                  />
                                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                                    {product.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                    {product.description}
                                  </p>

                                  <div className="mt-auto space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-blue-600 font-bold text-lg">
                                        ₹{product.price}
                                      </span>
                                      {product.discountPercentage && (
                                        <span className="text-green-600 text-sm">
                                          {product.discountPercentage}% off
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex justify-between text-xs text-gray-500">
                                      <span>Rating: {product.rating} ★</span>
                                      <span>Stock: {product.stock}</span>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      Brand: {product.brand}
                                    </div>

                                    <div className="flex gap-2 mt-2">
                                      <button
                                        className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
                                        onClick={() => {
                                          fetch(`${import.meta.env.RENDER_API_URL}/cart/add`,
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                ...product,
                                                productId: product.id,
                                                quantity: 1,
                                                user: 2, // replace this later
                                                id: product.id,
                                              }),
                                            }
                                          )
                                            .then((res) => res.json())
                                            .then(() => {
                                              toast.success("Added to cart!");
                                            })
                                            .catch(() => {
                                              toast.error(
                                                "Failed to add to cart!"
                                              );
                                            });
                                        }}
                                      >
                                        Add to Cart
                                      </button>
                                      <button
                                        className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 transition"
                                        onClick={() => {
                                          fetch(`${import.meta.env.RENDER_API_URL}/cart/add`,
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                ...product,
                                                productId: product.id,
                                                quantity: 1,
                                                user: 2,
                                                id: product.id,
                                              }),
                                            }
                                          )
                                            .then((res) => res.json())
                                            .then(() => {
                                              window.location.href = "/cart";
                                            })
                                            .catch(() => {
                                              toast.error(
                                                "Failed to buy the product!"
                                              );
                                            });
                                        }}
                                      >
                                        Buy Now
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )
                  )}
                </>
              </RequireAuth>
            }
          />
          <Route
            path="/search"
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.RENDER_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        let allProducts = [];
        if (Array.isArray(data) && data[0]?.products) {
          data.forEach((doc) => {
            if (Array.isArray(doc.products)) {
              allProducts = allProducts.concat(doc.products);
            }
          });
        } else if (Array.isArray(data)) {
          allProducts = data;
        }
        setProducts(allProducts);
      });
  }, []);

  return (
    <Router>
      <AppContent products={products} />
    </Router>
  );
}

export default App;
