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
function App() {
  const [showSearch, setShowSearch] = useState(0);

  return (
    <Router>
      <div className="relative">
        <Header onToggleSearch={() => setShowSearch(true)} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
        {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
      </div>
    </Router>
  );
}

export default App;
