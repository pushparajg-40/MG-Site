import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import RoundedArrowRightIcon from "./ui/RoundedArrowRightIcon";
import { useTheme } from "../hooks/useTheme";

// const industriesData = [
//   {
//     title: "Energy & Utilities",
//     icon: "/assets/updated/EneryIndNav.svg",
//     pageLink: "/Energy_Utilities",
//     description:
//       "We help energy providers and utility companies transition into intelligent, sustainable enterprises.",
//   },
//   {
//     title: "Aviation & Transports",
//     icon: "/assets/updated/AirportsIndNav.svg",
//     pageLink: "/Aviation_Transports",
//     description:
//       "From landside to airside, we help airports digitize their infrastructure, optimize resource allocation, and enhance the passenger experience.",
//   },
//   {
//     title: "Telecom",
//     icon: "/assets/updated/TelecomIndNav.svg",
//     pageLink: "/Telecom",
//     description:
//       "We support telecom operators in improving service quality, customer retention, and network intelligence with scalable AI and real-time data analytics.",
//   },
//   {
//     title: "Healthcare",
//     icon: "/assets/updated/HealthIndNav.svg",
//     pageLink: "/Healthcare",
//     description:
//       "Mindgraph enables healthcare providers to modernize operations and improve patient outcomes through AI, secure data platforms, and predictive diagnostics.",
//   },
//   {
//     title: "BFSI",
//     icon: "/assets/updated/BfsiIndNav.svg",
//     pageLink: "/BFSI",
//     description:
//       "Mindgraph empowers financial institutions with AI-first digital solutions to reduce risk, detect fraud, enhance customer journeys, and meet regulatory demands.",
//   },
//   {
//     title: "Manufacturing",
//     icon: "/assets/updated/ManufacturingIndNav.svg",
//     pageLink: "/Manufacturing",
//     description:
//       "We help manufacturers digitize plant operations, optimize supply chains, and improve product quality using AI and IoT-enabled solutions.",
//   },
// ];

// const serviceDataNew = [
//   {
//     title: "AI & Data Intelligence",
//     pageLink: "AI&DI_Services",
//     desc: "Unlock the power of data and AI to automate decisions, predict outcomes, and drive business growth.",
//   },
//   {
//     title: "Application & Development",
//     pageLink: "AppDevServices",
//     desc: "Design, build, and support powerful business applications with a focus on performance, scalability, and user experience.",
//   },
//   {
//     title: "Cloud Infrastructure",
//     pageLink: "CloudInfrastructureServices",
//     desc: "Deploy, scale, and manage your cloud environment (AWS, Azure, GCP) with ease—ensuring performance, security, and cost-efficiency every step of the way.",
//   },
//   {
//     title: "Consulting & Advisory",
//     pageLink: "Consulting&AdvisoryServices",
//     desc: "Drive innovation and digital maturity with strategic guidance across business and technology domains—focused on sectors like energy, defence, BFSI, healthcare, and logistics.",
//   },
//   {
//     title: "CRM & ERP",
//     pageLink: "CRM&ERPServices",
//     desc: "Connect customer engagement and business operations with smart, scalable CRM and ERP platforms tailored to your needs.",
//   },
//   {
//     title: "SAP Enterprise",
//     pageLink: "SapEnterpriseServices",
//     desc: "Keep your SAP systems running smoothly with expert support across application performance, cloud hosting, upgrades, and business continuity planning.",
//   },
// ];

const serviceData = [
  ["AI & Data Intelligence", "AI&DI_Services"],
  ["Application & Development", "AppDevServices"],
  ["Cloud Infrastructure", "CloudInfrastructureServices"],
  ["Consulting & Advisory", "Consulting&AdvisoryServices"],
  ["CRM & ERP", "CRM&ERPServices"],
  ["SAP Enterprise", "SapEnterpriseServices"],
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown(mobileDropdown === key ? null : key);
  };

  return (
    <header
      className="p-4 md:p-6 lg:px-20 fixed top-0 left-0 right-0 z-50
      bg-white dark:bg-[#191919] transition-all duration-500"
    >
      {" "}
      <div className="flex items-center justify-between 2xl-plus:max-w-9xl 2xl-plus:mx-auto ">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/updated/MgLogo.svg"
            className="h-12 hidden dark:block"
          />
          <img src="/assets/mindgraphLogo.png" className="h-12 dark:hidden" />
        </div>

        <nav className="hidden lg:flex space-x-6 items-center">
          <NavLink
            to="/aboutUs"
            className="dark:text-white text-[#7E7E7E] hover:text-[#1783F7] dark:hover:text-[#1783F7] transition"
          >
            About Us
          </NavLink>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 dark:text-white text-[#7E7E7E] hover:text-[#1783F7] dark:hover:text-[#1783F7] transition"
            >
              Services
              <ChevronDown size={16} />
            </button>

            <div className="absolute hidden group-hover:block bg-white dark:bg-[#191919] border dark:border-gray-700 rounded shadow-lg w-[250px]">
              {serviceData.map(([label, link]) => (
                <NavLink
                  key={label}
                  to={link}
                  className="block px-4 py-2 dark:text-white text-[#7E7E7E] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Industries Mega Menu - Four Column Layout */}

            {/* <div
            className={`fixed ${serviceHover ? "block" : "hidden"}
            left-0 right-0 bg-white dark:bg-[#1a1a1a]  shadow-lg w-full px-20 py-8 z-40 `}
            onMouseEnter={() => setServiceHover(true)}
            onMouseLeave={() => setServiceHover(false)}
          >
            <div className="grid grid-cols-3 gap-2">
              {serviceData.map((section, idx) => (
                <Link to={section.pageLink}>
                  <div key={idx} className="min-w-[220px] py-6 dark:hover:bg-black hover:scale-105 
                     transition-all duration-500 ease-out">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-white mb-1">
                        {section.title}
                      </h3>
                      <p className="text-sm text-[#667085] dark:text-gray-400">
                        {section.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div> */}
          </div>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 dark:text-white text-[#7E7E7E] hover:text-[#1783F7] dark:hover:text-[#1783F7] transition"
              // onMouseEnter={() => {
              //   navigate("/Enterprise_Solutions");
              // }}
            >
              Enterprise Solutions
              <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-[#191919] border dark:border-gray-700 rounded shadow-lg w-52">
              {[
                ["CustomerDLens.AI", "/customerDlens"],
                ["MATHOPS", "/mathops"],
                ["OpsBeat", "/opsbeat"],
                // ["OptiSaaSAI", "/optiSaas"],
                ["SmartSustain.AI", "/smartSustain"],
                ["AutoDocX.AI", "/autodocx"],
                ["Patient360", "/patient360"],
                ["Salesforce", "/salesforce"],
                ["Regology", "/regology"],
              ].map(([label, link]) => (
                <NavLink
                  key={label}
                  to={link}
                  className="block px-4 py-2 dark:text-white text-[#7E7E7E] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="group relative">
            <NavLink
              to="/industries"
              className="flex items-center gap-1 dark:text-white text-[#7E7E7E] hover:text-[#1783F7] dark:hover:text-[#1783F7] transition"
            >
              Industries
            </NavLink>

            {/* Industries Mega Menu - Four Column Layout */}

            {/* <div
            className={`fixed ${industriesHover ? "block" : "hidden"}
            left-0 right-0 bg-white dark:bg-[#1a1a1a]  shadow-lg w-full px-20 py-8 z-40 `}
            onMouseEnter={() => setIndustriesHover(true)}
            onMouseLeave={() => setIndustriesHover(false)}
          >

            <div className="  border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-[#667085] dark:text-gray-400 mb-4 uppercase tracking-wide">
                Industries We Serve
              </p>
              <div className="grid grid-cols-3 gap-2">
                {industriesData.map((industry, idx) => (
                  <Link to={industry.pageLink}>
                    <div
                      key={idx}
                      className="p-[10px] space-y-1 pr-[50px] rounded-md 
                     hover:bg-[#F3F3F3] dark:hover:bg-black hover:scale-105 
                     transition-all duration-500 ease-out group"
                    >
                      <div>
                        <img
                          src={industry.icon}
                          className="bg-[#FFFFFF] border-2 border-[#DCDCDC] rounded-md p-2"
                        ></img>
                      </div>
                      <div className="">
                        <h3 className="text-sm font-semibold text-[#1a1a1a] dark:text-white ">
                          {industry.title}
                        </h3>
                        <p className="text-xs text-[#667085] dark:text-white dark:opacity-80 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          </div>

          <NavLink
            to="contactUs"
            className="dark:text-white text-[#7E7E7E] hover:text-[#1783F7] dark:hover:text-[#1783F7] transition"
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-300 peer-checked:bg-gray-700 rounded-full transition" />
            <div
              className="absolute left-0.5 top-0.5 w-6 h-6 bg-white rounded-full shadow transform
            peer-checked:translate-x-7 transition flex items-center justify-center"
            >
              {theme !== "dark" ? (
                <span className="text-yellow-500 text-lg">☀️</span>
              ) : (
                <span className="text-gray-900 text-lg">🌙</span>
              )}
            </div>
          </label>

          <NavLink to="/contactUs" className="hidden lg:block">
            <button
              type="button"
              className="text-black font-semibold py-3 px-8 rounded-full bg-gradient-to-r
            from-[#8B8B8B] to-[#1783F7] dark:from-white dark:to-gray-200 dark:text-black flex items-center hover:opacity-90 transition gap-2"
            >
              Get in Touch
              <RoundedArrowRightIcon className="w-5 h-5" />
            </button>
          </NavLink>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6 dark:text-white text-[#7E7E7E]" />
          </button>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 bg-[#191919] z-[999] p-6 pt-20">
            <button
              type="button"
              className="absolute top-4 right-4"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <nav className="flex flex-col space-y-4 text-white">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutUs">About Us</NavLink>

              <div>
                <button
                  type="button"
                  className="w-full flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("services")}
                >
                  Services <ChevronDown size={16} />
                </button>
                {mobileDropdown === "services" && (
                  <div
                    className="pl-4 mt-2 space-y-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <NavLink to="/AI&DI_Services" className="block">
                      AI & Data Intelligence
                    </NavLink>
                    <NavLink to="/AppDevServices" className="block">
                      Application & Development
                    </NavLink>
                    <NavLink
                      to="/CloudInfrastructureServices"
                      className="block"
                    >
                      Cloud Infrastructure
                    </NavLink>
                    <NavLink
                      to="/Consulting&AdvisoryServices"
                      className="block"
                    >
                      Consulting & Advisory
                    </NavLink>
                    <NavLink to="/CRM&ERPServices" className="block">
                      CRM & ERP
                    </NavLink>
                    <NavLink to="/SapEnterpriseServices" className="block">
                      SAP Enterprise
                    </NavLink>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="w-full flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("Enterprise_Solutions")}
                >
                  Enterprise Solutions <ChevronDown size={16} />
                </button>
                {mobileDropdown === "Enterprise_Solutions" && (
                  <div
                    className="pl-4 mt-2 space-y-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <NavLink to="/customerDlens" className="block">
                      CustomerDLens.AI
                    </NavLink>
                    <NavLink to="/mathops" className="block">
                      MATHOPS
                    </NavLink>
                    <NavLink to="/opsbeat" className="block">
                      OpsBeat
                    </NavLink>
                    {/* <NavLink to="/optiSaas" className="block">
                    OptiSaaSAI
                  </NavLink> */}
                    <NavLink to="/smartSustain" className="block">
                      SmartSustain.AI
                    </NavLink>
                    <NavLink to="/autodocx" className="block">
                      AutoDocX.AI
                    </NavLink>
                    <NavLink to="/patient360" className="block">
                      Patient360
                    </NavLink>
                    <NavLink to="/salesforce" className="block">
                      Salesforce
                    </NavLink>
                    <NavLink to="/regology" className="block">
                      Regology
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/industries">Industries</NavLink>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
