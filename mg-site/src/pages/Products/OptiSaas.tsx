import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

interface FeatureColumn {
  title: string;
  description: string;
  items: string[];
}

interface IntegrationItem {
  icon: string;
  iconDark: string;
  title: string;
  subtitle: string;
}

export default function OptiSaasPage() {
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

  const qualityFeatures: FeatureColumn = {
    title: "Quality Features",
    description:
      "Experience top-tier SaaS with AI automation, robust security, seamless integration, and real-time analytics.",
    items: [
      "Dashboard and Report",
      "Portfolio",
      "Recommender",
      "Contract Lifecycle Management",
    ],
  };

  const saasManagement: FeatureColumn = {
    title: "SaaS Management",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    items: [
      "User Subscription",
      "Market Place",
      "All-in-One-Application",
      "Payments",
      "Multicloud",
    ],
  };

  const stepsToAutomate: FeatureColumn = {
    title: "Steps to Automate",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    items: [
      "Workflow Management",
      "Monitor Onboarding",
      "Manage Licenses",
      "SSO Integration",
      "Renewal Management",
    ],
  };

  const integrations: IntegrationItem[] = [
    {
      icon: "assets/data-analytics.svg",
      iconDark: "assets/updated/data-analyticsDark.svg",
      title: "Comprehensive Insights",
      subtitle: "Data, Info, Intel & Actions",
    },
    {
      icon: "assets/strategy.svg",
      iconDark: "assets/updated/strategyDark.svg",
      title: "SaaS Insights",
      subtitle: "Plan Your Next Move",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <PageTransition>
        <Helmet>
          <title>OptiSaaSAI – AI-Powered SaaS Management Platform</title>
          <meta
            name="description"
            content="OptiSaaSAI is an AI-powered SaaS management platform offering analytics, automation, integrations, and insights to streamline workflows and reduce business costs."
          />
        </Helmet>
        <main className="transition-all duration-500 ease-in">
          {/* Hero Section */}
          <section
            className="flex flex-col md:flex-row justify-between items-center md:items-center bg-white dark:bg-black transition-all duration-500 ease-in"
            style={{
              paddingLeft: "80px",
              height: "900px",
              width: "100%",
            }}
          >
            {/* Mobile adjustments */}
            <style>{`
          @media screen and (max-width: 769px) {
            .hero-section {
              height: 630px;
              padding-top: 30px;
            }
          }
          @media screen and (max-width: 426px) {
            .hero-section {
              flex-direction: column;
              height: auto;
            }
            .hero-description {
              padding-left: 20px !important;
              padding-right: 10px !important;
              width: 100% !important;
            }
          }
        `}</style>
            <div className="hero-section flex flex-col w-full md:w-1/2 justify-center items-start pl-12 pr-0 md:pr-[70px]">
              <div className="object-contain h-10 w-auto mb-5">
                <img
                  src={
                    isDark
                      ? "assets/updated/optiLogoDark.svg"
                      : "assets/optiLogo.png"
                  }
                  alt="logo"
                  className="h-full"
                />
              </div>
              <p
                className="font-semibold md:font-medium text-[#1783F7] dark:text-white mb-5"
                style={{ fontSize: "40px", lineHeight: "1.2" }}
              >
                AI-Powered SaaS Tool for Effortless Business Management
              </p>
              <p className="text-[#667085] dark:text-white text-base leading-relaxed mb-6">
                With advanced analytics, AI, and machine learning, our services
                transform operations and cost management, unlocking unparalleled
                efficiency and insights.
              </p>
              <button
                className="w-60 text-white dark:text-black font-semibold py-3 px-8 rounded-full flex items-center justify-center transition-all hover:opacity-90 
            bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] 
            dark:from-white dark:to-white dark:bg-white 
            hover:from-[#787878] hover:to-[#0653A7] 
            dark:hover:from-gray-200 dark:hover:to-gray-400"
                onClick={() => {
                  navigate("/contactUs");
                }}
              >
                Talk to Our Experts
                <img
                  src={
                    isDark
                      ? "assets/updated/crossArrow.svg"
                      : "assets/getInArrow.svg"
                  }
                  alt="Arrow"
                  className="ml-2 h-3"
                />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end ">
              <img
                src="assets/optiHeader.png"
                alt="optiSaas"
                className="w-auto h-auto max-w-full"
              />
            </div>
          </section>

          {/* Features Header Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in pt-16 md:pt-8 pb-8">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#2FC1FF] dark:text-white font-semibold text-base mb-8">
                Features
              </p>
              <p className="text-[#687DA9] dark:text-white font-normal text-3xl md:text-5xl leading-tight mb-5 px-4">
                A Platform Your Entire Business{" "}
                <br className="hidden md:block" /> will Love
              </p>
              <p className="text-[#667085] dark:text-white font-normal text-base leading-6 max-w-3xl px-4">
                Discover a game-changing platform designed to be the backbone of
                your business operations. <br />
                With unmatched functionality, ease of use, and efficiency, it's
                the solution your entire organization{" "}
                <br className="hidden md:block" /> will love.
              </p>
            </div>
          </section>

          {/* Feature Columns Section */}
          <section className="bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in">
            <style>{`
          .section-3 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            padding: 40px;
            justify-items: center;
            align-items: start;
            padding-bottom: 40px;
          }
          @media screen and (max-width: 426px) {
            .section-3 {
              padding: 0 !important;
            }
          }
        `}</style>
            <div className="section-3">
              {[qualityFeatures, saasManagement, stepsToAutomate].map(
                (column, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0"
                  >
                    <p className="text-[#687DA9] dark:text-white font-semibold text-2xl md:text-3xl mb-5">
                      {column.title}
                    </p>
                    <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                      {column.description}
                    </p>
                    <ul className="text-[#666666] dark:text-white font-normal text-base leading-6 list-disc ml-8">
                      {column.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Integrations Section */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in">
            <style>{`
          .section-4 {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            height: 640px;
            width: 100%;
            padding-bottom: 35px;
          }
          @media screen and (max-width: 426px) {
            .section-4 {
              flex-direction: column !important;
            }
          }
        `}</style>
            <div className="section-4">
              <div className="flex flex-col justify-center items-start pl-5 md:pl-10 pr-2 md:pr-0">
                <p className="text-[#2FC1FF] dark:text-white font-semibold text-3xl md:text-4xl mb-10">
                  Integrations
                </p>
                <p className="text-[#687DA9] dark:text-white font-normal text-3xl md:text-4xl leading-tight mb-4">
                  Get more value from OptiSaaSAI
                </p>
                <p className="text-[#666666] dark:text-white font-normal text-base leading-6 mb-8 max-w-md">
                  Connect your tools, connect your teams. With 200+ apps in our
                  directory, <br /> your favorite tools are just a click away.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                  {integrations.map((item, idx) => (
                    <div key={idx} className="pr-2 md:pr-8">
                      <img
                        src={isDark ? item.iconDark : item.icon}
                        alt={item.title}
                        style={{
                          height: "100px",
                          width: "100px",
                          marginBottom: "8px",
                        }}
                      />
                      <p className="text-[#7E7E7E] dark:text-white font-bold text-2xl mb-2">
                        {item.title}
                      </p>
                      <p className="text-[#666666] dark:text-white font-normal text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-auto mt-8 md:mt-0 mb-12 md:mb-0">
                <img src="assets/sec-3.png" alt="optiSaas" className="pt-4" />
              </div>
            </div>
          </section>

          {/* AI & Adaptors Section */}
          <section className="bg-white dark:bg-black transition-all duration-500 ease-in">
            <style>{`
          .section-5 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            padding: 40px;
            justify-items: center;
            align-items: start;
          }
          @media screen and (max-width: 426px) {
            .section-5 {
              padding: 0 !important;
            }
          }
        `}</style>
            <div className="section-5 mt-16 md:mt-0">
              {/* Generative AI */}
              <div className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0">
                <img
                  src="assets/sec-5-l1.png"
                  alt="Generative AI"
                  className="mb-2"
                />
                <p className="text-[#687DA9] dark:text-white font-bold text-2xl md:text-3xl mt-8 md:mt-0 mb-5">
                  Generative AI
                </p>
                <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                  At OptiSaaSAI, we introduce Ask Amigo, an AI-powered assistant
                  designed to enhance user experience with intelligent,
                  intuitive support.
                </p>
                <ul className="text-[#666666] dark:text-white font-normal text-base leading-6 list-disc ml-8">
                  <li>Natural Language Understanding</li>
                  <li>Personalized Recommendations</li>
                  <li>24/7 Instant Assistance</li>
                  <li>Problem Resolution and FAQs</li>
                  <li>Adoptive Learning</li>
                  <li>Multi-Channel Accessibility</li>
                </ul>
              </div>

              {/* Pre Integrated Adaptors */}
              <div className="flex flex-col justify-start items-start pl-5 md:pl-10 pr-2 md:pr-0">
                <img
                  src="assets/sec-5-l2.png"
                  alt="Pre Integrated Adaptors"
                  className="mb-2"
                />
                <p className="text-[#687DA9] dark:text-white font-bold text-2xl md:text-3xl mt-8 md:mt-0 mb-5">
                  Pre Integrated Adaptors
                </p>
                <p className="text-[#667085] dark:text-white font-normal text-base leading-6 mb-5">
                  At OptiSaaSAI, we focus on value and flexibility, offering
                  free integrations with top SaaS platforms and a dynamic
                  connectors framework to provide a robust, adaptable solution
                  for your business.
                </p>
                <ul className="text-[#666666] dark:text-white font-normal text-base leading-6 list-disc ml-8">
                  <li>Cost Efficiency</li>
                  <li>Enhanced Functionality</li>
                  <li>Agile Development Approach</li>
                  <li>Customization for Unique Needs</li>
                  <li>User-Friendly Configuration</li>
                  <li>Robust Documentation</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
