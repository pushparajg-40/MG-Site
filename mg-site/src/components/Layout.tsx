import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import SeoMeta from "./SeoMeta";
import FooterContactForm from "./FooterContactForm";
import { routes } from "../Routes";

const Layout = () => {
  const { pathname } = useLocation();
  const isKnownRoute = routes.some((r) => r?.path === pathname) || pathname === "/" || pathname === "";

  const hideFooterContact = pathname === "/contactUs" || !isKnownRoute;

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen transition-colors duration-500 flex flex-col ">
      {/* SEO METADATA */}
      <SeoMeta />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-[95px]">
        <Outlet></Outlet>
      </main>

      {!hideFooterContact && <FooterContactForm />}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
