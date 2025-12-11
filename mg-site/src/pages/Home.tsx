import React, { useEffect, useState } from "react";
import { ServicesSection } from "../components/Home/ServiceSection";
import IndustryFocusSection from "../components/Home/IndustryFocusSection";
import WhatWeOfferSection from "../components/Home/WhatWeOfferSection";
import Solutions from "../components/Home/Solutions";
import Blogs from "../components/Home/Blogs";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import Offerings from "../components/Home/Offerings";
import { Helmet } from "react-helmet";

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
    desc: "MindGraph harnesses the power of Agentic AI to drive intelligent automation, adaptive decision-making, and continuous business innovation.",
    features: ["Data Innovation", "Data Engineering", "Data Governance"],
    image: "assets/updated/AgenticAI.svg",
  },
  {
    id: 2,
    title: "Cyber AI",
    desc: "MindGraph harnesses the power of Cyber AI to drive intelligent automation, adaptive decision-making, and continuous business innovation.",
    features: ["Cybersecurity for AI", "AI for Cybersecurity"],
    image: "assets/updated/cyberAI.svg",
  },
  {
    id: 3,
    title: "Enterprise AI",
    desc: "MindGraph harnesses the power of Enterprise AI to drive intelligent automation, adaptive decision-making, and continuous business innovation.",
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
  desc: "Mindgraph empowers sector-specific transformation with AI-driven, data-centric, and cloud-enabled solutions. Our deep domain expertise and tailored platforms help enterprises across industries accelerate innovation, streamline operations, and improve decision-making—securely and at scale.",
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
      pageLink: "Cloud&Infrastructure_Services",
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
      <Helmet>
        <title>Mind Graph</title>
        <meta
          name="description"
          content="Empower your business with a top AI enterprises company. Mind Graph delivers cutting-edge IT solutions to accelerate your growth. Get started today!"
        />
      </Helmet>
      <div className="overflow-x-hidden max-w-full">
        {/* Hero Section */}
        <section className="bg-[#191919] text-white overflow-hidden">
          <div className="flex flex-col md:flex-row mx-0 md:mx-[50px] lg:mx-[120px] pt-[50px] pb-[100px] md:items-center">
            {/* Heading + Subtext */}
            <div className="md:w-[50%] pl-4 md:pl-0 space-y-4 hero-text">
              <h2 className="text-5xl md:text-5xl lg:text-6xl text-radiant font-bold text-gradient">
                AI-Powered. <br />
                Cyber-Secure.
                <br /> Enterprise-Ready.
              </h2>
              <p className="text-4xl">
                Driving Intelligent Innovation <br />
                Across Critical Industries
              </p>
            </div>

            {/* Form */}
            <div className="md:w-[50%] mt-6 px-4 md:px-0">
              <form>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="assets/updated/star_icon.svg" alt="star icon" />
                  </div>
                  <input
                    type="text"
                    className="w-full h-12 italic pl-10 pr-4 placeholder-black placeholder-opacity-75 text-base border"
                    placeholder="Ask us anything about your requirement"
                  />
                </div>
              </form>
              <div className="grid grid-cols-3 gap-4 mt-2 bg-[#191919] searchResult">
                {[
                  "What are the AI Services help to build my product?",
                  "What exactly does your AI product do",
                  "Are there case studies or success stories from Aviation industries?",
                  "Does it integrate with my existing systems (CRM, ERP, APIs, etc.)?",
                  "Who owns the data and the AI-generated outputs?",
                  "How is sensitive data protected?",
                  "How long does it take to implement?",
                  "What type of customer support is available (email, chat, 24/7)?",
                  "Is there a service-level agreement (SLA)?",
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="bg-[#D9D9D9] p-2 bg-opacity-[25%] text-sm flex items-center font-normal hover:bg-[#191919] hover:border hover:border-white transition-all duration-300 transform hover:scale-105"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="px-0 md:px-[40px] lg:px-[120px] z-10 bg-gradient-to-b from-[#191919] via-[#191919] to-[#000000] hidden md:block">
          <div className="w-full h-[500px] flex gap-0">
            {accordionItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`accordion-item relative transition-all duration-500 overflow-hidden group bg-[#000] ${
                    isActive ? "flex-[2]" : "flex-1"
                  }`}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <div
                    className={`image-bg absolute  h-full w-[80%] bg-no-repeat bg-right bg-contain transition-all duration-500 ${
                      idx == 0
                        ? "right-0 top-[-140px]"
                        : "right-[-50px] bottom-[-120px]"
                    }`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      width: isActive ? "60%" : idx === 0 ? "70%" : "50%",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                    <div className="flex flex-col gap-10">
                      <h3 className="text-3xl font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p
                        className="text-white text-sm desc opacity-90 transition-all duration-500"
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
        <section className="px-4 z-10 bg-gradient-to-b from-[#191919] via-[#191919] to-[#000000] block md:hidden">
          <div className="w-full h-auto flex flex-col gap-4">
            {accordionItems.map((item, idx) => {
              // const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`accordion-item relative transition-all duration-500 overflow-hidden group bg-[#000] rounded-md border border-[#333] h-[420px]`}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <div
                    className="image-bg absolute right-0 top-0 h-[335px] w-full bg-no-repeat bg-right bg-contain transition-all duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 pr-[100px]">
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

        <ServicesSection></ServicesSection>

        <IndustryFocusSection></IndustryFocusSection>

        <WhatWeOfferSection {...offerParams}></WhatWeOfferSection>

        <Solutions></Solutions>

        {/* Offerings Section */}
        <Offerings></Offerings>

        {/* 5. Why Choose Us section */}
        <WhyChooseUsSection></WhyChooseUsSection>

        <Blogs></Blogs>
      </div>
    </>
  );
};

export default Home;
