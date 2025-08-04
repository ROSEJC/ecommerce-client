import Header from "../components/Footer&Header/Header";
import Footer from "../components/Footer&Header/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ onToggleSearch, onToggleDarkMode, tokenValid }) => {
  return (
    <>
      <Header
        key={tokenValid}
        onToggleSearch={onToggleSearch}
        onToggleDarkMode={onToggleDarkMode}
      />
      <main className="min-h-[650px]">
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
