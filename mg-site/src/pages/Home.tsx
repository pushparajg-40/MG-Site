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
          {/* Hero Section */}
          <section className="bg-[#191919] dark:bg-[#000000] text-white overflow-hidden md:px-[40px] lg:px-[100px]">
            <div className="flex flex-col md:flex-row gap-2 pt-[50px] pb-[100px] md:items-start 2xl-plus:max-w-8xl 2xl-plus:mx-auto">
              <div className="pl-4 md:pl-0 space-y-4 hero-text w-4/6 my-auto">
                <h2 className="text-5xl md:text-5xl lg:text-5xl text-radiant font-bold text-gradient">
                  AI-Powered <br />
                  Cyber-Secured <br />
                  Enterprise-Governed
                </h2>
              </div>

              <SearchSection />
            </div>
          </section>

          {/* Accordion Section */}
          <section
            className="px-0 md:px-[40px] lg:px-[120px] z-10 
        bg-gradient-to-b from-[#191919] via-[#191919] to-[#000000]
        dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]
        hidden md:block"
          >
            <div className="w-full h-[500px] flex gap-0 2xl-plus:max-w-8xl 2xl-plus:mx-auto">
              {accordionItems.map((item, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={item.id}
                    className={`accordion-item relative transition-all duration-500 overflow-hidden off-border group bg-[#000000] ${
                      isActive ? "flex-[2]" : "flex-1"
                    }`}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div
                      className={`image-bg absolute h-full w-[80%] bg-no-repeat bg-right bg-contain transition-all duration-500 ${
                        idx == 0
                          ? "right-0 top-[-140px]"
                          : "right-[-50px] bottom-[-120px]"
                      }`}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        width: isActive ? "60%" : idx === 0 ? "70%" : "50%",
                      }}
                    />

                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex flex-col justify-between p-6">
                      <div className="flex flex-col gap-10">
                        <h3 className="text-3xl font-extrabold text-white">
                          {item.title}
                        </h3>

                        <p
                          className="text-white text-lg desc opacity-90 transition-all duration-500"
                          style={{ marginRight: isActive ? descMargin : "0px" }}
                        >
                          {item.desc}
                        </p>
                      </div>

                      <ul
                        className="feature-list mt-4 space-y-2 text-white transition-opacity duration-300"
                        style={{ opacity: isActive ? 1 : 0 }}
                      >
                        {item.features.map((f, i) => (
                          <li key={i} className="flex items-center">
                            <img
                              src="assets/updated/listIcons.svg"
                              className="w-4 h-4 mr-2"
                              alt=""
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

          {/* Mobile Accordion */}
          <section
            className="px-4 z-10 
        bg-gradient-to-b from-[#191919] via-[#191919] to-[#000000]
        dark:from-[#000000] dark:via-[#000000] dark:to-[#000000]
        block md:hidden"
          >
            <div className="w-full h-auto flex flex-col gap-4">
              {accordionItems.map((item, idx) => {
                return (
                  <div
                    key={item.id}
                    className="accordion-item relative transition-all duration-500 overflow-hidden group bg-[#000] rounded-md border border-[#333] h-[420px]"
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div
                      className="image-bg absolute right-0 top-0 h-[335px] w-full bg-no-repeat bg-right bg-contain transition-all duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex flex-col justify-between p-6 pr-[100px]">
                      <div className="flex flex-col gap-10">
                        <h3 className="text-3xl font-extrabold text-white">
                          {item.title}
                        </h3>

                        <p className="desc text-white text-sm lg:leading-[26px]">
                          {item.desc}
                        </p>
                      </div>

                      <ul className="feature-list mt-4 space-y-2 text-white opacity-100 transition-opacity duration-300">
                        {item.features.map((f, i) => (
                          <li key={i} className="flex items-center">
                            <img
                              src="assets/updated/listIcons.svg"
                              className="w-4 h-4 mr-2"
                              alt=""
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
