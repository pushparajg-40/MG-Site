import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const updateThemeImages = () => {
    const isDark = document.documentElement.classList.contains("dark");

    document.querySelectorAll(".theme-image").forEach((img: any) => {
      const newSrc = isDark ? img.dataset.dark : img.dataset.light;
      if (newSrc) img.src = newSrc;
    });
  };

  const applyTheme = (mode: Theme) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", mode);
    updateThemeImages();
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;

    const initial = saved || "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme };
};
