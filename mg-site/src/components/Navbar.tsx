import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    updateThemeImages();
  }, [location, darkMode]);
  function updateThemeImages() {
    const isDark = document.documentElement.classList.contains("dark");

    document.querySelectorAll(".theme-image").forEach((img: any) => {
      const newSrc = isDark ? img.dataset.dark : img.dataset.light;
      img.src = newSrc;
    });
  }

  function updateDarkMode() {
    setDarkMode(!darkMode);
    if (darkMode) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      updateThemeImages();
    } else {
      document.documentElement.classList.remove("dark");
      updateThemeImages();
    }
    updateThemeImages();
  }, [darkMode]);

  useEffect(() => {
    updateThemeImages();
  });

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown(mobileDropdown === key ? null : key);
  };

  return (
    <header
      className="flex items-center justify-between p-4 md:p-6 lg:px-20 fixed top-0 left-0 right-0 z-50
      bg-white dark:bg-[#191919] transition-all duration-500"
    >
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/assets/updated/MgLogo.svg"
          className="h-12 hidden dark:block"
        />
        <img src="/assets/mindgraphLogo.png" className="h-12 dark:hidden" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 items-center">
        <NavLink to="/aboutUs" className="dark:text-white text-[#7E7E7E]">
          About Us
        </NavLink>

        {/* Services */}
        <div className="group relative">
          <button className="flex items-center gap-1 dark:text-white text-[#7E7E7E]">
            <NavLink to={"/services"}> Services</NavLink>{" "}
            <ChevronDown size={16} />
          </button>
          <div className="absolute hidden group-hover:block bg-white dark:bg-[#191919] border rounded shadow-lg w-52">
            {[
              ["AI & Data Intelligence", "AI&DI_Services"],
              ["Application & Development", "AppDevServices"],
              ["Cloud Infrastructure", "CloudInfrastructureServices"],
              ["Consulting & Advisory", "Consulting&AdvisoryServices"],
              ["CRM & ERP", "CRM&ERPServices"],
              ["SAP Enterprise", "SapEnterpriseServices"],
            ].map(([label, link]) => (
              <NavLink
                to={link}
                className="block px-4 py-2 dark:text-white text-[#7E7E7E]"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="group relative">
          <button className="flex items-center gap-1 dark:text-white text-[#7E7E7E]">
            <NavLink to={"/products"}> Products </NavLink>
            <ChevronDown size={16} />
          </button>
          <div className="absolute hidden group-hover:block bg-white dark:bg-[#191919] border rounded shadow-lg w-52">
            {[
              ["CustomerDLens.AI", "/customerDlens"],
              ["MATHOPS", "/mathops"],
              ["OpsBeat", "/opsbeat"],
              ["OptiSaaSAI", "/optiSaas"],
              ["SmartSustain.AI", "/smartSustain"],
            ].map(([label, link]) => (
              <NavLink
                key={label}
                to={link}
                className="block px-4 py-2 dark:text-white text-[#7E7E7E]"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="group relative">
          <button className="flex items-center gap-1 dark:text-white text-[#7E7E7E]">
            <NavLink to={"/industries"}> Industries</NavLink>{" "}
            <ChevronDown size={16} />
          </button>

          {/* Industries mega menu */}
          <div
            className="absolute  hidden  top-10 left-1/2 -translate-x-1/2 bg-[#F3F3F3]
            border shadow-lg rounded-lg w-[1000px] max-w-[95vw] p-5"
          >
            <h2 className="text-2xl font-bold text-[#687DA9] mb-3">
              Industries
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                [
                  "Energy & Utilities",
                  "EneryIcon.svg",
                  "We help energy providers and utility companies transition into intelligent, sustainable enterprises.",
                ],
                [
                  "Airports",
                  "AirportsIcon.svg",
                  "From landside to airside, we help airports digitize their infrastructure, optimize resource allocation, and enhance the passenger experience. ",
                ],
                [
                  "Telecom",
                  "TelecomIcon.svg",
                  "We support telecom operators in improving service quality, customer retention, and network intelligence with scalable AI and real-time data analytics.",
                ],
                [
                  "Healthcare",
                  "updated/HealthCareIconUpdated.svg",
                  "Mindgraph enables healthcare providers to modernize operations and improve patient outcomes through AI, secure data platforms, and predictive diagnostics.",
                ],
                [
                  "BFSI",
                  "updated/BFSIIconUpdated.svg",
                  "Mindgraph empowers financial institutions with AI-first digital solutions to reduce risk, detect fraud, enhance customer journeys, and meet regulatory demands.",
                ],
                [
                  "Manufacturing",
                  "ManufacturingIcon.svg",
                  "We help manufacturers digitize plant operations, optimize supply chains, and improve product quality using AI and IoT-enabled solutions.",
                ],
              ].map(([title, icon, desc]) => (
                <div
                  key={title}
                  className="p-3 rounded-xl hover:bg-white/60 cursor-pointer flex gap-2"
                >
                  
                  <img src={`/assets/${icon}`} className="w-20" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#757575]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#667085]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NavLink to="contactUs" className="dark:text-white text-[#7E7E7E]">
          Contact Us
        </NavLink>
      </nav>

      {/* Right Section: Dark Mode + CTA + Mobile Menu */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => updateDarkMode()}
            className="sr-only peer"
          />
          <div className="w-14 h-7 bg-gray-300 peer-checked:bg-gray-700 rounded-full transition" />
          <div
            className="absolute left-0.5 top-0.5 w-6 h-6 bg-white rounded-full shadow transform 
            peer-checked:translate-x-7 transition flex items-center justify-center"
          >
            {!darkMode ? (
              <span className="text-yellow-500 text-lg">☀️</span>
            ) : (
              <span className="text-gray-900 text-lg">🌙</span>
            )}
          </div>
        </label>

        {/* CTA Button */}
        <NavLink to="contactUs" className="hidden lg:block">
          <button
            className="text-black font-semibold py-3 px-8 rounded-full bg-gradient-to-r 
            from-[#8B8B8B] to-[#1783F7] dark:from-white dark:to-gray-200 flex items-center"
          >
            Get in Touch
            <img
              src="/assets/updated/crossArrow.svg"
              alt="Arrow"
              className="ml-2 w-3 h-3 "
            />
          </button>
        </NavLink>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
          <Menu className="w-6 h-6 dark:text-white text-[#7E7E7E]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#191919] z-[999] p-6 pt-20">
          <button
            className="absolute top-4 right-4"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <nav className="flex flex-col space-y-4 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>

            {/* Mobile Dropdown Example */}
            <div>
              <button
                className="w-full flex justify-between"
                onClick={() => toggleMobileDropdown("services")}
              >
                Services <ChevronDown />
              </button>
              {mobileDropdown === "services" && (
                <div className="pl-4 mt-2 space-y-2">
                  <NavLink to="AI_DI_Services">AI & Data Intelligence</NavLink>
                  <NavLink to="Application&DevelopementServices">
                    Application & Development
                  </NavLink>
                </div>
              )}
            </div>

            {/* Add the rest similarly */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
