import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Shop from "./components/Shop";
import LoginPage from "./components/LoginPage";
import Detail from "./components/Details";
import SignupPage from "./components/SignupPage";
import SearchModal from "./components/SearchModel";
import Cart from "./components/Cart";
function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);

  return (
    <div className="px-0 lg:px-[300px] h-fit">
      <Router>
        <div className="relative">
          <Header key={tokenValid} onToggleSearch={() => setShowSearch(true)} />
          <main className="min-h-[650px]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route
                path="/login"
                element={<LoginPage setTokenValid={setTokenValid} />}
              />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        </div>
      </Router>
    </div>
  );
}

export default App;
