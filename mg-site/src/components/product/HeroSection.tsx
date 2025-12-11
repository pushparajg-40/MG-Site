import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  logoDark: string;
  logoLight: string;
  bannerImage: string;
  arrowIconLight: string;
  arrowIconDark: string;
}

export function HeroSection({
  title,
  subtitle,
  logoDark,
  logoLight,
  bannerImage
}: HeroSectionProps) {
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
    }
  });

  return (
    <div className="flex md:flex-row flex-col w-full">
      <div className="flex flex-col justify-center pl-[20px] lg:pl-[50px] pr-[3px] md:pr-[180px] md:w-[50%] mt-[70px] md:mt-0">
        <div>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="CustomerDLens Logo"
            className="h-[35px] max-w-lg md:max-w-full md:items-start"
          />
        </div>

        <div>
          <p className="text-[#1783F7] dark:text-white text-[35px] md:text-5xl mt-4 font-semibold dark:font-medium">
            {title}
          </p>
          <p className="text-[#667085] dark:text-white md:text-lg mt-4">
            {subtitle}
          </p>
        </div>

        <button
          className="w-60 text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all hover:opacity-90 
            bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] 
            dark:from-white dark:to-white dark:bg-white 
            hover:from-[#787878] hover:to-[#0653A7] 
            dark:hover:from-gray-200 dark:hover:to-gray-400 mt-4"
          onClick={() => {
            navigate("/contactUs");
          }}
        >
          Talk to Our Experts
          <img
            src={
              isDark ? "assets/updated/crossArrow.svg" : "assets/getInArrow.svg"
            }
            alt="Arrow"
            className="ml-2 h-3"
          />
        </button>
      </div>

      <div>
        <img
          src={bannerImage}
          alt="Customer Dashboard"
          className="md:h-[900px] w-full mt-[50px] md:mt-0 object-cover object-left"
        />
      </div>
    </div>
  );
}
