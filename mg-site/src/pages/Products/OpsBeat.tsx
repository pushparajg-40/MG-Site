import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/PageTransition";

const FEATURES = [
  {
    title: "Low Code/No Code Application",
    description:
      "Design, customize, and deploy workflows without writing a single line of code.",
  },
  {
    title: "Robust Workflow Engine",
    description:
      "Automate tasks and standardize processes for improved speed and accuracy.",
  },
  {
    title: "Customizable Dashboards",
    description:
      "Get a 360° real-time view of tickets, performance metrics, and operational KPIs.",
  },
  {
    title: "Multichannel Support",
    description:
      "Deliver consistent service through Email, Chat, SMS, and more—anytime, anywhere.",
  },
];

const CAPABILITIES = [
  {
    title: "Aggregations APIs",
    description:
      "Go beyond basic metrics. OpsBeat's advanced APIs enable real-time aggregation of tickets, analytics, and system data—offering richer operational insights than competitors like Freshdesk.",
  },
  {
    title: "Platform Extensibility",
    description:
      "Unlike traditional ITSM platforms, OpsBeat empowers you to build full-scale custom applications—tailored to your exact IT requirements.",
  },
  {
    title: "Built-In AI Features",
    description:
      "Leverage intelligent automation, predictive analytics, and sentiment analysis to optimize performance, anticipate issues, and enhance service delivery.",
  },
];

const WHY_CHOOSE = [
  "AI-Powered ITSM with advanced automation and insights",
  "Low-code tools for easy, flexible workflow customization",
  "Enterprise-grade platform extensibility",
  "Better performance visibility with advanced dashboards",
  "Designed for scale, speed, and simplicity",
  "A smarter alternative to traditional platforms like Freshdesk",
];

export default function OpsBeat() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

  const navigate = useNavigate();

  return (
    <>
      <PageTransition>
        <Helmet>
          <title>
            OpsBeat – AI-Powered IT Service Management (ITSM) Platform
          </title>
          <meta
            name="description"
            content="OpsBeat is an AI-powered ITSM platform offering low-code workflows, smart automation, multichannel support, and real-time dashboards to streamline IT service operations."
          />
        </Helmet>
        <div className="dark:bg-black">
          <section className="overflow-section dark:bg-black transition-all duration-500 ease-in flex flex-col lg:flex-row justify-between items-center px-6 lg:pl-20 py-10 lg:py-0 lg:h-screen lg:pb-[110px]">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-8 ">
                <p
                  className="
    font-bold text-[32.76px]
    bg-gradient-to-b from-[#0C1733] to-[#244599]
    text-transparent bg-clip-text
    md:bg-clip-text md:text-transparent
    dark:bg-none dark:text-white
  "
                >
                  OpsBeat
                </p>
              </div>

              <h1 className="text-white md:text-[#1783F7] dark:text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                AI-Powered IT Service Management Platform
              </h1>

              <p className="text-white md:text-[#667085] dark:text-white text-base mb-6">
                Revolutionize your IT operations with smart automation,
                real-time visibility, and seamless integrations. OpsBeat brings
                speed, simplicity, and scale to modern service management.
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

            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end ">
              <img
                src="/assets/opsBeatHeader.png"
                alt="OpsBeat platform"
                className="w-full max-w-2xl "
              />
            </div>
          </section>

          <section className="section-between lg:flex flex-row dark:bg-[#181818] transition-all duration-500 ease-in px-6 lg:px-20 py-16 lg:py-20">
            <div className="mb-10 lg:mb-0 lg:w-1/2">
              <p className="font-semibold text-2xl lg:text-[32px] pb-8 text-[#1783F7] dark:text-white">
                What is OpsBeat?
              </p>
              <p className="font-bold text-3xl lg:text-[43px] pb-5 text-[#687DA9] dark:text-white leading-tight">
                Designed for Responsible Growth
              </p>
              <p className="text-base lg:text-[16px] text-[#666666] dark:text-white leading-[150%]">
                OpsBeat is more than an ITSM tool—it's a powerful platform built
                to streamline IT workflows, drive operational efficiency, and
                provide deep insight into service performance. With low-code
                customization, robust automation, and built-in AI, OpsBeat
                transforms how your teams manage IT services.
              </p>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <p className="font-bold text-3xl lg:text-[43px] pb-5 text-[#687DA9] dark:text-white leading-tight">
                Why Choose OpsBeat?
              </p>
              <ul className="text-base text-[#666666] dark:text-white space-y-3 list-disc list-inside">
                {WHY_CHOOSE.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-2 bg-[#F6FAFF] dark:bg-[#000000] transition-all duration-500 ease-in py-20">
            <p className="font-semibold text-xl lg:text-[26px] pb-8 text-[#1783F7] dark:text-white text-center px-6">
              Key Features
            </p>
            <p className="font-bold text-3xl lg:text-[43px] text-center pb-6 text-[#687DA9] dark:text-white px-6 leading-tight">
              Where Efficiency Meets Intelligence
            </p>
          </section>

          <section className="section-3 bg-[#F6FAFF] dark:bg-[#000000] transition-all duration-500 ease-in grid grid-cols-1 md:grid-cols-4 gap-10 px-6 lg:px-16 py-16">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <p className="font-semibold text-2xl lg:text-[32px] pb-5 text-[#687DA9] dark:text-white xl:pr-[30px]">
                  {feature.title}
                </p>
                <p className="text-base text-[#667085] dark:text-white leading-[25.89px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          <section className="section-2 dark:bg-[#181818] transition-all duration-500 ease-in py-20">
            <p className="font-bold text-3xl lg:text-[43px] text-center pb-6 text-[#687DA9] dark:text-white px-6 leading-tight">
              Smart Capabilities That Set <br /> OpsBeat Apart
            </p>
          </section>

          <section className="section-3 dark:bg-[#181818] transition-all duration-500 ease-in grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-16 py-16">
            {CAPABILITIES.map((capability, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <p className="font-semibold text-2xl lg:text-[32px] pb-5 text-[#687DA9] dark:text-white">
                  {capability.title}
                </p>
                <p className="text-base text-[#667085] dark:text-white leading-[25.89px]">
                  {capability.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </PageTransition>
    </>
  );
}
