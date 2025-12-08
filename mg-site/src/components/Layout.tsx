import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  function updateThemeImages() {
    const isDark = document.documentElement.classList.contains("dark");

    document.querySelectorAll(".theme-image").forEach((img: any) => {
      const newSrc = isDark ? img.dataset.dark : img.dataset.light;
      img.src = newSrc;
    });
  }
  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      updateThemeImages();
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      updateThemeImages();
    }
    updateThemeImages();
  }, []);

  useEffect(() => {
    // Update localStorage whenever darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      updateThemeImages();
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      updateThemeImages();
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen transition-colors duration-500 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-[90px]">
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
