import React, { useEffect, useState } from "react";
import { ServicesSection } from "../components/Home/ServiceSection";
import IndustryFocusSection from "../components/Home/IndustryFocusSection";
import WhatWeOfferSection from "../components/Home/WhatWeOfferSection";
import Solutions from "../components/Home/Solutions";
// import Blogs from "../components/Home/Blogs";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import Offerings from "../components/Home/Offerings";
import PageTransition from "../components/PageTransition";
import SearchSection from "../components/chat-bot/SearchSection.tsx";
import SvgIconComponent from "../components/ui/SvgIconComponent.tsx";

// SVG Icons
import ListIcons from "../assets/listIcons.svg?react";

interface AccordionItem {
  id: number;
  title: string;
  desc: string;
  features: string[];
  image: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Agentic AI",
    desc: "We empower you to run your business smarter by enabling systems that can act, adapt, and make decisions faster so you can stay agile and move ahead with confidence using Agentic AI.",
    features: ["Data Innovation", "Data Engineering", "Data Governance"],
    image: "assets/updated/AgenticAI.svg",
  },
  {
    id: 2,
    title: "Cyber AI",
    desc: "Mindgraph equips you to proactively identify threats, strengthen security response, and ensure enterprise resilience at scale.",
    features: ["Cybersecurity for AI", "AI for Cybersecurity"],
    image: "assets/updated/cyberAI.svg",
  },
  {
    id: 3,
    title: "Enterprise AI",
    desc: "Enterprise AI solutions that unlocks your potential to complex data into meaningful insights, modernize workflows, and support measurable, long-term business performance.",
    features: [
      "Workflow Automations",
      "Implementations and Integrations of Customer Experience, CRM, ERP and other Products",
    ],
    image: "assets/updated/EnterAI.svg",
  },
];

const offerParams = {
  title: "What we offer",
  subtitle: "Our Capabilities",
  desc: "",
  cards: [
    {
      title: "AI & Machine Learning",
      number: "01.",
      pageLink: "AI&MachineLearning",
      bgImage: "assets/updated/AI_Cap.svg",
      desc: "Custom AI solutions with deep learning, NLP, computer vision, and predictive analytics for faster decisions and better automation.",
    },
    {
      title: "Cybersecurity",
      number: "02.",
      pageLink: "CyberSecurity",
      bgImage: "assets/updated/Cyber_Cap.svg",
      desc: "In today’s hyper-connected world, cybersecurity is more than                just a technical requirement — it’s a strategic imperative.",
    },
    {
      title: "Cloud & Infra Services",
      number: "03.",
      pageLink: "Cloud_Infrastructure",
      bgImage: "assets/updated/Cloud_Cap.svg",
      desc: "In an era driven by digital agility and scalability, Mindgraph empowers enterprises to modernize their infrastructure and unlock the full potential of the cloud.",
    },
    {
      title: "ERP, CRM & AI Ecosystem",
      number: "04.",
      pageLink: "ERP_CRM&AI_Ecosystem",
      bgImage: "assets/updated/Erp_Cap.svg",
      desc: "In today’s fast-paced digital economy, organizations require more than just standalone systems — they need a connected ecosystem that seamlessly unifies operations, customer                 engagement, and data intelligence.",
    },
  ],
};

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [descMargin, setDescMargin] = useState<string>("0px");

  const getResponsiveMargin = () => {
    if (window.innerWidth >= 1024) return "220px";
    if (window.innerWidth >= 768) return "150px";
    return "0px";
  };

  useEffect(() => {
    const handleResize = () => {
      setDescMargin(getResponsiveMargin());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`.off-border{
        border:0.5px solid white;
      }`}
      </style>

      <PageTransition>
        <div className="overflow-x-hidden max-w-full dark:bg-black">
          {/* ─── Hero Section ─── */}
          <section className="  bg-white dark:bg-[#000000] text-[#1F3F68] dark:text-white overflow-hidden md:px-[40px] lg:px-[100px] border-b border-[#E0F0FF] dark:border-transparent">
            <div className="flex flex-col md:flex-row gap-2 pt-[50px] pb-[100px] md:items-start 2xl-plus:max-w-8xl 2xl-plus:mx-auto">
              <div className="pl-4 md:pl-0 space-y-4 hero-text w-4/6 my-auto">
                <h2 className="text-5xl md:text-5xl lg:text-5xl  font-bold text-radiant text-gradient">
                  AI-Powered <br />
                  Cyber-Secured <br />
                  Enterprise-Governed
                </h2>
                <p className="text-3xl text-gray-600 dark:text-gray-200">
                  Driving Innovation in <br />
                  Mission-Critical Industries
                </p>
              </div>

              <SearchSection />
            </div>
          </section>

          {/* ─── Desktop Accordion Section ─── */}
          <section
            className="px-0 md:px-[40px] lg:px-[120px] z-10
        bg-gradient-to-b from-[#EAF9FD] via-[#DEF8FF] to-white
        dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]
        hidden md:block"
          >
            <div className="w-full h-[500px] flex gap-0 2xl-plus:max-w-8xl 2xl-plus:mx-auto">
              {accordionItems.map((item, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`accordion-item relative transition-all duration-500 overflow-hidden group
    border border-[#1783F7]/20 
    bg-gradient-to-b from-[#72c7de] via-[#5bc4e0] to-[#44bdde]
    dark:bg-[#000000] dark:bg-none
    ${isActive ? "flex-[2]" : "flex-1"}
  `}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    {/* Background image */}
                    <div
                      className={`image-bg absolute h-full w-[80%] bg-no-repeat bg-right bg-contain transition-all duration-500 ${
                        idx === 0
                          ? "right-0 top-[-140px]"
                          : "right-[-50px] bottom-[-120px]"
                      }`}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        width: isActive ? "60%" : idx === 0 ? "70%" : "50%",
                      }}
                    />

                    {/* Overlay */}
                    <div
                      className="
                absolute inset-0
                bg-white/70 dark:bg-black/40
                flex flex-col justify-between p-6
              "
                    >
                      <div className="flex flex-col gap-10">
                        <h3 className="text-3xl font-extrabold text-[#1F3F68] dark:text-white">
                          {item.title}
                        </h3>

                        <p
                          className="text-[#667085] dark:text-white text-lg desc opacity-90 transition-all duration-500"
                          style={{ marginRight: isActive ? descMargin : "0px" }}
                        >
                          {item.desc}
                        </p>
                      </div>

                      <ul
                        className="feature-list mt-4 space-y-2 transition-opacity duration-300"
                        style={{ opacity: isActive ? 1 : 0 }}
                      >
                        {item.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center text-[#1F3F68] dark:text-white"
                          >
                            <SvgIconComponent
                              icon={ListIcons}
                              className="w-4 h-4 mr-2"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Active indicator bar at bottom */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1783F7] dark:bg-[#1783F7]" />
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── Mobile Accordion Section ─── */}
          <section
            className="px-4 z-10
        bg-gradient-to-b from-[#EAF9FD] via-[#DEF8FF] to-white
        dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]
        block md:hidden"
          >
            <div className="w-full h-auto flex flex-col gap-4">
              {accordionItems.map((item, idx) => {
                return (
                  <div
                    key={item.id}
                    className="accordion-item relative transition-all duration-500 overflow-hidden group
                bg-white dark:bg-[#000]
                rounded-md
                border border-[#1783F7]/20 dark:border-[#333]
                h-[420px]
                shadow-sm dark:shadow-none
              "
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    {/* Background image */}
                    <div
                      className="image-bg absolute right-0 top-0 h-[335px] w-full bg-no-repeat bg-right bg-contain transition-all duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Overlay */}
                    <div
                      className="
                absolute inset-0
                bg-white/70 dark:bg-black/40
                flex flex-col justify-between p-6 pr-[100px]
              "
                    >
                      <div className="flex flex-col gap-10">
                        <h3 className="text-3xl font-extrabold text-[#1F3F68] dark:text-white">
                          {item.title}
                        </h3>

                        <p className="desc text-[#667085] dark:text-white text-sm lg:leading-[26px]">
                          {item.desc}
                        </p>
                      </div>

                      <ul className="feature-list mt-4 space-y-2 opacity-100 transition-opacity duration-300">
                        {item.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center text-[#1F3F68] dark:text-white"
                          >
                            <SvgIconComponent
                              icon={ListIcons}
                              className="w-4 h-4 mr-2"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <ServicesSection />
          <IndustryFocusSection />
          <WhatWeOfferSection {...offerParams} />
          <Solutions />
          <Offerings />
          <WhyChooseUsSection />
        </div>
      </PageTransition>
    </>
  );
};

export default Home;
