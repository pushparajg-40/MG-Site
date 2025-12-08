import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const containers = footerRef.current.querySelectorAll("[data-delay]");
    const socialIcons = footerRef.current.querySelectorAll("img");

    // Fade & slide animation for footer columns
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              entry.target.getAttribute("data-delay") || "0"
            );
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    containers.forEach((el) => footerObserver.observe(el));

    // Zoom-in animation for social icons
    socialIcons.forEach((icon) => {
      icon.classList.add(
        "scale-0",
        "transition-transform",
        "duration-700",
        "ease-out"
      );
    });

    const iconObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scale-0");
            entry.target.classList.add("scale-100");
          }
        });
      },
      { threshold: 0.2 }
    );

    socialIcons.forEach((icon) => iconObserver.observe(icon));
  }, []);

  return (
    <footer
      id="footer-section"
      ref={footerRef}
      className="dark:bg-black bg-white md:px-[120px] pt-[80px] md:px-[60px] sm:px-6 transition-all duration-500 ease-in"
    >
      {/* GRID */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        gap-12 sm:gap-10 px-[20px]
      "
      >
        {/* Column 1 */}
        <div
          className="footer-column opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="100"
        >
          <div className="sm:flex sm:flex-col sm:items-center">
            <Link to="/">
              <img
                src="/assets/updated/MgLogo.svg"
                alt="MindGraph Logo"
                className="h-12 hidden dark:block"
              />
              <img
                src="/assets/mindgraphLogo.png"
                alt="MG logo"
                className="h-12 dark:hidden"
              />
            </Link>
            <p className="text-black dark:text-white leading-[120%] text-[20px] mt-5 sm:w-[80%]">
              Driving Industry Transformation with Secure and Scalable
              Enterprise AI-Powered Solutions
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div
          className="footer-column opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="200"
        >
          <h6 className="text-[#0C426E] dark:text-white font-semibold text-[16px] mb-4">
            Company
          </h6>
          <ul className="space-y-3 sm:space-y-2">
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black transition"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black transition"
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black transition"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black transition"
                to="/products"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div
          className="footer-column opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="300"
        >
          <Link to={"/products"}>
            <h6 className="text-[#0C426E] dark:text-white font-semibold text-[16px] mb-4">
              Products
            </h6>
          </Link>
          <ul className="space-y-3 sm:space-y-2">
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/mathops"
              >
                MATHOPS
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/smartSustain"
              >
                SmartSustain.AI
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/opsbeat"
              >
                OpsBeat
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/customerDlens"
              >
                CustomerDlens
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/optiSaas"
              >
                OptiSaaS
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div
          className="footer-column opacity-0 translate-y-10 transition-all duration-700 ease-out"
          data-delay="400"
        >
          <h6 className="text-[#0C426E] dark:text-white font-semibold text-[16px] mb-4">
            Resources
          </h6>
          <ul className="space-y-3 sm:space-y-2">
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/cookies"
              >
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7E7E7E] dark:text-white hover:text-black"
                to="/terms"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="mt-12 mx-10 md:mx-0 pt-8 pb-4 border-t-2 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        data-delay="500"
      >
        <div className="flex flex-col md:flex-row justify-between items-center px-[30px] sm:gap-5 sm:text-center">
          <h1 className="text-[#8A8A8F] text-xs md:text-sm order-2 md:order-1 mt-2">
            © Copyright 2025,
            <span className="text-[#0C426E] dark:text-white font-semibold">
              {" "}
              MindGraph
            </span>
            . All Rights Reserved.
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 order-1 md:order-2">
            <img src="/assets/fb.svg" alt="Facebook" className="w-8" />
            <img src="/assets/x.svg" alt="Twitter" className="w-8" />
            <img src="/assets/youtube.svg" alt="YouTube" className="w-8" />
            <img src="/assets/insta.svg" alt="Instagram" className="w-8" />
            <img src="/assets/lnkedin.svg" alt="LinkedIn" className="w-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
