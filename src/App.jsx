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
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="bg-white-200 flex flex-col min-h-screen max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            {/* thêm các route khác tại đây nếu cần */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
