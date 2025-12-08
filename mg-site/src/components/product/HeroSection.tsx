import { useState, useEffect } from "react";

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
  bannerImage,
  arrowIconDark,
  arrowIconLight,
}: HeroSectionProps) {
  const [darkMode, setDarkMode] = useState(false);

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

        <button className="mt-6 w-[240px] text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center bg-[linear-gradient(141deg,rgba(139,139,139,1)_0%,rgba(23,131,247,1)_100%)] hover:bg-[linear-gradient(141deg,#787878_0%,#0653A7_100%)] dark:bg-white dark:hover:bg-gray-100 transition-all duration-300">
          Talk to Our Experts
          <img
            src={darkMode ? arrowIconDark : arrowIconLight}
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
