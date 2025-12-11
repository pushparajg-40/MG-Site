import React, { useEffect, useRef, useState, useCallback } from "react";
import Blogs from "../components/Home/Blogs";
import { Helmet } from "react-helmet";
import PageTransition from "../components/PageTransition";

export interface SolutionItem {
  selector: string;
  image: string;
  text: string;
  href: string;
  title: string;
}

const solutionItemsData: SolutionItem[] = [
  {
    selector: "#MathOps",
    title: "MATHOPS",
    href: "mathops.html",
    image: "/assets/mathOps.png",
    text: "MathOps is a next-gen analytics and monitoring platform built to optimize IT.",
  },
  {
    selector: "#SmartSustain",
    title: "SmartSustain.AI",
    href: "smartSustain.html",
    image: "assets/prd-smartSustain.png",
    text: "Simplify and scale ESG reporting. SmartSustain.AI enables accurate tracking of carbon emissions, water usage, governance, and social impact.",
  },
  {
    selector: "#OpsBeat",
    title: "OpsBeat",
    href: "opsbeat.html",
    image: "assets/opsBeatprd.png",
    text: "Revolutionize your IT operations with smart automation, real-time visibility, and seamless integrations.",
  },
  {
    selector: "#CustomerDlens",
    title: "CustomerDlens",
    href: "customerDlens.html",
    image: "assets/customerDlens.png",
    text: "AI-powered customer data fabric for 360° operational insights.",
  },
  {
    selector: "#SaaSBeamAI",
    title: "OptiSaas.AI",
    href: "optiSaas.html",
    image: "assets/optiSaas.png",
    text: "Enterprise SaaS and Cloud Management Platform.",
  },
  {
    selector: "#Patient360",
    title: "Patient360.AI",
    href: "customerDlens.html",
    image: "/assets/prd-patient.png",
    text: "AI-powered patient data fabric for 360° operational insights.",
  },
  {
    selector: "#ResponsibleAI",
    title: "Responsible AI",
    href: "#",
    image: "/assets/prd-patient.png",
    text: "Responsible AI fabric for 360° operational insights.",
  },
];

const defaultSolution = solutionItemsData[0];

const ArrowIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    className={className}
  >
    <path
      fill="currentColor"
      d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
    />
  </svg>
);

const HoverArrowIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.013 21L12 3.211m7 6.777L12 3L5 9.988"
      strokeWidth="1"
    />
  </svg>
);

const AboutUs: React.FC = () => {
  const [currentSolution, setCurrentSolution] =
    useState<SolutionItem>(defaultSolution);
  const [isFading, setIsFading] = useState(false);

  const animatedRefs = useRef<(HTMLElement | null)[]>([]);
  // Function to handle the image change with fade l
  const fadeSolutionImageChange = useCallback((newSolution: SolutionItem) => {
    setCurrentSolution(newSolution);
  }, []);

  useEffect(() => {
    const setupObservers = (
      sectionId: string,
      boxClass: string,
      threshold: number = 0.2
    ) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = parseInt(
                entry.target.getAttribute("data-delay") || "0",
                10
              );
              setTimeout(() => {
                const target = entry.target as HTMLElement;

                if (target.classList.contains(boxClass)) {
                  // For choose-box (scale/zoom animation)
                  target.classList.remove("opacity-0", "scale-75");
                  target.classList.add("opacity-100", "scale-100");
                } else if (target.getAttribute("data-delay")) {
                  // For headings and paragraphs (translate-y animation)
                  target.classList.remove("opacity-0", "translate-y-10");
                  target.classList.add("opacity-100", "translate-y-0");
                }
              }, delay);
            }
          });
        },
        { threshold }
      );

      const animatedElements = document.querySelectorAll(
        `#${sectionId} [data-delay]`
      );
      animatedElements.forEach((el) => observer.observe(el));

      // Clean-up function (important for React components)
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    };

    // Setup for "Why Choose Us" section
    const cleanupChooseUs = setupObservers(
      "choose-us-section",
      "choose-box",
      0.2
    );
    setIsFading(false);
    // Setup for "Offerings" section
    const cleanupOfferings = setupObservers("offerings-section", "", 0.2); // No specific box class for offerings

    return () => {
      // Run cleanup functions on component unmount
      cleanupChooseUs();
      cleanupOfferings();
    };
  }, []);

  // Helper function for adding ref to the array
  const setRef = (el: HTMLElement | null) => {
    if (el && !animatedRefs.current.includes(el)) {
      animatedRefs.current.push(el);
    }
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
    }
    console.log("Inisde About Effect  ", isDark);
  });

  return (
    <>
      <PageTransition>
        <Helmet>
          <title>Mind-Graph | Leading AI Solution Company</title>
          <meta
            name="description"
            content="Learn about Mind-Graph, a top AI solution company driving innovation with AI, machine learning, and data intelligence to empower smarter business decisions."
          />
        </Helmet>
        <div className="dark:bg-black">
          {/* 1. Hero Banner */}
          <div className="w-full">
            <div className="relative h-[180px] lg:h-[280px] w-full">
              <img
                src="assets/aboutUsBanner.png"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
                  About Us
                </h1>
              </div>
            </div>
          </div>

          {/* 2. Overview, Vision, Mission Section */}
          <div className="flex flex-col lg:flex-row pt-[20px] lg:pt-[90px] lg:px-[180px] dark:pb-[30px] dark:bg-black transition-all duration-500 ease-in">
            <div className="order-2 lg:order-1 md:pl-[200px] lg:pl-0">
              <img
                src="assets/updated/aboutBannerUpdated.png"
                alt="Our Company"
                className="lg:max-w-7xl md:w-[400px] h-full p-[50px] lg:p-0"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className=" pl-[20px] pr-[10px] md:pr-0 md:pl-[60px]">
                <div className=" [font-family:'Roboto',Helvetica] font-normal text-[#1783F7] dark:text-white text-3xl tracking-[0] leading-[39.6px] dark:text-opacity-80">
                  Overview
                </div>
                <p className="mt-[10px] [font-family:'Roboto',Helvetica] font-normal text-[#667085] dark:text-white text-lg tracking-[0] leading-[26px]">
                  Mindgraph is a next-generation technology company specializing
                  in AI-powered solutions, data platforms, and digital
                  transformation services. We partner with forward-thinking
                  enterprises to modernize operations, drive growth, and deliver
                  intelligent customer experiences across industries including
                  energy, healthcare, BFSI, telecom, aviation, and
                  manufacturing.
                </p>
              </div>
              <div className="pl-[20px] md:pl-[40px] pr-[10px] md:pr-0">
                <div
                  className=" mt-[30px] bg-[linear-gradient(132deg,rgba(234,249,253,0.5)_0%,rgba(222,248,255,0.5)_100%)]
               dark:bg-[linear-gradient(91.52deg,rgba(161,161,161,0.5)_3.07%,rgba(24,24,24,0.5)_102.02%)] p-[20px] rounded-3xl"
                >
                  <div className=" [font-family:'Roboto',Helvetica] font-normal text-[#1783F7] dark:text-white text-3xl tracking-[0] leading-[39.6px]">
                    Vision
                  </div>
                  <p className="mt-[10px] [font-family:'Roboto',Helvetica] font-normal text-[#667085] dark:text-white text-base md:text-lg tracking-[0] leading-[26px]">
                    To be the trusted partner for enterprises worldwide,
                    enabling intelligent transformation through AI, data, and
                    digital innovation.
                  </p>
                </div>
              </div>
              <div className="pl-[20px] md:pl-[40px] pr-[10px] md:pr-0">
                <div
                  className="mt-[30px] bg-[linear-gradient(132deg,rgba(234,249,253,0.5)_0%,rgba(222,248,255,0.5)_100%)]
              dark:bg-[linear-gradient(91.52deg,rgba(161,161,161,0.5)_3.07%,rgba(24,24,24,0.5)_102.02%)] p-[20px] rounded-3xl"
                >
                  <div className=" [font-family:'Roboto',Helvetica] font-normal text-[#1783F7] dark:text-white text-3xl tracking-[0] leading-[39.6px]">
                    Mission
                  </div>
                  <p className="mt-[10px] [font-family:'Roboto',Helvetica] font-normal text-[#667085] dark:text-white text-base md:text-lg tracking-[0] leading-[26px]">
                    At Mindgraph, our mission is to simplify complexity, empower
                    industries, and drive sustainable growth by delivering
                    AI-first platforms, cloud-native solutions, and strategic
                    consulting—built for performance, security, and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. What we do Section */}
          <div className="flex items-center justify-center transition-all duration-500 ease-in min-h-screen 2xl:min-h-[60vh] pt-[50px] dark:pb-[50px] dark:bg-[#000000] px-[20px] ">
            {/* Outer Circle Container */}
            <div className="relative w-[800px] h-[650px] ">
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative bg-white dark:bg-black w-[500px] h-[180px] rounded-[140px] flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ease-in">
                  {/* Decorative SVG Icons - Self-closing img tags */}
                  <img
                    src="assets/bluePlayButton.svg"
                    alt="Blue Play"
                    className="absolute top-[60px] md:top-[40px] left-[10px] md:left-[100px] w-4 h-4"
                  />
                  <img
                    src="assets/redPlayButton.svg"
                    alt="Red Play"
                    className="absolute top-[0px] left-1/2 transform -translate-x-1/2 w-4 h-4"
                  />
                  <img
                    src="assets/Oval.svg"
                    alt="Oval"
                    className="absolute top-[30px] right-[37px] md:right-[90px] w-3 h-3"
                  />
                  <img
                    src="assets/redOval.svg"
                    alt="Red Oval"
                    className="absolute top-[100px] right-[12px] md:right-[30px] w-3 h-3"
                  />
                  <img
                    src="assets/redPlayButton.svg"
                    alt="Red Play"
                    className="absolute bottom-[10px] md:bottom-[25px] left-1/2 transform -translate-x-1/2 w-4 h-4"
                  />
                  <img
                    src="assets/plus.svg"
                    alt="Plus"
                    className="absolute bottom-[10px] left-[150px] w-4 h-4 opacity-40"
                  />
                  <img
                    src="assets/plus.svg"
                    alt="Plus"
                    className="absolute bottom-[10px] right-[120px] w-4 h-4 opacity-40"
                  />

                  {/* Main Content */}
                  <h2 className="text-3xl font-semibold text-[#687DA9] dark:text-white">
                    What We do
                  </h2>
                  <p className="text-sm text-[#667085] dark:text-white max-w-[360px] mt-2">
                    We offer a comprehensive suite of services and products to
                    help businesses accelerate transformation:
                  </p>
                </div>
              </div>

              {/* Lines - Converted HTML comments and self-closing tags */}
              <div className="hidden md:block">
                {/* Top center line */}
                <div className="relative top-[90px] left-1/2 w-[100px] h-[20px] transform -translate-x-1/2 ">
                  <img
                    src="assets/straightLine.svg"
                    alt="Line"
                    className="h-[470px] w-[100px] block dark:hidden"
                  />
                  <svg
                    width="100"
                    height="470"
                    viewBox="0 0 100 470"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden dark:block"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="470"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {/* App to Cloud line */}
                <div className="absolute top-[100px] md:top-[170px] md:left-[560px] w-[2px] h-[80px] transform rotate-[53deg] ">
                  <img
                    src="assets/straightLine.svg"
                    alt="Line"
                    className="h-[470px] w-[100px] block dark:hidden"
                  />
                  <svg
                    width="100"
                    height="470"
                    viewBox="0 0 100 470"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden dark:block"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="470"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {/* Bottom right line */}
                <div className="absolute top-[420px] left-[580px] w-[2px] h-[80px] transform rotate-[130deg] ">
                  <img
                    src="assets/straightLine.svg"
                    alt="Line"
                    className="h-[470px] w-[100px] block dark:hidden"
                  />
                  <svg
                    width="100"
                    height="470"
                    viewBox="0 0 100 470"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden dark:block"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="470"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              {/* Mobile Lines - converted self-closing divs */}
              <div className="block md:hidden">
                <div className="absolute top-[13%] left-1/2 w-px h-[20%] bg-gray-300 transform -translate-x-1/2"></div>
                <div className="absolute top-[30%] right-[23%] w-px h-[10%] bg-gray-300 transform rotate-[50deg] origin-top"></div>
                <div className="absolute bottom-[27%] right-[34%] w-px h-[8%] bg-gray-300 transform rotate-[-50deg] origin-top"></div>
                <div className="absolute bottom-[13%] left-1/2 w-px h-[20%] bg-gray-300 transform -translate-x-1/2"></div>
                <div className="absolute bottom-[3%] left-[18%] w-px h-[26%] bg-gray-300 transform rotate-[216deg] origin-top"></div>
                <div className="absolute top-[29%] left-[10%] w-px h-[29%] bg-gray-300 transform rotate-[-50deg] origin-top"></div>
              </div>

              {/* Service Items - converted self-closing img tags */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={isDark ? "assets/updated/AIAbout.svg" : "assets/AI.svg"}
                  alt="AI Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white text-center pt-1">
                  AI & Data Intelligence Services
                </span>
              </div>

              <div className="absolute top-[15%] left-[85%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={
                    isDark
                      ? "assets/updated/AppAbout.svg"
                      : "assets/Outline.svg"
                  }
                  alt="Outline Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white pt-1 text-center">
                  Application & Development Services
                </span>
              </div>

              <div className="absolute bottom-[15%] left-[85%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={
                    isDark ? "assets/updated/SapAbout.svg" : "assets/sap.svg"
                  }
                  alt="SAP Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white pt-1 text-center">
                  SAP Enterprise Services
                </span>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={
                    isDark ? "assets/updated/CrmAbout.svg" : "assets/crm.svg"
                  }
                  alt="CRM Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white pt-1 text-center">
                  CRM & ERP Solutions
                </span>
              </div>

              <div className="absolute bottom-[15%] left-[15%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={
                    isDark
                      ? "assets/updated/CloudAbout.svg"
                      : "assets/cloudInfra.svg"
                  }
                  alt="Cloud Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white pt-1 text-center pl-[60px] md:pl-0 pr-[50px] md:pr-0">
                  Cloud Infrastructure Services
                </span>
              </div>

              <div className="absolute top-[15%] left-[15%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <img
                  src={
                    isDark
                      ? "assets/updated/ConsultAbout.svg"
                      : "assets/Consult-Talk.svg"
                  }
                  alt="Consult Icon"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-lg text-[#7E7E7E] dark:text-white pt-1 text-center pl-[60px] md:pl-0 pr-[50px] md:pr-0">
                  Consulting & Advisory Services
                </span>
              </div>
            </div>
          </div>

          {/* 4. Solutions section (Products) */}
          <section
            id="solutions-section"
            className="bg-white dark:bg-[#000000] pt-[100px] pb-[100px] transition-all duration-500 ease-in"
          >
            <div
              ref={setRef}
              className="px-10 md:px-[50px] lg:px-20 py-8 sm:py-12 lg:py-16 space-y-6 transition-all duration-700 ease-out"
              data-delay="100"
            >
              {/* heading */}
              <div
                ref={setRef}
                className="flex gap-2 items-start transition-all duration-700 ease-out"
                data-delay="200"
              >
                <h2 className="text-4xl text-[#1783F7] dark:text-[#828282] mb-4 leading-tight">
                  Products
                </h2>
                {/* Self-closing img tag */}
                <img
                  src="/assets/updated/line.svg"
                  alt="Divider Line"
                  className="pt-3"
                />
              </div>

              <h1
                ref={setRef}
                className="text-4xl text-black dark:text-[#055CC0] mb-4 leading-tight md:px-0 font-extrabold text-radiant transition-all duration-700 ease-out"
                data-delay="300"
              >
                AI Frameworks That Power Transformation
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-[50px] lg:px-[70px]">
              {/* Left side: List of solutions */}
              <div className="flex flex-col justify-start text-black dark:text-white space-y-2">
                {/* Solution Items - Mapped using React logic */}
                {solutionItemsData.map((item, index) => (
                  <a key={item.selector} href={item.href}>
                    <div
                      id={item.selector.substring(1)}
                      ref={setRef}
                      className={`solution-item group p-4  translate-y-10 transition-all duration-700 ease-out 
    ${
      currentSolution.selector === item.selector
        ? "font-semibold text-[#687DA9] dark:text-white"
        : "hover:text-[#687DA9] dark:hover:text-white hover:font-semibold"
    }`}
                      data-delay={400 + index * 100}
                      onMouseEnter={() => fadeSolutionImageChange(item)} // ✅ FIX
                      onMouseLeave={() =>
                        fadeSolutionImageChange(defaultSolution)
                      } // ✅ FIX
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="rotate-[-45deg]">
                            <ArrowIcon className="text-[#204596] dark:text-white" />
                          </div>
                          <h3 className="text-xl">{item.title}</h3>
                        </div>
                        {/* Display hover arrow only if current/hovered */}
                        <div
                          className={`self-end rotate-[90deg] ${
                            currentSolution.selector === item.selector
                              ? "block"
                              : "hidden group-hover:block"
                          }`}
                        >
                          <HoverArrowIcon className="text-[#204596] dark:text-white" />
                        </div>
                      </div>
                      <hr className="mt-6" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Right side: Image + text */}
              <div
                ref={setRef}
                className="relative hidden md:flex items-start transition-all duration-700 ease-out"
                data-delay="400"
              >
                <div className="relative flex items-start pt-12">
                  {/* Dynamic Image with fade effect controlled by state/className */}
                  <img
                    src={currentSolution.image}
                    alt={`${currentSolution.title} Solution`}
                    className={`w-[550px] h-auto transition-opacity duration-700 z-10 ${
                      isFading ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className="absolute right-[-30px] top-[70px] w-[450px] md:h-[300px] lg:h-[380px] xl:h-[450px] 
                bg-[url('/assets/dottedBg.png')] bg-contain bg-no-repeat bg-right"
                  ></div>
                </div>

                {/* TEXT CARD BELOW IMAGE - Dynamic text controlled by state */}
                <div className="absolute md:top-[380px] lg:top-[480px] left-[10px] w-[90%] max-w-[440px] p-6 text-xl text-black dark:text-white z-20">
                  {currentSolution.text}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Why Choose Us section */}
          <section
            className="dark:bg-[#000000] pt-[100px] pb-[100px] transition-all duration-500 ease-in"
            id="choose-us-section"
          >
            <div className="px-10 lg:px-20 py-8 sm:py-12 lg:py-16">
              {/* Heading */}
              <div
                className="flex gap-2 md:items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
                data-delay="100"
              >
                <h2 className="text-3xl md:text-4xl text-[#1783F7] dark:text-[#828282] mb-4 leading-tight">
                  Why MindGraph
                </h2>
                <img
                  src="/assets/updated/line.svg"
                  className="pt-3 mr-4"
                  alt="Decorative Line"
                />
              </div>
              <h1
                className="text-4xl text-[#687DA9] dark:text-[#055CC0] mb-4 leading-tight md:px-0 font-extrabold text-radiant opacity-0 translate-y-10 transition-all duration-700 ease-out"
                data-delay="200"
              >
                Shaping Purpose fit AI Innovation
              </h1>
              <p
                className="text-md text-[#667085] dark:text-[#FFFFFF] font-normal mb-4 leading-[26px] opacity-0 translate-y-10 transition-all duration-700 ease-out"
                data-delay="300"
              >
                We deliver more than services — we deliver outcomes. At
                Mindgraph, we fuse deep industry insight with intelligent
                technology to build future-ready enterprises. Our approach is
                bold, agile, and engineered for business impact—from rapid
                deployments to long-term transformation.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 overflow-x-auto px-[20px] md:px-[80px] gap-6 flex flex-wrap justify-start mt-8">
              {/* Box 1 */}
              <div
                className="choose-box 
            bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-none dark:bg-black
            
            grid p-6 pb-4 border w-[250px] h-[240px] 
            items-center-safe opacity-0 scale-75 
            transition-all duration-700 ease-out"
                data-delay="400"
              >
                <img
                  src="/assets/AINative.svg"
                  alt="AI Platform"
                  className="mb-4 theme-image"
                  data-light="/assets/AINative.svg"
                  data-dark="/assets/updated/choose1.svg"
                />
                <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold">
                  AI-Driven Platforms Built for Performance
                </h3>
              </div>

              {/* Box 2 */}
              <div
                className="choose-box 
            bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-gradient-to-b dark:from-[#1C1C1C] dark:to-[#000000] 
            grid p-6 pb-4 border w-[250px] h-[240px] 
            items-center-safe opacity-0 scale-75 
            transition-all duration-700 ease-out"
                data-delay="500"
              >
                <img
                  src="/assets/ownershipEducation.svg"
                  data-light="/assets/ownershipEducation.svg"
                  data-dark="/assets/updated/choose2.svg"
                  alt="Ownership"
                  className="mb-4 theme-image"
                ></img>
                <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold ">
                  Complete Ownership — From Vision to Value
                </h3>
              </div>

              {/* Box 3 */}
              <div
                className="choose-box 
            bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-gradient-to-b dark:from-[#1C1C1C] dark:to-[#000000] 
            grid p-6 pb-4 border w-[250px] h-[240px] 
            items-center-safe opacity-0 scale-75 
            transition-all duration-700 ease-out"
                data-delay="600"
              >
                <img
                  src="/assets/migrating.svg"
                  data-light="/assets/migrating.svg"
                  data-dark="/assets/updated/choose3.svg"
                  alt="Implementation"
                  className="mb-4 theme-image"
                ></img>
                <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold ">
                  Accelerated Implementation, Measurable Results
                </h3>
              </div>

              {/* Box 4 */}
              <div
                className="choose-box 
            bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-gradient-to-b dark:from-[#1C1C1C] dark:to-[#000000] 
            grid p-6 pb-4 border w-[250px] h-[240px] 
            items-center-safe opacity-0 scale-75 
            transition-all duration-700 ease-out"
                data-delay="700"
              >
                <img
                  src="/assets/frictionlessIntegration.svg"
                  data-light="/assets/frictionlessIntegration.svg"
                  data-dark="/assets/updated/choose4.svg"
                  alt="Integration"
                  className="mb-4 theme-image"
                ></img>
                <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold ">
                  Seamless Integration with Your Ecosystem
                </h3>
              </div>

              {/* Box 5 */}
              <div
                className="choose-box 
            bg-gradient-to-r from-[#EAF9FD] to-[#DEF8FF] 
            dark:bg-gradient-to-b dark:from-[#1C1C1C] dark:to-[#000000] 
            grid p-6 pb-4 border w-[250px] h-[240px] 
            items-center-safe opacity-0 scale-75 
            transition-all duration-700 ease-out"
                data-delay="800"
              >
                <img
                  src="/assets/enterprise.svg"
                  data-light="/assets/enterprise.svg"
                  data-dark="/assets/updated/choose5.svg"
                  alt="Support"
                  className="mb-4 theme-image"
                ></img>
                <h3 className="text-[#1F3F68] dark:text-white text-lg md:text-xl font-extrabold ">
                  Enterprise-Grade Support. Always On. Always Aligned.
                </h3>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
          <Blogs></Blogs>
        </div>
      </PageTransition>
    </>
  );
};

export default AboutUs;
