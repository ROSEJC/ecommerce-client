import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import LoginPage from "./components/AuthPages/LoginPage";
import Detail from "./components/Detail/Details";
import SignupPage from "./components/AuthPages/SignupPage";
import SearchModal from "./components/Search Model/SearchModel";
import Cart from "./components/Cart Cards/Cart";
import OrderPage from "./components/OrderPage/OrderPageTemplate";

import AdminRoute from "./components/AdminRoutes/AdminRoute";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import FavoriteTable from "./components/FavoritePage/FavoriteTable";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === null) {
      localStorage.setItem("darkMode", "false"); // mặc định là sáng
      return false;
    }
    return stored === "true"; // chuyển chuỗi thành boolean
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="px-0 xl:px-[300px] lg:px-[100px] h-fit dark:bg-gray-900 dark:text-white">
        <Routes>
          {/* Main layout routes */}
          <Route
            element={
              <MainLayout
                key={tokenValid}
                onToggleSearch={() => setShowSearch(true)}
                onToggleDarkMode={() => {
                  setDarkMode((prev) => {
                    const newValue = !prev;
                    localStorage.setItem("darkMode", newValue.toString());
                    return newValue;
                  });
                }}
              />
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<FavoriteTable />} />
            <Route path="/order" element={<OrderPage />} />
          </Route>

          {/* Auth layout routes */}
          {/*No header and footer pages */}
          <Route element={<AuthLayout />}>
            <Route
              path="/login"
              element={<LoginPage setTokenValid={setTokenValid} />}
            />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Routes>

        {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
      </div>
    </Router>
  );
}

export default App;
